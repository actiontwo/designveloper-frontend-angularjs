((window, angular)->
  SubpageCtrl = ($scope, $window, $routeParams, $http, $stateParams, $rootScope) ->
    $('.menu li:nth-child(1) a').addClass "active_menu"
    $rootScope.hidePage = true
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    setTimeout (->
      $('#logo').fadeIn "slow"
      return
    ), 1000

    $http.get("#{$rootScope.backendServer}/service?slug=#{$stateParams.subpage}").success (data) ->
      $rootScope.currentPage = data
      dataPage = data.subpage

  SubpageDetailCtrl = ($scope, $window, $routeParams, $http, $stateParams, $rootScope) ->
    $http.get("#{$rootScope.backendServer}/service?slug=#{$stateParams.subpage}").success (data) ->
      $scope.currentPage = data
      if $stateParams.page is 'content'
        $rootScope.hidePage = false

      dataPage = data.subpage
      contentPage = $stateParams.page
      $rootScope.listSlug = _.pluck(dataPage.page, 'slug')
      pageIndex = _.indexOf($rootScope.listSlug, contentPage)
      $rootScope.subpage =
        currentIndex : pageIndex
        template : dataPage.page[pageIndex].template
        slug : dataPage.page[pageIndex].slug

  angular.module("SubpageController", []).controller "SubpageCtrl", [ "$scope", "$window", "$routeParams", "$http", "$stateParams", "$rootScope", SubpageCtrl ]
  angular.module("SubpageDetailController", []).controller "SubpageDetailCtrl", [ "$scope", "$window", "$routeParams", "$http", "$stateParams", "$rootScope", SubpageDetailCtrl ])(window,
  window.angular)