  (function() {

  var module = angular.module('myApp', ['chart.js', 'btford.socket-io', 'ui.router'])

  module.config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('welcome');

      $stateProvider.state('welcome', {
        url:'/welcome',
        templateUrl:'template/welcome'
      });

      $stateProvider.state('audience', {
        url:'/audience',
        templateUrl:'template/audience'
      });

      $stateProvider.state('board', {
        url:'/board',
        templateUrl:'template/board'
      });

      $stateProvider.state('debug', {
        url:'/debug',
        templateUrl:'template/debug'
      });

  });

  module.factory('mySocket', function(socketFactory) {
      return socketFactory();
  });

  module.factory('votesData', function(mySocket) {      
      return {
          labels:["Yes","No","I don't know"],
          data:[[50,30,0]]          
      };
  });

  module.controller('BoardController', function($scope, votesData) {
      $scope.labels = votesData.labels;
      $scope.data = votesData.data;
  });

  module.controller('HeaderController', function($scope, $location) {
	  $scope.isActive = function(viewLocation) {
		  return viewLocation === $location.path();
	  };
  });

})();