angular.module('rijksApp')
.directive('toggleDirective', [function(){

  // toggle logic here
  // https://github.com/squireaj/PRankings/blob/master/directive/toggleDirective.js

  return{
    scope: {
      scopedata: '=',
      scopestring: '@',
      scopefunction: '&'
    },
    controller: searchCtrl,
    templateUrl: "./directives/toggle-artists.html" ,
    restrict: "AE"
  };

}]);
