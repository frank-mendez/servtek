(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('ServtekFeaturesController', ServtekFeaturesController);

    function ServtekFeaturesController($scope) {
        
        $scope.init = function() {
            $('#navbar').addClass('feature-nav');
            $('#navbar').removeClass('results-nav');
            $('#navbar').removeClass('hidden');
            $('#footer').removeClass('hidden');
        }

        $scope.init();

    }

})();