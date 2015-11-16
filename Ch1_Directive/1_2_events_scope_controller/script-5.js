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
    templateUrl: "userInfoCard_eg5.html",
    restrict: 'E',
    scope: {
      user: "="
    },
    controller: function($scope) {
      $scope.collapsed = false;
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
    templateUrl: 'address_eg5.html',
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
