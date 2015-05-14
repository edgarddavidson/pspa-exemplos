angular.module("app", []).controller('MenuCtrl', function ($scope) {
    $scope.menuList =  [
        {
          "id": 1,
          "path": "/",
          "controller": "MenuCtrl",
          "title": "menu"
        },
        {
          "id": 2,
          "path": "/usecase1",
          "title": "Use Case 1"
        },
        {
          "id": 3,
          "path": "/usecase2",
          "title": "Use Case 2"
        },
        {
          "id": 4,
          "path": "/usecase3",
          "title": "Use Case 3"
        },
        {
          "id": 5,
          "path": "/usecase4",
          "title": "Use Case 4"
        },
        {
          "id": 6,
          "path": "/usecase5",
          "title": "Use Case 5"
        }
    ];

});