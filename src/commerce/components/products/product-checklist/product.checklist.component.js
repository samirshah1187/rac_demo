'use strict';
var template = require('./product.checklist.component.jade');
var controller = require('./product.checklist.component.controller');

var productChecklistComponent = {
    templateUrl: template,
    controller: controller,
    controllerAs: 'ctrl',
    replace: true
    // bindings: {
    //     sourceUrl: '=',
    //     ifDeleteVisible: '=',
    //     ifFavUndoVisible: '='
    // }
};

module.exports = productChecklistComponent;
