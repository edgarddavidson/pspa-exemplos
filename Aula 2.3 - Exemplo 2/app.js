var app = angular.module('app', [])


// Definindo o service
// Provavelmente o mais simples
app.service('ExemploService', function(){
    this.meuMetodo = function(){
        return "Exemplo utilizando Service";
    };
});


// Definindo o factory
// Um pouco mais sofisticado
app.factory('ExemploFactory', function(){
    return{
        meuMetodo: function(){
            return "Exemplo utilizando factory";
        }
    }
});


// Definindo o provider
// Versão mais configurável
app.provider('ExemploProvider', function(){
    this.name = 'provider';
    
    this.$get = function(){
        var name = this.name;
        return {
            meuMetodo : function(){
                return "Exemplo utilizando " + name;
            }
        }
    };
    
    this.setName = function(name){
        this.name = name;
    };
});



//Definindo um controller
app.controller('ExemploCtrl', function($scope, ExemploService, ExemploFactory, ExemploProvider){
    $scope.service = ExemploService.meuMetodo();
    $scope.factory = ExemploFactory.meuMetodo();
    $scope.provider = ExemploProvider.meuMetodo();
});
