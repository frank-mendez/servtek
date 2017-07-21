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
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log('user is signed in');
                    $('#login').addClass('hidden');
                    $('#logout').removeClass('hidden');
                } else {
                    console.log('user is signed out');
                    $('#login').removeClass('hidden');
                    $('#logout').addClass('hidden');
                }
            });
        }

        $scope.videoModal();
        $scope.init();
    }

})();