angular.module('rijksApp')
.controller('galleryCtrl', function($scope, $stateParams, mainSvc){

var loaded = false;

  // IIFE
  $scope.getArt = function(){
    if (!loaded) {
      mainSvc.getArt().then(function(response){
        console.log(response);
        $scope.artObjects = response.artObjects
        console.log($scope.artObjects);
        $scope.current = $scope.artObjects[$scope.currentObj];
        loaded = true;
      })
    }
  };

  $scope.getArt();

  $scope.getDetails = function(detail_id){
    mainSvc.getDetails(detail_id).then(function(detailsResponse) {
    $scope.artDetails = detailsResponse.artObject // get details...
    console.log($scope.artDetails);
    })
  };

  $scope.showColors = function() {
    $scope.colors = $scope.artDetails.artObject.colors
    console.log($scope.colors);
  }

  $scope.currentObj = 0;

  $scope.getNextObject = function() {
    $scope.currentObj++;
    console.log('hitme');
    // add logic to not increment if reached end of array

    $scope.current = $scope.artObjects[$scope.currentObj];
  }

  $scope.getPreviousObject = function() {
    if ($scope.currentObj !== 0) {
      $scope.currentObj--;
    }
    $scope.current = $scope.artObjects[$scope.currentObj];
    // hide button
  }


});
