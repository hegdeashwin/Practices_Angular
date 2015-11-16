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
});

angular.module('app').directive('userInfoCard', function() {
  return {
    template: "Hello, {{user.name}}<br/><br/> <div ng-show='!!user.address'>Address: {{user.address.street}}, {{user.address.city}}, {{user.address.country}}</div> <br/> <div ng-show='!!user.friends'>Friends: <div ng-repeat='friend in user.friends'>{{friend}}</div></div>",
    restrict: 'E'
  };
});
