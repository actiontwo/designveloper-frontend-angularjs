((window,angular)->
  BlogCtrl = ($scope, $location, $window) ->
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    $('#logo').show()

  angular.module("BlogController", []).controller "BlogCtrl", [ "$scope", "$location" , "$window", BlogCtrl ]
)(window, window.angular)
