'use strict';

productListComponentService.$inject = ['$http', '$q'];

function productListComponentService($http, $q) {

    this.$http = $http;
    this.$q = $q;

};

productListComponentService.prototype.getTileData = function (Url) {

    var deferred = this.$q.defer();

    this.$http.get(Url)
        .success(deferred.resolve);

    return deferred.promise;
};
productListComponentService.prototype.getFilterData = function () {
    var deferred = this.$q.defer();

    this.$http.get('../../../../src/commerce/components/products/product-list/product.filter.component.json')
        .success(deferred.resolve);

    return deferred.promise;
}

module.exports = productListComponentService;
