'use strict'

function footerNavController(footerNavComponentService){
    var self=this;
	var promise = footerNavComponentService.getSocialIcons('../../../../src/__shared/footer/footerNav.component.json');
    promise.then(function (data) {
        self.socialIcons = data;
    });

};
module.exports = footerNavController;
