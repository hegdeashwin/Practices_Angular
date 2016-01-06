angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user1 = {
    name: "Ashwin Hegde",
    address: {
      street: 'Viman Nagar',
      city: 'Pune',
      country: 'India'
    },
    friends: [
      'Kumar', 'Saju', 'Jerin', 'Ajay', 'Yogesh', 'Pavan'
    ]
  };

  $scope.user2 = {
    name: "Kumar Kundan",
    address: {
      street: 'DSK',
      city: 'Pune',
      country: 'India'
    },
    friends: [
      'Ashwin', 'Saju', 'Jerin', 'Ajay', 'Yogesh', 'Pavan'
    ]
  };

  console.log("Parent $scope: ", $scope);
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard_eg3.html",
    restrict: 'E',
    // scope: true, // inherited scope
    // scope: {}, // isolated scope
    scope: {
      user: "=" // special binding
    },
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "knight";
      };

      // $scope is shared till "scope:true" is not specified it called inherited scope
      // if we use {} instead of true, will create an isolated scope

      // Using isolated scope we are now able to set data-set for userInfoCard directive
      console.log("Controller $scope: ", $scope);
    }
  };
});
