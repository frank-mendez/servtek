(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('LoginController', LoginController);

    function LoginController($scope, $location, $rootScope) {
        
        $scope.init = function() {
            $scope.input = {
                email: '',
                password: ''
            }
            $scope.auth();
            $rootScope.nav = false;
            $rootScope.footer = false;
        }

        $scope.auth = function() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    $rootScope.loggedin = true;
                    $location.path('/');
                    $scope.$apply();
                } else {
                    $rootScope.loggedin = false;
                }
            });
        }

        $scope.submit = function() {
            firebase.auth().signInWithEmailAndPassword($scope.input.email, $scope.input.password)
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
                $scope.error = true;
                $scope.errorMessage = errorMessage;
                $scope.$apply();
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