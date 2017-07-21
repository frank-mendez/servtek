(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('LoginController', LoginController);

    function LoginController($scope, $location) {
        
        $scope.init = function() {
            $('#navbar').addClass('hidden');
            $('#footer').addClass('hidden');
            $scope.email = '';
            $scope.password = '';
            $scope.auth();
        }

        $scope.auth = function() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    console.log('user is signed in');
                    $location.path('/');
                    $scope.$apply();
                } else {
                    console.log('user is signed out');
                }
            });
        }

        $scope.submit = function() {
            console.log('email', $scope.email);
            console.log('password', $scope.password);
            firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password)
            .then(function(results) {
                if(results) {
                    $location.path('/');
                    $scope.$apply();
                }
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $('#login-error').removeClass('hidden');
                $scope.error = errorMessage;
                $scope.$apply();
                console.log(error);
                // ...
            });
        }

        $scope.loginwithGoogle = function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function(result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                if(user) {
                    $location.path('/');
                    $scope.$apply();
                }
                // ...
                }).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
                // ...
            });
        }

        $scope.init();

    }

})();