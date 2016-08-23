'use strict';

headerNavService.$inject = ['$http'];

function headerNavService($http) {
    this.$http = $http;

};

module.exports = headerNavService;
