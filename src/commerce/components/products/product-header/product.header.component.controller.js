'use strict';

var _ = require('lodash');

function productHeaderComponentController(productHeaderComponentService, $scope, $window, productFactory) {

    this.dropdown = false;
    this.showSearch = false;
    this.searchOverlayHeight = $window.innerHeight;
    var self = this;
    this.dropdown = false;
    this.toggledd = function () {

        if (this.dropdown) {
            this.dropdown = false;
        } else {
            this.dropdown = true;
        }
    }

    this.hitSearch = function () {

        angular.element('#searchModal').on('hidden.bs.modal', function () {  
            $window.location.href = '#/mediaCenter/searchresult';
        }).modal('hide');

    }

    this.factory = productFactory;

    if (productFactory.getData()) {
        //console.log("ISERRORREQUIRED from HEADER = " + mediaCenterFactory.getData() );
        angular.element(".errorMessage").css('display', 'block');
    }

    var promise = mediaHeaderComponentService.getRecentlyViewedData();

    promise.then(function (data) {

        self.recentlyViewedData = _.take(data, 6);

    });

    promise = mediaHeaderComponentService.getSearchedHistoryData();

    promise.then(function (data) {

        self.searchedHistoryData = _.take(data, 5);

        // self.searchedHistoryData = data;

    });

    promise = mediaHeaderComponentService.getQuickSearchData();

    promise.then(function (data) {

        self.quickSearchData = data;

        //code for typeahead
        self.selectedNumber = null;

        // instantiate the bloodhound suggestion engine
        self.numbers = new Bloodhound({
            datumTokenizer: function (d) {
                return Bloodhound.tokenizers.whitespace(d.Key);
            },
            queryTokenizer: Bloodhound.tokenizers.whitespace,
            local: self.quickSearchData
        });

        self.numbers.initialize();

        // initialize the bloodhound suggestion engine
        self.numbersDataset = {
            displayKey: 'Key',
            source: self.numbers.ttAdapter()
        };

        self.exampleOptions = {
            highlight: true,
            limit: 5,
            minLength: 3
        };

        self.clearValue = function () {
            self.selectedNumber = null;
        };


    });


    this.callSearch = function () {
        self.searchOverlayHeight = $window.innerHeight;
        self.showSearch = !self.showSearch;
    }

};

//mediaCenterComponentController.$inject = ['mediaCentercomponentService'];

module.exports = productHeaderComponentController;
