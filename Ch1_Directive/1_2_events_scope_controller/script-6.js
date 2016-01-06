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
});

angular.module('app').directive('userInfoCard', function() {
  return {
    templateUrl: "userInfoCard_eg6.html",
    restrict: 'E',
    scope: {
      user: "=", // This will tell angular that we are just going to pass a data-set
      initialCollpased: "@" // This will tell angular that we are just going to pass a data value as string and not Boolean
    },
    controller: function($scope) {
      $scope.collapsed = ($scope.initialCollpased === 'true');
      $scope.knightMe = function(user) {
        user.rank = "knight";
      };
      $scope.collapse = function() {
        $scope.collapsed = !$scope.collapsed;
      };
    }
  };
});

angular.module('app').directive('address', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'address_eg6.html',
    controller: function($scope) {
      $scope.collapsed = false;
      $scope.collapseAddress = function() {
        $scope.collapsed = true;
      };
      $scope.expandAddress = function() {
        $scope.collapsed = false;
      };
    }
  }
});
