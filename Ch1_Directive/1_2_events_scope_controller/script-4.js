angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {

});

angular.module('app').directive('inherited1', function() {
  return {
    scope: true,
    link: function($scope) {
      console.log("$scope 1: ", $scope);
    }
  };
});

angular.module('app').directive('inherited2', function() {
  return {
    scope: true,
    link: function($scope) {
      console.log("$scope 2: ", $scope);
    }
  };
});
