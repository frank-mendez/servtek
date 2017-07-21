(function() {
    'use strict';

    angular 
        .module('servtek')
        .controller('LogoutController', LogoutController);

    function LogoutController($scope, $location) {

        $scope.init = function() {
            firebase.auth().signOut().then(function() {
                $location.path('/login');
                $scope.$apply();
            }, function(error) {
            // An error happened.
            });
        }

        $scope.init();

    }

})();