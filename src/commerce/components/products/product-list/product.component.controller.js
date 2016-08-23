'use strict';

function productCategoryComponentController(productListComponentService, $stateParams, $window, $scope) {

    this.tileData = {};
    var self = this;
    self.showFilter = false;
    self.isMobileMode = false;
    self.filterHeight = '';

    this.limitVal = 8;
    this.showMore = true;

    this.loadMoreData = function(){
        if(this.limitVal == self.tileData.data.length){
            this.limitVal = 8;
            this.showMore = true;
        }else{
            this.limitVal = self.tileData.data.length;
            this.showMore = false;
        }
        
    }
    

    if ($stateParams.state)
        self.noData = true;
    else
        self.noData = false;

    $scope.$on('showrefine', function (event, data) {
        self.callFilter();
    });

    var settings = {
        selectors: {
            tile: '.mediatile',
            list: '#list',
            filter: '#filter'
        },
        class: {
            filterOpen: {
                    tile: 'col-sm-6 col-md-6 col-lg-4 col-xl-3',
                    list: 'col-sm-12 col-md-8 col-lg-8 col-xl-9'
                },
                filterClose: {
                    tile: 'col-sm-6 col-md-4 col-lg-3 col-xl-2',
                    list: 'col-sm-12 col-md-12 col-lg-12 col-xl-12'
                }
        }
    }


    this.setLimit = function (filter) {
        filter.limit = null;
        if (filter.filter_options.length > 8) {
            filter.limit = 5;
        } else {
            filter.limit = filter.filter_options.length;
        }

    }

    this.change = function (state, filter, $event) {
        if ($event.stopPropagation) $event.stopPropagation();
        if ($event.preventDefault) $event.preventDefault();
        $event.cancelBubble = true;
        $event.returnValue = false;
        if (state) {
            filter.showFilterOptions = !filter.showFilterOptions;
            filter.isDropdownOpen = !filter.isDropdownOpen;
        }
    }

    this.callFilter = function () {

        if ($window.innerWidth < 768) {
            self.filterHeight = $window.innerHeight;
            self.isMobileMode = !self.isMobileMode;

        }

        var x = document.querySelectorAll('.mediatile');
        if (self.showFilter == false) {

            angular.element(settings.selectors.filter).addClass('is-open');

            for (var i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(settings.class.filterClose.tile, settings.class.filterOpen.tile);
            }
            document.querySelector(settings.selectors.list).className = document.querySelector(settings.selectors.list).className.replace(settings.class.filterClose.list, settings.class.filterOpen.list)

        } else {
            angular.element(settings.selectors.filter).removeClass('is-open');

            for (var i = 0; i < x.length; i++) {
                x[i].className = x[i].className.replace(settings.class.filterOpen.tile, settings.class.filterClose.tile);
            }
            document.querySelector(settings.selectors.list).className = document.querySelector(settings.selectors.list).className.replace(settings.class.filterOpen.list, settings.class.filterClose.list)

        }

        self.showFilter = !self.showFilter;

    }

    //resetFilter function will reset the filter values
    this.resetFilter = function () {
        for (var i = 0; i < self.filterData.data.length; i++) {
            var currentFilter = self.filterData.data[i];
            if (currentFilter.filter_type == "SORT BY") {
                currentFilter.selectedFilterType = 'Most Relevant';
                currentFilter.isFilterSelected = true;
                currentFilter.showFilterOptions = false;
                currentFilter.isDropdownOpen = false;
            } else if (currentFilter.filter_type == "LANGUAGE") {
                currentFilter.selectedFilterType = 'English';
                currentFilter.isFilterSelected = true;
                currentFilter.showFilterOptions = false;
                currentFilter.isDropdownOpen = false;
            } else {
                for (var j = 0; j < self.filterData.data[i].filter_options.length; j++) {
                    self.filterData.data[i].filter_options[j].currentSelected = false;
                }

                currentFilter.selectedFilterType = '';

                if (currentFilter.showFilterOptions) {
                    currentFilter.showFilterOptions = !currentFilter.showFilterOptions;
                    currentFilter.isDropdownOpen = !currentFilter.isDropdownOpen;
                }

            }
        }
        for (var i = 0; i < self.filterData.toggleData.length; i++) {
            var currentFilter = self.filterData.toggleData[i];
            currentFilter.isSelected = false;
        }
    }

    this.selectOption = function (currentOption, filterName) {
        for (var i = 0; i < self.filterData.data.length; i++) {

            var options = self.filterData.data[i].filter_options;

            for (var j = 0; j < options.length; j++) {

                if (self.filterData.data[i].filter_options[j].currentSelected && (self.filterData.data[i].filter_type == filterName)) {

                    self.filterData.data[i].filter_options[j].currentSelected = false;

                }

                if (options[j].option_value === currentOption) {
                    self.filterData.data[i].isFilterSelected = true;
                    self.filterData.data[i].selectedFilterType = currentOption;
                    self.filterData.data[i].filter_options[j].currentSelected = true;
                }
            }
        }

    }

    //hideCurrentFilter function will open and close the option panel
    this.hideCurrentFilter = function (filterName) {
        for (var i = 0; i < self.filterData.data.length; i++) {

            var currentFilter = self.filterData.data[i].filter_type;

            if (currentFilter == filterName) {
                self.filterData.data[i].isFilterSelected = !self.filterData.data[i].isFilterSelected;
                self.filterData.data[i].isOptionSelected = true;
            }

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
