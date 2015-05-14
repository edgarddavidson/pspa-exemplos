//Primeira forma de declarar um controller
//angular.module('app').controller('UserCtrl', function($scope){
//    $scope.name = 'Exemplo 1';
//});


// Segunda forma de declarar um controller
//function userCtrl($scope){
//    $scope.name = 'Exemplo 2';
//}
//
//angular.module('app').controller('UserCtrl', userCtrl);



// Terceira forma de declarar um controller

function UserCtrl($scope){
    $scope.name = 'Exemplo 3';
}

UserCtrl.$inject= ['$scope'];



