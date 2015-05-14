'use strict';

define(['app'], function (app, Menu) {
    app.controller('MenuCtrl', function ($scope, $http, $window) {
        $http.get('http://localhost:3000/menus').success(function (data) {
            data.shift();
            $scope.menuList = data;
        }).error(function (error) {
            $window.alert('Could not get the menu');
        });
    });
});