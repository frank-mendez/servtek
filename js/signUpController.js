(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('SignUpController', SignUpController);
    
    function SignUpController($scope, $rootScope) {

        $scope.init = function() {
            $scope.success = false;
            $rootScope.loggedin = false;
            $scope.input = {
                 email: '',
                 fullName: '',
                 companyName: '',
                 password: '',
            };
            $rootScope.nav = false;
            $rootScope.footer = false;
        }

        $scope.submit = function(){
            firebase.auth().createUserWithEmailAndPassword($scope.input.email, $scope.input.password)
            .then(function(result){
                if(result) {
                    $scope.success = true;
                    $rootScope.loggedin = true;
                    $scope.$apply();
                }
            })
            .catch(function(error) {
                // Handle Errors here.
                if(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    $scope.error = true;
                    $scope.errorMessage = errorMessage;
                    $scope.$apply();
                }
                // ...
            });
        }

        $scope.signupGoogle = function() {
            var provider = new firebase.auth.GoogleAuthProvider();

            firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            if(user) {
                $scope.success = true;
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