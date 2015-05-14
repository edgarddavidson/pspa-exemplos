angular.module('mainModule', ['module1', 'module2']);
angular.module('module1', []);
angular.module('module2', []);

angular.module('mainModule').controller('Controller1', function($scope){
        $scope.name1 = 'Controller 1 in Main Module';
});

angular.module('module1').controller('Controller2', function($scope){
        $scope.name2 = 'Controller 2 in Module 1';
});

angular.module('module2').controller('Controller3', function($scope){
        $scope.name3 = 'Controller 3 in Module 2';
});
    