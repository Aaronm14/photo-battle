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
  $http.get('/api/photos')
    .success(function(data) {
      $scope.photos = data;
      console.log(data);
    })
    .error(function(data) {
      console.log('Error, data: ' + data);
    });
}]);
app.controller('ChallengeCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/challenges')
    .success(function(data) {
      $scope.challenges = data;
      $scope.photos = $scope.challenges.photos;
      console.log("GET data: " + JSON.stringify(data));
    })
    .error(function(data) {
      console.log('Error, data: ' + data);
    });

    $scope.createChallenge = function() {
      $http.post('/api/challenges', $scope.formData)
        .success(function(data) {
          $scope.formData = {}; // clear the form so our user is ready to enter another
          $scope.challenge = data;
          console.log("data " + data);
        })
        .error(function(data) {
          console.log('Error: ' + JSON.stringify(data));
        });
    };

    $scope.addPhoto = function() {
      $http.put('/api/challenges', $scope.formData)
        .success(function(data) {
          $scope.formData = {}; // clear the form so our user is ready to enter another
          $scope.photo = data;
          console.log("photo: " + JSON.stringify(data));
        })
        .error(function(data) {
          console.log('Error: ' + JSON.stringify(data));
        });
    };

    $scope.upVotePhoto = function(id, photoId) {
      $http.put('/api/challenges/' + id + '/photos/' + photoId)
        .success(function(data) {
          $scope.formData = {}; // clear the form so our user is ready to enter another
          $scope.photo = data;
          console.log("photo: " + JSON.stringify(data));
        })
        .error(function(data) {
          console.log('Error: ' + JSON.stringify(data));
        });
    };
}]);