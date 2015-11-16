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
    templateUrl: "userInfoCard_eg9.html",
    restrict: 'E',
    scope: {
      user: "=", // This will tell angular that we are just going to pass a data-set
      initialCollpased: "@collpased" // This will tell angular that we are just going to pass a data value as string and not Boolean
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

angular.module('app').directive('removeFriend', function() {
  return {
    restrict: 'E',
    templateUrl: 'removeFriend_eg9.html',
    controller: function($scope) {
      $scope.removing = false;
      $scope.startRemove = function() {
        $scope.removing = true;
      };
      $scope.cancelRemove = function() {
        $scope.removing = false;
      };
      $scope.removeFriend = function(friend) {
        /*
          This works fine, but there is a problem
          Actually, The objective of this directive is to deal with 1 friend at a time,
          Instead what its doing is its accessing $scope.user.friends...
          Its really not this directive job to know the entire user data-set, Instead
          its job is to simply show and hide those buttons next to each friend

          and once the user clicks remove, this directive should not be responsible to
          removing a friend because removing is an operation on entire collection
          and this directive is nothing to do with entire collection.

          So, this directive should notify the userInfoCard directive that user have click
          to remove a friend and which friend to move on.

          One way is to use event bus to notify parent directive
          2nd way to use method.
        */
        var idx = $scope.user.friends.indexOf(friend);
        if(idx > -1) {
          $scope.user.friends.splice(idx, 1);
        }
      };
    }
  };
});

angular.module('app').directive('address', function() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'address_eg9.html',
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
