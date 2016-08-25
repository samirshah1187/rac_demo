'use strict'

function headerNavController(headerNavService, $scope, $timeout, $location, $rootScope,$window){
    var self=this;

    this.showMobileHeader = true;    

    this.fnToggle = function () {    	
    	
    	console.log(this.showMobileHeader);

    	if(this.showMobileHeader)
    	{       		
    		this.showMobileHeader = false;
    	}   
    	else
    	{    		
    		this.showMobileHeader = true;
    	}    		        

    }    
    
};

module.exports = headerNavController;