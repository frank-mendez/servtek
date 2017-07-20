(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('ServTekController', ServTekController);
    
    function ServTekController($scope) {
        
        $scope.videoModal = function() {
            $(".js-modal-btn").modalVideo();
        }

        $scope.init = function(){
            $('#navbar').removeClass('feature-nav');
            $('#navbar').removeClass('results-nav');
            $('#navbar').removeClass('hidden');
            $('#footer').removeClass('hidden');
        }

        $scope.videoModal();
        $scope.init();
    }

})();