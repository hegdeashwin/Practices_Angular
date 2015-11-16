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

  $scope.knightMe = function(user) {
    user.rank = "knight";
  };
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard_eg1.html",
    restrict: 'E'
  };
});
