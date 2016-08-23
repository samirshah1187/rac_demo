'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');

require('angular-animate');

var productListComponent = require('./product.component');
var productListComponentService = require('./product.component.service');


var productListComponentModule = angular.module('productListComponentModule', [uiRouter, 'ngAnimate'])
    .component('productlistcomponent', productListComponent)
    .service('productListComponentService', productListComponentService)

import Styles from './product.component.scss';

module.exports = productListComponentModule;
