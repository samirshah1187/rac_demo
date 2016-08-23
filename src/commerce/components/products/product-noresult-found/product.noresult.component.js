'use strict';
var template = require('./product.noresult.component.jade');
var controller = require('./product.noresult.component.controller');

var productNoresultComponent = {
    templateUrl: template,
    controller: controller,
    controllerAs: 'ctrl',
    replace: true,
    bindings: {
        bannerUrl: "="
    }
};

module.exports = productNoresultComponent;
