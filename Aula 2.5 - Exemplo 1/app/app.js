var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider',function ($routeProvider) {
    
    $routeProvider
    .when('/',{
        templateUrl: 'containers/views/menu.html',
        controller : 'MenuCtrl'
    })
    
    .when('/usecase1',{
        templateUrl: 'usecase1/views/usecase1.html',
        controller : 'Usecase1Ctrl'
    })
    
    .when('/usecase2',{
        templateUrl: 'usecase2/views/usecase2.html',
        controller : 'Usecase2Ctrl'
    })
    
    .when('/usecase3',{
        templateUrl: 'usecase3/views/usecase3.html',
        controller : 'Usecase3Ctrl'
    })
    
    .when('/usecase4',{
        templateUrl: 'usecase4/views/usecase4.html',
        controller : 'Usecase4Ctrl'
    })
    
    .when('/usecase5',{
        templateUrl: 'usecase5/views/usecase5.html',
        controller : 'Usecase5Ctrl'
    })
    
    .otherwise({redirectTo: '/'});

}]);
