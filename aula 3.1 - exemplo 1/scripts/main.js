
require.config({
    baseUrl: "app",
    
    // alias libraries paths.  Must set 'angular'
    paths: {
        'angular': '../scripts/angularjs/angular',
        'angular-route': '../scripts/angularjs/angular-route', 
        'angular-resource': '../scripts/angularjs/angular-resource',
        'angular-cookies': '../scripts/angularjs/angular-cookies',
        'angularAMD': '//cdn.jsdelivr.net/angular.amd/0.2.0/angularAMD.min',
    },
    
    // Add angular modules that does not support AMD out of the box, put it in a shim
    shim: {
        'angularAMD': ['angular'],
        'angular-route': ['angular'],
        'angular-resource': ['angular'],
        'angular-cookies': ['angular']
    },
    
    // kick start application
    deps: ['app']
});

