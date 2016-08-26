var angular = require('angular');
var uiRouter = require('angular-ui-router');

var productsViewerComponent = require('./products.viewer.component');
var productHeaderComponentModule = require('../../components/products/product-header/product.header.component.module');
var productBannerComponentModule = require('../../components/products/product-banner/product.banner.component.module');
var productTileComponentModule = require('../../components/products/product-tile/product.tile.component.module');
var productCategoryComponentModule = require('../../components/products/product-list/product.component.module');
var productRecommendationComponentModule = require('../../components/products/product-recommendation/product.recommendation.module');
var productChecklistComponentModule = require('../../components/products/product-checklist/product.checklist.module');
var productNoresultModule = require('../../components/products/product-noresult-found/product.noresult.component.module');


var productViewerModule = angular.module('productViewerModule', [
  uiRouter,
  productBannerComponentModule.name,
  productTileComponentModule.name,
  productHeaderComponentModule.name,
  productCategoryComponentModule.name,
  productRecommendationComponentModule.name,
  productChecklistComponentModule.name,
  productNoresultModule.name
])
    .config(($stateProvider) => {
        $stateProvider
            .state('home', {
                url: '/home',
                template: '<productviewer></productviewer>'
            })
            .state('home.products', {
                url: '/products',
                templateUrl: 'src/commerce/pages/products/products.html'
            })
            .state('home.checkout', {
                url: '/checkout',
                templateUrl: 'src/commerce/pages/products/products.checkout.html'
            })
            .state('home.noresult', {
                url: '/noresult',
                templateUrl: 'src/commerce/pages/products/products.noresult.html'
            });

    })
    .component('productviewer', productsViewerComponent);

module.exports = productViewerModule;
