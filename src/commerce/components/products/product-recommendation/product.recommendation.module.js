'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');

require('angular-animate');

var productRecommendationComponent = require('./product.recommendation.component');


var productRecommendationComponentModule = angular.module('productRecommendationComponentModule', [uiRouter, 'ngAnimate'])
    .component('productrecommendationcomponent', productRecommendationComponent);

import Styles from './product.recommendation.component.scss';

module.exports = productRecommendationComponentModule;
