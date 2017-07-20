(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('SignUpController', SignUpController);
    
    function SignUpController($scope) {

        $scope.init = function() {

            $scope.email = '';
            $scope.fullName = '';
            $scope.companyName = '';
            $scope.password = '';

            $('#navbar').addClass('hidden');
            $('#footer').addClass('hidden');
        }

        $scope.submit = function(){
            console.log('email: ', $scope.email);
            console.log('fullName: ', $scope.fullName);
            console.log('companyName: ', $scope.companyName);
            console.log('password: ', $scope.password);
        }

        $scope.init();
    }

})();