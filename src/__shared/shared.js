'use strict';

var angular = require('angular');
var headerNav = require('./header/headerNav');
var footerNav = require('./footer/footerNav.component.module');

var sharedModule = angular.module('app.shared', [
  footerNav.name,
  headerNav.name
]);

module.exports = sharedModule;
