'use strict';


define(['angularAMD', 'angular-route'], function (angularAMD) {
    var $routeProviderReference;
    var app = angular.module("app", ['ngRoute']);

    app.config(function ($routeProvider) {
        $routeProviderReference = $routeProvider;
    });

    app.run(function ($http, $route, $window) {

        $http.get('http://localhost:3000/menus').success(function (data) {
            angular.forEach(data, function (menu) {
                $routeProviderReference
                        .when(menu.path, angularAMD.route({
                            templateUrl: menu.templateUrl, controller: menu.controller, controllerUrl: menu.controllerUrl
                        }));
            });
            $routeProviderReference.otherwise({
                redirectTo: '/'
            });

            $route.reload();

        }).error(function (error) {
            $window.alert('Could not get the menu');
        });
    });

    return angularAMD.bootstrap(app);

});

