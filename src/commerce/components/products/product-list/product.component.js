'use strict';
var template = require('./product.component.jade');
var controller = require('./product.component.controller');

var productListComponent = {
    templateUrl: template,
    controller: controller,
    controllerAs: 'ctrl',
    replace: true,
    bindings: {
        sourceUrl: '=',
        ifDeleteVisible: '=',
        ifFavUndoVisible: '='
    }
};

module.exports = productListComponent;
