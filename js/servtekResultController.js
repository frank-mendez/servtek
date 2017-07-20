(function(){
    'use strict';

    angular
        .module('servtek')
        .controller('servtekResultController', servtekResultController);

    function servtekResultController($scope) {
        $scope.init = function(){
            $('#navbar').addClass('results-nav');
            $('#navbar').removeClass('feature-nav');
            $('#navbar').removeClass('hidden');
            $('#footer').removeClass('hidden');
        }
        $scope.init();

    }

})();