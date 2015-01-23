((window, angular)->
  ProjectCtrl = ($scope, $http, $stateParams, $rootScope) ->

    $rootScope.numberProject = 4

    $http.get("#{$rootScope.backendServer}/category").success (data)->
      $scope.categories = data
      $scope.isCurrentTab = (type) ->
        if type is 'all' and $rootScope.selectType is '' or $rootScope.selectType is type
          $rootScope.type = type
          return true
        return false

      $scope.selectTypeCat = (cat) ->
        if cat is 'all'
          $rootScope.selectType = ""
        else
          $rootScope.selectType = cat.slug
        $rootScope.numberProject = 4
        $rootScope.check = null

      $rootScope.check = null

    $http.get("#{$rootScope.backendServer}/pageSetting?slug=project").success (dataSetting) ->
      $scope.pageSetting = dataSetting

    setTimeout (->
      $(".menu-select").on "mouseleave", ->
        $(this).removeClass "active"
        return

      $(".menu-list-responsive").on "mouseover", ->
        select = $(".menu-select")
        select.addClass "active"
        return
      $(".menu-select-options li a").on "click", ->
        select = $(".menu-select")
        pk = $(this).closest("li").find("i").first().text()
        $(this).closest(".menu-select-options").find("a").removeClass "active"
        $(this).addClass "active"
        $(".menu-selected").text $(this).html()
        select.removeClass "active"
        $(".menu-select-header").find("input[name=demo-category]").val pk
        return
    ), 100

    $scope.showMore = ->
      setTimeout (->
        $("html, body").animate
          scrollTop : $(document).height()
        , 500
      ), 500

    $rootScope.showProject = (id)->
      $('.list_project li').removeAttr('style')
      $('.list_project li show-detail').css({'display' : 'none'})
      if $rootScope.check isnt id
        projectId = $("#" + "project_#{id}").offset().top + 240
        if detail > 1000 and $rootScope.check
          detail = projectId - projectDetails
        $rootScope.check = id
        $('#' + "project_detail_#{id} .website-image img").one("load", ()->
          height = $("#" + "project_detail_#{id}").height() + 300
          $("#" + "project_#{id}").css({'height' : "#{height}px", '-webkit-transition' : 'height 0.5s linear', 'transition' : 'height 0.5s linear'})
          setTimeout (->
            $("html, body").animate
              scrollTop : projectId
            , 500
          ), 100
        )

        return

  ProjectTypeCtrl = ($scope, $http, $stateParams, $rootScope) ->
    $rootScope.check = null
    if $stateParams.typeofProject
      if $stateParams.typeofProject is 'all'
        $rootScope.selectType = ""
      else
        $rootScope.selectType = $stateParams.typeofProject
    $http.get("#{$rootScope.backendServer}/project").success (dataProject)->
      $rootScope.data = dataProject
  #      console.log($rootScope.data)

  ProjectItemCtrl = ($scope, $http, $stateParams, $rootScope) ->
    $rootScope.check = $stateParams.nameofProject

    index = _.indexOf($rootScope.data, _.findWhere($rootScope.data, {id : $rootScope.check}));
    $rootScope.numberProject = (Math.floor(index / 4) + 1) * 4

  angular.module("ProjectController", [])
  .controller "ProjectCtrl", [ "$scope", "$http", "$stateParams", "$rootScope", ProjectCtrl ]

  angular.module("ProjectTypeController", [])
  .controller "ProjectTypeCtrl", [ "$scope", "$http", "$stateParams", "$rootScope", ProjectTypeCtrl ]

  angular.module("ProjectItemController", [])
  .controller "ProjectItemCtrl", [ "$scope", "$http", "$stateParams", "$rootScope", ProjectItemCtrl ])(window, window.angular)