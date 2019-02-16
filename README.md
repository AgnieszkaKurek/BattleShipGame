# BattleShipGame
Battleship game, created in use javascript

##Prerequisites:
Open terminal and run command: `npm install`

## To run the app locally:
* run `npm run dev` to create dev js bundle and start watching all related js files
* open dist/index.html file

## Continuous Integration
Check travis pipeline:
[![Build Status](https://travis-ci.org/AgnieszkaKurek/BattleShipGame.svg?branch=master)](https://travis-ci.org/AgnieszkaKurek/BattleShipGame)

## Continuous Delivery
Application is automaticaly deployed into https://agnieszkakurek.github.io/BattleShipGame on every push to master by [Travis pipeline](https://travis-ci.org/AgnieszkaKurek/BattleShipGame)
In order to get the content of the deployed files you may:
* run `npm run prod` locally and check dist folder
* check [gh-pages branch](https://github.com/AgnieszkaKurek/BattleShipGame/tree/gh-pages)

## To run unit tests locally:
* install Firefox (it is set as a default browser for running tests)
* run `npm test` to run tests once
* run `npm run test-watch` to run tests with watching files
