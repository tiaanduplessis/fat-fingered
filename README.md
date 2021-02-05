
# fat-fingered
[![package version](https://img.shields.io/npm/v/fat-fingered.svg?style=flat-square)](https://npmjs.org/package/fat-fingered)
[![package downloads](https://img.shields.io/npm/dm/fat-fingered.svg?style=flat-square)](https://npmjs.org/package/fat-fingered)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/fat-fingered.svg?style=flat-square)](https://npmjs.org/package/fat-fingered)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Find common email typing mistakes

## Table of Contents

- [About](#about)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#License)

## About

This package depends on [fuzzyset](https://www.npmjs.com/package/fuzzyset.js) to find mistakes in commonly used email addresses. It is used on the onboarding flow of [Varsity Vibe](https://varsityvibe.co.za/).

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install fat-fingered
$ # OR
$ yarn add fat-fingered
```

## Usage

```js
import fatFingered from 'fat-fingered'

fatFingered('tiaan@gnail.com') // [ 'gmail' ]
fatFingered('t@hotmail.con') // [ '.com' ]
fatFingered('t@lalala.nanana') // []
```

## Contribute

1. Fork it and create your feature branch: `git checkout -b my-new-feature`
2. Commit your changes: `git commit -am "Add some feature"`
3. Push to the branch: `git push origin my-new-feature`
4. Submit a pull request

## License

MIT 
    