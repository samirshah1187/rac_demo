require('babel-polyfill');
var $ = require('jquery');

require('tether/dist/js/tether.js');
require('bootstrap/dist/js/bootstrap.min.js');


var angular = require('angular');
var uiRouter = require('angular-ui-router');
var sanitize = require('angular-sanitize');
var uiMask = require('angular-ui-mask');
var ngMessages = require('angular-messages');
var AppComponent = require('./app.component.js');
var Shared = require('./__shared/shared');
var commerce = require('./commerce/commerce');
var Styles = require('./stylesheets/base.scss');

angular.module('myApp', [
        uiRouter,
        Shared.name,
        commerce.name,
        sanitize,
        uiMask,
        ngMessages
    ])
    .component('app', AppComponent);
