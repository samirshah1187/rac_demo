'use strict';

function productBannerComponentController($stateParams, $rootScope) {

    this.onlyBanner = '';
    this.bannerClass = '';
    this.btnName = '';

    var self = this;


    self.init = function () {
        if ($stateParams.state)
            self.onlyBanner = true;
        else
            self.onlyBanner = false;

        if (self.categoryName == 'My Favorites') {
            self.bannerClass = 'myFavBanner';
            self.btnName = 'START EXPLORING';
        } else if (self.categoryName == 'My Content') {
            self.bannerClass = 'myContentBanner';
            self.btnName = 'UPLOAD';
        } else if (self.categoryName == 'Search Result') {
            self.bannerClass = 'myContentBanner';
            self.btnName = 'SEARCH AGAIN';
        } else if (self.categoryName == 'products')
            self.bannerClass = 'productsBanner';
        else if (self.categoryName == 'lifestyle')
            self.bannerClass = 'lifestyleBanner';
        else if (self.categoryName == 'Opportunity')
            self.bannerClass = 'opportunityBanner';
    };

};


module.exports = productBannerComponentController;
