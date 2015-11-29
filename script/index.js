(function() {
  var app;

  app = angular.module('myApp', []);

  app.controller('myCtrl', function($scope, $http) {
    $scope.modal = {};
    $scope.tasks = [];
    localStorage["tasks"] = '';
    if (typeof localStorage.tasks !== 'undefined' && localStorage.tasks !== '') {
      $scope.tasks = JSON.parse(localStorage.tasks);
    }
    $scope.showModal = function() {
      $scope.modal = {};
      $scope.isShowModal = true;
    };
    $scope.addMember = function() {
      $scope.tasks.push($scope.modal);
      $scope.isShowModal = false;
      localStorage["tasks"] = JSON.stringify($scope.tasks);
    };
    $scope.cancelAddMember = function() {
      $scope.isShowModal = false;
    };
    $scope.removeCard = function(index) {
      $scope.tasks.splice(index, 1);
    };
  });

}).call(this);
