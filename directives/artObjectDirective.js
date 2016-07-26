angular.module('rijksApp')
.directive('artObjectDirective', [function(){


  return {
    scope: {
      data: '=',
      current: '=',
      getPreviousObject: '=',
      getNextObject: '=',
      getDetails: '='
    },
    templateUrl: "./directives/artObjectTemplate.html" ,
    restrict: "EA",
    link: function(scope, elements, attr) {
      console.log('link hit');
    }
      // logic to hide details of previous item
  }

}]);
