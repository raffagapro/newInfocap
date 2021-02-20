#!/bin/bash

npm install
ionic cordova platform add ios
ionic cordova platform add android
ionic cordova build ios
ionic cordova build android