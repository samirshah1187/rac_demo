'use strict';
var template = require('./product.tile.component.jade');
var controller = require('./product.tile.component.controller');

var productTileComponent = {
    templateUrl: template,
    controller: controller,
    controllerAs: 'ctrl',
    replace: true,
    bindings: {
        listItem: "=",
        extraClass: "@",
        ifDeleteVisible: "=",
        ifFavUndoVisible: "=",
        ifShareVisible: "=",
        ifFavoriteVisible: "="
    }
};

module.exports = productTileComponent;
