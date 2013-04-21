'use strict';
//########################################################################
var app = angular.module('dragsizable', []);
//########################################################################
//#####################START dragsizable directive########################
app.directive('dragsizable', function(){
  var linker = function(scope, element, attrs) {
    element.draggable();
  };
  return {
    scope:       {},
    restrict:    "EA",
    replace:     true,
    transclude:  true,
    link:        linker,
    templateUrl: "assets/tpls/dragsizable.tpl.html"
  };
});
//######################END dragsizable directive#########################
//########################################################################
//######################START MainCtrl controller#########################
app.controller('MainCtrl', ['$scope', function($scope){
  
}]);
//#######################END MainCtrl controller##########################
//########################################################################
