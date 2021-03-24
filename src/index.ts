import {
  IGetETAParameters,
  IGetETAMetaResults,
  IGetETALineStationResults,
  IGetTranslationParameters,
} from './interfaces';
import { translations } from './translations';

const BASE_URL = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php';

const fetchWrapper = async ({ line, sta, lang }: IGetETAParameters) => {
  const url = `${BASE_URL}?line=${line}&sta=${sta}&lang=${lang}`;
  try {
    const response = await fetch(url);
    switch (response.status) {
      case 200: {
        const json = await response.json();

        const { data, ...rest } = json;
        const meta = rest as IGetETAMetaResults;

        const key = `${line}-${sta}`;

        const lineStationResults = data[key] as IGetETALineStationResults;

        const result = {
          ...meta,
          data: lineStationResults,
        };

        return result;
      }

      case 429: {
        throw new Error('too many requests');
      }

      case 500: {
        throw new Error('internal server error');
      }

      default: {
        return null;
      }
    }
  } catch (error) {
    throw new Error(error);
  }
};

class NextTrain {
  static async getETA({ sta, line, lang = 'EN' }: IGetETAParameters) {
    return await fetchWrapper({ sta, line, lang });
  }

  static translate({ str, lang }: IGetTranslationParameters) {
    return translations[lang][str];
  }
}

export { NextTrain };
