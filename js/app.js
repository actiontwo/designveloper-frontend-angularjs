var myApp = angular.module('myApp', [
  'ngRoute'
]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html'
//    controller: 'ListController'
    }).
    when('/list', {

      templateUrl: 'partials/list.html'
//    controller: 'ListController'
    }).
    when('/details', {
      templateUrl: 'partials/details.html'
//    controller: 'DetailsController'
    }).
    otherwise({
      redirectTo: '/list'
    });
}]);