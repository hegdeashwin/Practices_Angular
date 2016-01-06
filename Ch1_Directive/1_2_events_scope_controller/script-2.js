angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
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

  console.log("Parent $scope: ", $scope);
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard_eg2.html",
    restrict: 'E',
    // scope: true, // inherited scope
    scope: {}, // isolated scope
    controller: function($scope) {
      $scope.knightMe = function(user) {
        user.rank = "knight";
      };

      // $scope is shared till "scope:true" is not specified it called inherited scope
      // if we use {} instead of true, will create an isolated scope
      console.log("Controller $scope: ", $scope);
    }
  };
});
