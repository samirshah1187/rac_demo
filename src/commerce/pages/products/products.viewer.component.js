'use strict';
var template = require('./products.viewer.jade');
var productsTemplate = require('./products.jade');
var noresultTemplate = require('./products.noresult.jade');

var productCenterViewerComponent = {
    restrict: 'E',
    templateUrl: template
};

module.exports = productCenterViewerComponent;
