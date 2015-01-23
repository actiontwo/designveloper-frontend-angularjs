((window,angular)->
  TeamCtrl = ($scope, $window, $location, $document, $interval, $http,$rootScope) ->
    $('.menu li:nth-child(2) a').addClass "active_menu"
    $scope.$on '$routeChangeSuccess', ->
      $window.scrollTo 0, 1
    $('#logo').show()
    $http.get("#{$rootScope.backendServer}/team").success (teams) ->
      $scope.teams = teams  # used for mobile view
      console.log(teams)
      # generate random index in teams that ensures no one reappears until all members are shown at least once
      selectedMemberIndexes = []
      randomMemberIndex = ->
        # reset if all members are shown
        selectedMemberIndexes = selectedMemberIndexes[0..3] if selectedMemberIndexes.length is teams.length
        # keep generating random index until there is one that is not in the selected members list
        index = Math.floor Math.random() * teams.length
        while index in selectedMemberIndexes
          index = Math.floor Math.random() * teams.length
        # mark as selected
        selectedMemberIndexes.unshift index
        return index

      # initiate list of showing team members
      $scope.showTeams = []
      for i in [0..3]
        $scope.showTeams.push
          first:teams[randomMemberIndex()]
          second:teams[randomMemberIndex()]

      setTimeout (->
        $(".team_list_mobile").slick
          dots : true
          infinite : true
          speed : 1000
          slidesToShow : 1
          slidesToScroll : 1
          autoplay : true
          autoplaySpeed : 5000
        return
      ), 100

      # randomly replace one team member every 3s
      $interval (->
        selectedMemberIndex = randomMemberIndex()
        replacePosition = Math.floor Math.random() * 4
        temp = $scope.showTeams[replacePosition].second
        $scope.showTeams[replacePosition] =
          first: temp
          second: teams[selectedMemberIndex]
      ), 3000

      return

    $http.get("#{$rootScope.backendServer}/pageSetting?slug=team").success (dataSetting) ->
      $scope.dataSetting = dataSetting
      if dataSetting.options
        value1 = dataSetting.options.value1
        value2 = dataSetting.options.value2
        value3 = dataSetting.options.value3

      setTimeout ( ->
        $('#lines-of-code').animateNumber
          number : value1, 2000
        return
      ), 0

      setTimeout ( ->
        $('#pixels-crafted').animateNumber
          number : value2, 2000
        return
      ), 1000

      setTimeout ( ->
        $('#beer-bottles').animateNumber
          number : value3, 2000
      ), 2000

    # Remove active-menu class
    $('.menu li').click ->
      $('.menu li:nth-child(2) a').removeClass "active-menu"

    progressBar = (percent, $element) ->
      progressBarWidth = percent * $element.width() / 100
      $element.find('div').animate(
        width : progressBarWidth, 3000).html percent

  angular.module("TeamController", []).controller "TeamCtrl", [
    "$scope",
    "$window",
    "$location",
    "$document",
    "$interval",
    "$http",
    "$rootScope",
    TeamCtrl
  ]
)(window, window.angular)