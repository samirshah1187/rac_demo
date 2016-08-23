'use strict';

mediaHeaderComponentService.$inject = ['$http','$q'];

function mediaHeaderComponentService($http,$q) {
  
  this.$http = $http;
  this.$q = $q;

};


module.exports = mediaHeaderComponentService;