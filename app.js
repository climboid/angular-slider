angular.module('application',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: 'templates/slider.html',   controller:PickerCtrl}).
      otherwise({redirectTo: '/'});
}]);