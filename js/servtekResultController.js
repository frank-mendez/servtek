(function(){
    'use strict';

    angular
        .module('servtek')
        .controller('servtekResultController', servtekResultController);

    function servtekResultController($scope, $rootScope) {
        $scope.init = function(){
            $rootScope.nav = true;
            $rootScope.footer = true;
            $rootScope.page = 'results-nav';
        }
        $scope.init();

    }

})();