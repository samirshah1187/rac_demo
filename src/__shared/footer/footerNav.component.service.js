'use strict';

footerNavComponentService.$inject = ['$http','$q'];

function footerNavComponentService($http,$q) {
  this.$http = $http;

};

module.exports = footerNavComponentService;