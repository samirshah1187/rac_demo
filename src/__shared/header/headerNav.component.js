var template =require('./headerNav.html');
var controller =require('./headerNav.controller');

var headerNavComponent =  {
    restrict: 'E',
    templateUrl: template,
    controller: controller,
    controllerAs: 'vm',
    bindToController: true
};

module.exports= headerNavComponent;
