angular.module('rijksApp')
.controller('mainCtrl', ['$scope', 'mainSvc', function($scope, mainSvc){
$scope.test = "test";

$scope.getArt = function(){
  mainSvc.getArt().then(function(repsonse){
    console.log(response);

  })
};

  // $scope.getArtData = function(color){
  //     mainSvc.getArt(color).then(function(response){
  //       console.log(response);
  //       // $scope.artData = response.data.results;
  //       // get object from Rijksmuseum
  //
  //     });
  //   };


}]);
