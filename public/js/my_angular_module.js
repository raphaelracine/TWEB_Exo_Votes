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

  module.controller('BoardController', function($scope, mySocket) {
	  
	  $scope.labels = ["Yes", "No", "I don't know"];
      
	  mySocket.on('votes', function(data) {
		  $scope.data = [[data.yes, data.no, data.dontknow]];
	  });
	  
	  $scope.voteYes = function() {
		  mySocket.emit('event', {vote: 'yes'});
	  };
	  
	  $scope.voteNo = function() {
		  mySocket.emit('event', {vote: 'no'});
	  };
	  
	  $scope.voteDontKnow = function() {
		  mySocket.emit('event', {vote: 'dontknow'});
	  };
	  
	  $scope.voteReset = function() {
		  mySocket.emit('event', {vote: 'reset'});
	  };
	  
  });

  module.controller('HeaderController', function($scope, $location) {	  
	  $scope.isActive = function(viewLocation) {
		  return viewLocation === $location.path();
	  };
	  
  });

})();