'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');

require('angular-animate');

var productChecklistComponent = require('./product.checklist.component');


var productChecklistComponentModule = angular.module('productChecklistComponentModule', [uiRouter, 'ngAnimate'])
    .component('productchecklistcomponent', productChecklistComponent);

import Styles from './product.checklist.component.scss';

module.exports = productChecklistComponentModule;
