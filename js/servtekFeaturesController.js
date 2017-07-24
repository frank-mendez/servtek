(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('ServtekFeaturesController', ServtekFeaturesController);

    function ServtekFeaturesController($scope, $rootScope) {
        
        $scope.init = function() {
            $rootScope.nav = true;
            $rootScope.footer = true;
            $rootScope.page = 'feature-nav';
        }

        $scope.init();

    }

})();