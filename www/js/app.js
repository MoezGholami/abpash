// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var ionicApp=angular.module('starter', ['ionic']);

ionicApp.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


/*
.controller('GraphCtrl', function($scope) { // Add a simple controller
	$scope.graph = {};                        // Empty graph object to hold the details for this graph
	$scope.graph.options={ showXLabels: 10 };
	$scope.graph.data = [MicroData];                   // Add bar data, this will set your bars height in the graph
	$scope.graph.colors=
	[{
		fillColor: 'rgba(32, 111, 204, 0.4)',
		strokeColor: 'rgb(56, 117, 214)',
	}];
	$scope.graph.labels = XAxis;    // Add labels for the X-axis
	$scope.graph.series = ['Awake'];  // Add information for the hover/touch effect
	$scope.resetData=function()
	{
		synchData();
	}

});
*/
