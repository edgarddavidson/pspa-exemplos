'use strict';

define(['app'], function (app) {
    angular.module('MenuService', ['ngResource', 'ngCookies'])
            .factory('Menu', ['$resource', '$http',
                function ($resource, $http) {
                    return $resource('poc/api/menu/:id', {}, {
                        query: {
                            method: 'GET',
                            isArray: true
                        }
                    });
                }
            ]);
});