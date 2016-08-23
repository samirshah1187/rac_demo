'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');


var productBannerComponent = require('./product.banner.component');
var productComponent = require('../product-list/product.component');


var productBannerComponentModule = angular.module('productBannerComponentModule', [uiRouter])
    .component('productbannercomponent', productBannerComponent)



import Styles from './product.banner.component.scss';

module.exports = productBannerComponentModule;
