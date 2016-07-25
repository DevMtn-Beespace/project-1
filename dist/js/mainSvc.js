'use strict';

angular.module('rijksApp').service('mainSvc', function ($http) {
  var apiKey = 'L0ObQ3Xi';
  var baseUrl = 'https://www.rijksmuseum.nl/api/en/collection';
  var format = '&format=json';
  var hexEncoded = '%23FF000';
  var colorParam = '&f.normalized32Colors.hex=' + hexEncoded;
  // Colors found in the images (mind: The `#` in #FF0000 should be url-encoded! change # to %23)
  var imgParam = '&imgonly=True';
  // var sortParam = ['s=relevance', 's=objecttype', 's=chronologic', 's=achronologic', 's=artist'];
  var detailsParam = '';
  // GET /api/en/collection/[object-number]

  var api = 'https://www.rijksmuseum.nl/api/en/collection' + detailsParam + '?key=' + apiKey + format + imgParam;

  this.getArt = function () {
    return $http({
      method: 'GET',
      url: api
    }).then(function successCallback(response) {
      // this callback will be called asynchronously
      // when the response is available
      // console.log(response);
      return response.data;
    }, function errorCallback(err) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(err);
    });
  };

  this.getDetails = function (detail_id) {
    //get details here
    var detailsParam = detail_id;
    console.log(detailsParam);
    var api = 'https://www.rijksmuseum.nl/api/en/collection/' + detailsParam + '?key=' + apiKey + format + imgParam;
    return $http({
      method: 'GET',
      url: api
    }).then(function successCallback(detailsResponse) {
      console.log('api:' + api);
      console.log(detailsResponse);
      return detailsResponse.data;
    }, function errorCallback(err) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log(err);
    });
  };
});