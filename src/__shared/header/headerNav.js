var angular =require('angular');
require('../../../src/vendors/typeahead/typeahead.js');
require('../../../src/vendors/typeahead/angular-typeahead.js');
var headerNavComponent =require('./headerNav.component');
var headerNavService = require('./headerNav.service')

var headerNavModule = angular.module('headerNav', ['nuskin.typeahead'
])
.component('headerNav', headerNavComponent)
.service('headerNavService', headerNavService)

import Styles from './headerNav.scss'; 

module.exports= headerNavModule;
