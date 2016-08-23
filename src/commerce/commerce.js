var angular = require('angular');
var productsViewer = require('./pages/products/products.viewer');

var productsModule = angular.module('app.products', [
  productsViewer.name
]);

module.exports = productsModule;
