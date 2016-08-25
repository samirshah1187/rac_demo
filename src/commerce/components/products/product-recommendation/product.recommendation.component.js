'use strict';
var template = require('./product.recommendation.component.jade');
var controller = require('./product.recommendation.component.controller');

var productRecommendationComponent = {
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

module.exports = productRecommendationComponent;
