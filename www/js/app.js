// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

function initDataValues()
{
	BlueDevMacAdr="20:15:05:06:65:16";
	MicroDataSize=20;
	MicroData=[];
	XAxis=[];
	for(var i=0; i<MicroDataSize; i++)
	{
		XAxis[i]=i+1;
		MicroData[i]=Math.random()*50+40;
	}
}

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
