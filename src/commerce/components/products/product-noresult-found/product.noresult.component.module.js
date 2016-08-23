'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');

var productNoresultComponent = require('./product.noresult.component');



var productNoresultComponentModule = angular.module('productNoresultComponentModule', [uiRouter])
    .component('productnoresultcomponent', productNoresultComponent)


import Styles from './product.noresult.component.scss';

module.exports = productNoresultComponentModule;
