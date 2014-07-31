var app = angular.module('photoBattleApp', []);

app.controller('VoteCtrl', function($scope) {
  $scope.person = {
    name: "Borey Borey"
  };
});

app.controller('PhotoCtrl', ['$scope', function($scope) {
  $scope.src = '/images/bachelor-juanpablo-nikki.jpg';
}]);