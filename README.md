# Next Train (Hong Kong)

Non-official Node.JS wrapper for [Next Train](https://data.gov.hk/en-data/dataset/mtr-data2-nexttrain-data)

Resources
- [API Specification](https://opendata.mtr.com.hk/doc/Next_Train_API_Spec_v1.1.pdf)
- [Data Dictionary](https://opendata.mtr.com.hk/doc/Next_Train_DataDictionary_v1.1.pdf)

# Getting Started

## Install

```bash
npm install hk-nexttrain
```

## Usage

```js

import { NextTrain } from 'hk-nexttrain';
// or
const { NextTrain } = require('hk-nexttrain');

const line = 'TCL';
const sta = 'TSY';
const lang = 'EN';

const results = await NextTrain.getETA({
  line,
  sta,
});

const Tline = NextTrain.translate({
  str: line,
  lang,
});
const Tsta = NextTrain.translate({
  str: sta,
  lang,
});
```
