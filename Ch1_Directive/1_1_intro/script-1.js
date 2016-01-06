angular.module('app', []);

angular.module('app').controller('mainCtrl', function($scope) {

});

angular.module('app').directive('userInfoCard', function() {
  return {
    template: "User Info Card"
  };
});
