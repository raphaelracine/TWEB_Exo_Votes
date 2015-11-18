  (function() {

  var module = angular.module('myApp', ['chart.js', 'btford.socket-io', 'ui.router'])

  var votes = [[0,0,0]];
  
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
	  
	  mySocket.on('votes', function(data) {
		  console.log("Coucou");
		  votes[0][0] = data.yes;
		  votes[0][1] = data.no;
		  votes[0][2] = data.dontknow;
	  });
	  
	  return {
          labels:["Yes","No","I don't know"],
          data:votes        
      };
  });

  module.controller('BoardController', function($scope, votesData, mySocket) {	  
      
	  $scope.labels = votesData.labels;
      $scope.data = votesData.data;
	  
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