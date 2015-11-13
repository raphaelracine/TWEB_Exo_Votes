(function() {
	
    var module = angular.module('myApp', ['chart.js'])
    
    module.factory('votesData', function() {
        var fakeData = {
            labels:["Yes","No","I don't know"],
            data:[50,50,50]            
        };
        
        return fakeData;
    });
	
	module.controller('GraphController', function($scope, votesData) {
		$scope.labels = votesData.labels;
		$scope.data = votesData.data;
	});
	
})();