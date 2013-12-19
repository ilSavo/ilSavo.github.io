'use strict';

angular.module('ilsavo2App')
  .controller('MenuCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.menu = [
      {'text': 'Home', 'path': '/'},
      {'text': 'About', 'path': '/about'},
      {'text': 'Contact', 'path': '/contact'}
    ];
    $scope.isActive = function(item) {
      console.log("Controllo " + item.path + " " + $location.path())
      if (item.path === $location.path()) return 'active';
    };
  }]);
