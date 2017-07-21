(function() {
    'use strict';

    angular.module('servtek')
        .config(function($routeProvider) {
            
            $routeProvider
                .when('/', {
                    templateUrl: 'views/home.html',
                    controller: 'ServTekController',
                })
                .when('/industries', {
                    templateUrl: 'views/industries.html',
                    controller: 'ServTekController',
                })
                .when('/features', {
                    templateUrl: 'views/features.html',
                    controller: 'ServtekFeaturesController',
                })
                .when('/results', {
                    templateUrl: 'views/results.html',
                    controller: 'servtekResultController',
                })
                .when('/signup', {
                    templateUrl: 'views/free-trial.html',
                    controller: 'SignUpController',
                })
                .when('/login', {
                    templateUrl: 'views/login.html',
                    controller: 'LoginController',
                })
                .when('/logout', {
                    templateUrl: 'views/login.html',
                    controller: 'LogoutController',
                });

        });
})();