((window,angular)->
  JobsCtrl = ($scope, $location, $window, $document, $http,$rootScope) ->
#    $scope.$on '$routeChangeSuccess', ->
#      $window.scrollTo 0, 1
    $('#logo').show()

    $scope.oneAtATime = true

    $http.get("#{$rootScope.backendServer}/jobs").success (data) ->
      $scope.jobs = data

    $scope.status =
      isFirstOpen: true
      isFirstDisabled: false

    $http.get("#{$rootScope.backendServer}/pageSetting?slug=jobs").success (dataSetting)->
      $scope.pageSetting = dataSetting

    widthScreen = $window.innerWidth
    if widthScreen >= 1024
      $(".jobs-list").click ->
        setTimeout (->
          if $('.check').hasClass("icon-collapse")
            $('.jobs-offer').hide()
          else
            $('.jobs-offer').show()
        ),1
    else
      $(".jobs-list").css('position', 'initial')
      $("#jobs").css('position', 'relative')

    tabsStatus= {}
    $scope.menu_show = (tabs, id) ->
      unless tabsStatus[id]
        tabsStatus[id] = id + '0'

      setTimeout (->
        $(tabs).slick
          dots : true
          infinite : false
          placeholders : false
          speed : 1000
          slidesToShow : 3
          touchMove : true
          slidesToScroll : 1
        return
      ), 1
      return

    $scope.menu_show_mobile = (tabs) ->
      setTimeout (->
        $(tabs).slick
          dots : true,
          infinite : false,
          speed : 1000,
          slidesToShow : 1,
          slidesToScroll : 1
        return
      ), 1


    $scope.setCurrentTab = (id, index) ->
      tabsStatus[id] = id + index
      return
    $scope.getCurrentTab = (id, index)->
      if (id+index) is tabsStatus[id]
        return true
      return false

  angular.module("JobsController", []).controller "JobsCtrl", [ "$scope", "$location", "$window", "$document", "$http", "$rootScope",JobsCtrl ]
)(window, window.angular)