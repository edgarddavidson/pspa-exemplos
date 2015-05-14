angular.module('app').controller('FoodCtrl', function($scope){
    $scope.foods = [
        {
            name: 'Sobremesa',
            img: 'http://lorempixel.com/output/food-h-c-304-305-9.jpg',
            calories : 400
        },
        {
            name: 'Sanduiche',
            img: 'http://lorempixel.com/output/food-q-c-300-300-9.jpg',
            calories: 596
        },
        {
            name: 'Pão',
            img: 'http://lorempixel.com/output/food-h-c-304-305-4.jpg',
            calories : 90
        },
        {
            name: 'Comida Japonesa',
            img: 'http://lorempixel.com/output/food-h-c-304-305-7.jpg',
            calories : 225
        },
    ];
});
            