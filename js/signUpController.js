(function() {
    'use strict';

    angular
        .module('servtek')
        .controller('SignUpController', SignUpController);
    
    function SignUpController($scope) {

        $scope.init = function() {

            $scope.email = '';
            $scope.fullName = '';
            $scope.companyName = '';
            $scope.password = '';

            $('#navbar').addClass('hidden');
            $('#footer').addClass('hidden');
        }

        $scope.submit = function(){
            // console.log('email: ', $scope.email);
            // console.log('fullName: ', $scope.fullName);
            // console.log('companyName: ', $scope.companyName);
            // console.log('password: ', $scope.password);
            firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password)
            .then(function(result){
                console.log(result);
                if(result) {
                    $('#sign-up-container').addClass('hidden');
                    $('#success-signup').removeClass('hidden');
                }
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log('errorMessage');
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
                $('#sign-up-container').addClass('hidden');
                $('#success-signup').removeClass('hidden');
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