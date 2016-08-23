'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');


var productTileComponent = require('./product.tile.component');


var productTileComponentModule = angular.module('productTileComponentModule', [uiRouter])
    .component('producttilecomponent', productTileComponent)


import Styles from './product.tile.component.scss';

module.exports = productTileComponentModule;
