angular.module('rijksApp')
    .controller('searchCtrl', ['$scope', '$stateParams', 'mainSvc', function($scope, $stateParams, mainSvc) {


        // toggle the favorite artists, use the toggle-artists directive
        $scope.favName = mainSvc.favName;
        $scope.favDesc = mainSvc.favDesc;

      

    }]);
