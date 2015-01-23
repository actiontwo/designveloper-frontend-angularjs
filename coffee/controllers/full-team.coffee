((window,angular)->
  FullTeamCtrl = ($scope, $window, $location, $document, $interval, $http,$rootScope) ->
    $('.menu li:nth-child(2) a').addClass "active_menu"
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    $('#logo').show()
    $http.get("#{$rootScope.backendServer}/team").success (teams) ->
      $scope.teams = teams
    $scope.viewMore = ->
      setTimeout (->
        $("html, body").animate
          scrollTop: $(document).height()
        , 1000
      ),500

    $scope.selectType = ''

  angular.module("FullTeamController", []).controller "FullTeamCtrl", [ "$scope", "$window", "$location", "$document", "$interval", "$http","$rootScope", FullTeamCtrl ]
)(window, window.angular)