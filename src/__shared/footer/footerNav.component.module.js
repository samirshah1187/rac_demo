var angular =require('angular');
var footerNavComponent =require('./footerNav.component');
var footerNavComponentService = require('./footerNav.component.service')

var footerNavModule = angular.module('footerNav', [
])
.component('footernav', footerNavComponent)
.service('footerNavComponentService', footerNavComponentService)

import Styles from './footerNav.component.scss'; 

module.exports= footerNavModule;