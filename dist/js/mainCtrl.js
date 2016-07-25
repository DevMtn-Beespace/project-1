'use strict';

angular.module('rijksApp').controller('mainCtrl', ['$scope', 'mainSvc', function ($scope, mainSvc) {
  $scope.test = "test";

  $scope.api = mainSvc.api;

  $scope.getArt = function () {
    mainSvc.getArt().then(function (response) {
      console.log(response);
      $scope.artObjects = response.artObjects;
    });
  };

  $scope.getArt(); // make this a click event

  $scope.getDetails = function (detail_id) {
    mainSvc.getDetails(detail_id).then(function (detailsResponse) {
      console.log(detail_id);
      $scope.artDetails = detailsResponse; // get details...
    });
  };

  // $scope.getDetails = function(detail_id){
  //   console.log('hello'  +detail_id);
  // }


  // $scope.getDetails()
  // make this a click event
}]);