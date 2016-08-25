'use strict';

footerNavComponentService.$inject = ['$http','$q'];

function footerNavComponentService($http,$q) {
  this.$http = $http;
  this.$q = $q;
};

footerNavComponentService.prototype.getSocialIcons = function(Url){
 		var deferred = this.$q.defer();

 		this.$http.get(Url)
 			.success(deferred.resolve);

 			return deferred.promise;
 }

module.exports = footerNavComponentService;