((window,angular)->
  ServiceCtrl = ($scope, $window, $location, $http,$rootScope) ->
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
      return
    setTimeout (->
      $('#logo').fadeIn "slow"
      return
    ), 1000
#
    $('.menu li').click ->
      $('.menu li:nth-child(1) a').removeClass "active-menu"
    $http.get("#{$rootScope.backendServer}/service").success (data) ->
      $scope.data = data
    $http.get("#{$rootScope.backendServer}/technology").success (data)->
      $scope.technologies  = data
      $scope.normalLayout = diviveArray(data,6)
      $scope.mobileLayout = diviveArray(data,3)
      setTimeout (->
        $('.bxslider').bxSlider
          mode: 'vertical'
          slideMargin: 5
          auto: true
          autoControls: true
          pause: 5000
        return
        ), 200

    $http.get("#{$rootScope.backendServer}/pageSetting?slug=service").success (dataSetting) ->
      $scope.dataSetting = dataSetting


    diviveArray = (array, number) ->
      newList = []
      temp = []
      for item, i in array
        if i%number is 0 and i isnt 0
          newList.push temp
          temp = []
        temp.push item
      newList.push temp
      return newList

  angular.module("ServiceController", []).controller "ServiceCtrl", [ "$scope", "$window","$location" , "$http","$rootScope", ServiceCtrl ]
)(window, window.angular)