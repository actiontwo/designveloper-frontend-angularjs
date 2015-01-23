((window,angular)->
  VisionTeamCtrl = ($scope, $window) ->
    $('.menu li:nth-child(2) a').addClass "active_menu"
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    setTimeout (->
      $('#logo').fadeIn "slow"
      return
    ), 1000
    $scope.initializeWindowResize = ->
      widthScreen = $window.innerWidth
      if widthScreen < 768
        $('.team_image').css({"height":widthScreen/3.5})

    $scope.initializeWindowResize()
    $(window).resize  ->
      $scope.initializeWindowResize()
      return

  angular.module("VisionTeamController", []).controller "VisionTeamCtrl", [ "$scope", "$window", VisionTeamCtrl ]
)(window, window.angular)