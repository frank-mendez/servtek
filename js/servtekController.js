(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('ServTekController', ServTekController);
    
    function ServTekController($scope, $rootScope) {
        
        $scope.videoModal = function() {
            $(".js-modal-btn").modalVideo();
        }

        $scope.init = function(){
            $rootScope.nav = true;
            $rootScope.footer = true;
            $rootScope.page = '';
        }

        $scope.videoModal();
        $scope.init();
    }

})();