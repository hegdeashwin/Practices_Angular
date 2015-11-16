angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {
  $scope.user = {
    name: "Ashwin Hegde",
    address: {
      street: 'Viman Nagar',
      city: 'Pune',
      country: 'India'
    }
  };
});

angular.module('app').directive('userInfoCard', function() {
  return {
    template: "Hello, {{user.name}}<br/>Address: {{user.address.street}}, {{user.address.city}}, {{user.address.country}}",
    restrict: 'E'
  };
});
