type lines = 'AEL' | 'TCL' | 'WRL' | 'TKL';

type stationsAEL = 'HOK' | 'KOW' | 'TSY' | 'AIR' | 'AWE';
type stationsTCL =
  | 'HOK'
  | 'KOW'
  | 'OLY'
  | 'NAC'
  | 'LAK'
  | 'TSY'
  | 'SUN'
  | 'TUC';
type stationsWRL =
  | 'HUH'
  | 'ETS'
  | 'AUS'
  | 'NAC'
  | 'MEF'
  | 'TWW'
  | 'KSR'
  | 'YUL'
  | 'LOP'
  | 'TIS'
  | 'SIH'
  | 'TUM';
type stationsTKL =
  | 'NOP'
  | 'QUB'
  | 'YAT'
  | 'TIK'
  | 'TKO'
  | 'LHP'
  | 'HAH'
  | 'POA';

type stations = stationsAEL | stationsTCL | stationsWRL | stationsTKL;

type languages = 'EN' | 'TC';

interface IGetETAParameters {
  line: lines;
  sta: stations;
  lang?: languages;
}

interface IGetETAMetaResults {
  status: number;
  message: string;
  curr_time: string;
  sys_time: string;
  isdelay: 'Y' | 'N';
}

interface IGetETALineStationResults {
  curr_time: string;
  sys_time: string;
  UP: IGetETALineStationResult[];
  Down: IGetETALineStationResult[];
}

interface IGetETALineStationResult {
  ttnt: string;
  valid: string;
  plat: string;
  time: string;
  source: string;
  dest: string;
  seq: string;
}

interface IGetTranslationParameters {
  str: lines | stations;
  lang: languages;
}

export {
  lines,
  stationsAEL,
  stationsTCL,
  stationsWRL,
  stationsTKL,
  stations,
  languages,
  IGetETAParameters,
  IGetETAMetaResults,
  IGetETALineStationResults,
  IGetETALineStationResult,
  IGetTranslationParameters,
};
