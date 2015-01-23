((window,angular)->
  ContactCtrl = ($scope, $location, $window, $http,$rootScope) ->
    $scope.pageClass = "contact-page"
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    $('#logo').show()
    $scope.infoCustomer = {}
    $scope.submit = ()->
      #If value empty and not right form will return and stop process
      unless $scope.infoCustomer.email and $scope.infoCustomer.name and $scope.infoCustomer.message
        return
      document.location.href = "mailto:info@designveloper.com?Subject=Hello%20Designveloper&body=#{$scope.infoCustomer.message}"
      $http.post("#{$rootScope.backendServer}/contact", $scope.infoCustomer).success (data)->
        $scope.infoCustomer ={}

    $http.get("#{$rootScope.backendServer}/pageSetting?slug=contact").success (dataSetting) ->
      $scope.pageSetting = dataSetting

  angular.module("ContactController", []).controller "ContactCtrl", [ "$scope", "$location" , "$window", "$http","$rootScope", ContactCtrl ]
)(window, window.angular)

