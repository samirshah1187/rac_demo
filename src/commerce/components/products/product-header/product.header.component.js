'use strict';
var template = require('./product.header.component.jade');
var controller = require('./product.header.component.controller');

var productHeaderComponent = {
    templateUrl: template,
    controller: controller,
    controllerAs: 'ctrl',
    replace: true,
    bindings: {
        listItem: "=",
        extraClass: "@"
    }
};

module.exports = productHeaderComponent;
