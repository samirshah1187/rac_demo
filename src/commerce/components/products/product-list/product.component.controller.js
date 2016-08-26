'use strict';

function productCategoryComponentController(productListComponentService, $stateParams, $window, $scope) {

    this.tileData = {};
    var self = this;
    self.showFilter = false;
    self.isMobileMode = false;
    self.filterHeight = '';

    this.showMore = true;

    this.loadMoreData = function(){
        this.limit += 4; 
        if(this.limit == self.tileData.data.length){
            this.showMore = false;
        }
    }

    var promise = productListComponentService.getTileData(this.sourceUrl);
    promise.then(function (data) {
        self.tileData = data;
    });

    var promise = productListComponentService.getFilterData();
    promise.then(function (data) {
        self.filterData = data;
    });


};


module.exports = productCategoryComponentController;
