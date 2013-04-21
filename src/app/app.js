'use strict';
//########################################################################
var app = angular.module('dragsizable', []);
//########################################################################
//########################################################################
//###################START dragsizable####################################
app.directive('dragsizable', function(){
  var linker = function(scope, element, attrs) {
    
  };
  return {
    scope:       {},
    restrict:    "EA",
    replace:     true,
    transclude:  true,
    link:        linker,
    templateUrl: "assets/tpls/dragsizable.tpl.html"
  }
});
//###################END dragsizable######################################
//########################################################################
app.controller('MainCtrl', ['$scope', function($scope){
  
}]);
