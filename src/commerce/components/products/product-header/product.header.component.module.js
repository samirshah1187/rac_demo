'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');

require('angular-animate');
require('../../../../../src/vendors/typeahead/typeahead.js');
require('../../../../../src/vendors/typeahead/angular-typeahead.js');

var productHeaderComponent = require('./product.header.component');
var productHeaderComponentService = require('./product.header.component.service');

var productHeaderComponentModule = angular.module('productHeaderComponentModule', [uiRouter, 'ngAnimate', 'nuskin.typeahead'])
    .component('mediaheadercomponent', productHeaderComponent)
    .service('mediaHeaderComponentService', productHeaderComponentService)

import Styles from './product.header.component.scss';

module.exports = productHeaderComponentModule;
