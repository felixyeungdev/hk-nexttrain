const { NextTrain } = require('hk-nexttrain');
const fetch = require('node-fetch');
global.fetch = fetch;

(async () => {
  const line = 'TCL';
  const sta = 'TSY';

  const results = await NextTrain.getETA({
    line,
    sta,
  });

  const Tline = NextTrain.translate({
    str: 'TCL',
    lang: 'EN',
  });
  const Tsta = NextTrain.translate({
    str: 'TSY',
    lang: 'EN',
  });

  console.log({ results, Tline, Tsta });
})();
