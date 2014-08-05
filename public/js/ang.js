var app = angular.module('photoBattleApp', []);

app.controller('VoteCtrl', function($scope) {
  $scope.person = {
    name: "Borey Borey"
  };
});

/* app.factory('Photo', ['$http', function($http) {
  $http.get('/photos')
    .success(function(data) {
      $scope.photos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error, data: ' + data);
    });
}]); */

app.controller('PhotoCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/photos')
    .success(function(data) {
      $scope.photos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error, data: ' + data);
    });
}]);
app.controller('ChallengeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/challenges')
    .success(function(data) {
      $scope.challenges = data;
      $scope.photos = $scope.challenges.photos;
      console.log(JSON.stringify(data));
    })
    .error(function(data) {
      console.log('Error, data: ' + data);
    });
}]);