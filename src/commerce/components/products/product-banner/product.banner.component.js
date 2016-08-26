'use strict';
var template = require('./product.banner.component.jade');
var controller = require('./product.banner.component.controller');


var productBannerComponent = {
    templateUrl: template,
    controller: controller,
    controllerAs: 'ctrl',
    replace: true,
    bindings: {
        categoryName: "@",
        uploadIcon: "=",
        bannerUrl: "=",
        bannerMobileUrl: "=",
        content: "@"
    }
};

module.exports = productBannerComponent;
