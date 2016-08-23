var template =require('./footerNav.component.jade');
var controller =require('./footerNav.component.controller');

var footerNavComponent =  {
    restrict: 'E',
    templateUrl: template,
    controller: controller,
    controllerAs: 'footernav',
    bindToController: true
};

module.exports= footerNavComponent;