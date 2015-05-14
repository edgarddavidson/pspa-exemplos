var app = angular.module('app', [])

app.directive('minhaDiretiva', function(){
    return{
        restrict: 'E',
        replace: true,
        template: '<div> Esta é a minha diretiva</div>'
    }
});

//Definindo um controller
app.controller('ExemploCtrl', function($scope){
    $scope.name = 'Diretiva';    
});
