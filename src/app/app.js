'use strict';
//########################################################################
var app = angular.module('dragsizable', []);
//########################################################################
//#####################START dragsizable directive########################
app.directive('dragsizable', function(){
  var linker = function(scope, element, attrs) {
    element.draggable({handle: ".dragger"});
    element.resizable({
        handles: {
          'e': '#e',
          'n': '#n',
          's': '#s',
          'w': '#w',
          'ne': '#ne',
          'nw': '#nw',
          'se': '#se',
          'sw': '#sw'
        }
    });
  };
  return {
    scope:       {},
    restrict:    "EA",
    replace:     true,
    transclude:  true,
    link:        linker,
    templateUrl: "assets/tpls/dragsizable2.tpl.html"
  };
});
//######################END dragsizable directive#########################
//########################################################################
//######################START MainCtrl controller#########################
app.controller('MainCtrl', ['$scope', function($scope){}]);
//#######################END MainCtrl controller##########################
//########################################################################
