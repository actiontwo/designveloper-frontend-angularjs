ScrollIntroPageCtrl = ($scope, $location, $window) ->
  heightScreen = $window.innerHeight
  widthScreen = $window.innerWidth
  widthMask = widthScreen * 0.9
  $('#intro').css('height',heightScreen)

  $scope.initializeWindowResize = ->
    heightScreen = $window.innerHeight
    widthScreen = $window.innerWidth
    widthMask = widthScreen * 0.9

    if heightScreen > 700 or widthScreen < 768
      $('#intro').css('height',heightScreen)
    else
      if widthScreen < 400
        $('#intro').css('height',heightScreen)
      else
        $('#intro').css('min-height',615)

    if widthScreen >= 1280
      $('.img-home_mask').css('height',heightScreen)
      $('#home_mask').css('border-top-width',  widthMask)
      $('#home_mask').css('border-right-width', widthMask)
      $('#home_mask').css('left', - widthMask/10 )
    if widthScreen >= 1024 & widthScreen < 1280
      $('#home_mask').css('border-top-width',widthScreen * 1.2)
      $('#home_mask').css('border-right-width',widthScreen * 1.2)
      $('#home_mask').css('left', - widthScreen / 3)
      return
  $scope.initializeWindowSize = ->
    $scope.windowHeight = $window.innerHeight
    $scope.windowWidth  = $window.innerWidth
  if heightScreen > 700
    $('#intro').css('height',heightScreen)
  else
    if widthScreen < 400
      $('#intro').css('height',heightScreen)
    else
      $('#intro').css('min-height',615)

  $scope.initializeWindowResize()
  $(window).resize  ->
    $scope.initializeWindowResize()
    return


angular.module("ScrollIntroPageController", []).controller "ScrollIntroPageCtrl", [ "$scope", "$location" , "$window", ScrollIntroPageCtrl ]


((window,angular)->
  IntroCtrl = ($scope, $location, $window) ->
    $scope.pageClass="intro-page"
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    $('#logo').hide()

  angular.module("IntroController", []).controller "IntroCtrl", [ "$scope", "$location" , "$window", IntroCtrl ]
)(window, window.angular)
