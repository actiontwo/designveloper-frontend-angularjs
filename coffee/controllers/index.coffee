((window,angular)->
  SwitchMenuCtrl = ($scope) ->
    $scope.showbtn = false
    $scope.menu_table =
      status : false

  MainCtrl = ($scope, $location, $rootScope, $window) ->
    $rootScope.imageDefault = 'https://cws.designveloper.com/images/no-image.png'
    $rootScope.backendServer = 'https://admin.designveloper.com'

    $scope.isActive = (route, index) ->
      return $location.path().indexOf(route) isnt -1

    $scope.pageClass = "down-page"

    $scope.currentIndex = 0
    $scope.resetIndex = () ->
      $scope.currentIndex = 0

    $scope.changeStatusPage = (index) ->
      if index > $scope.currentIndex
        $scope.pageClass = 'up-page'
      else
        $scope.pageClass = 'down-page'
      $scope.currentIndex = index

    $scope.addRightPage = () ->
      $scope.pageClass = 'right-page'

    $scope.addLeftPage = () ->
      $scope.pageClass = 'left-page'

    $scope.addUpPage = () ->
      $scope.pageClass = 'up-page'

    $scope.topMenu =
      template : 'templates/topMenu.html'
      list : [
        name : 'service', href : 'service' , slug :'service'
      ,
        name : 'team', href : 'team' , slug:'team'
      ,
        name : 'work', href : 'project/all' , slug : 'project'
      ,
        name : 'jobs', href : 'jobs' , slug : 'jobs'
      ,
        name : 'contact', href : 'contact' , slug: 'contact'
      ]

    $scope.initializeWindowResize = ->
      widthScreen = $window.innerWidth
      if widthScreen < 768
        $('#logo').css({'width': widthScreen})
        setTimeout (->
          $('.show-social').css({'left':widthScreen-40})
        ), 100
      if widthScreen > 769
        $('#logo').removeAttr('style').show()


    $scope.initializeWindowResize()
    $(window).resize  ->
      $scope.initializeWindowResize()
      return

    $('#menu-mobile').hide()
    $('#social-responsive').hide()

    $scope.doneEditMenu = ()->
      $scope.toggleMenu()
    $scope.showmenu = false
    $scope.showsocial = false

    $scope.toggleMenu = ->
      $('#menu-mobile').show()
      $('#btn-menu-mobile').addClass "fadeInLeft animated"
      $scope.showmenu = (if ($scope.showmenu) then false else true)
      $('#menu-mobile').addClass('fadeInLeft animated')
      return


    $scope.toggleSocial = ->
      $('#social-responsive').show()
      $scope.showsocial = (if ($scope.showsocial) then false else true)
      $('#social-responsive').addClass('fadeInRight animated')
      return

  angular.module("SwitchMenuController", []).controller "SwitchMenuCtrl", [ "$scope", SwitchMenuCtrl ]
  angular.module("MainController", []).controller "MainCtrl", [ "$scope", "$location" ,"$rootScope", "$window", MainCtrl ]
)(window, window.angular)
