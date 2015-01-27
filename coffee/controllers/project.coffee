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

    $rootScope.showProject = (slug)->

      if $("#" + "project_#{slug}").hasClass('show-li')
        $('.list_project li').removeAttr('style')
        $('.list_project li .show-detail').css({'display' : 'none'})
        $rootScope.check = null
        return

      if $rootScope.check isnt slug
        projectId = $("#" + "project_#{slug}").offset().top + 240
        if detail > 1000 and $rootScope.check
          detail = projectId - projectDetails
        $rootScope.check = slug
        $rootScope.showItemProject(slug,projectId)

        return
    $rootScope.showItemProject = (slug)->
      $('.list_project li').removeAttr('style')
      $('.list_project li .show-detail').css({'display' : 'none'})
      height = $("#" + "project_detail_#{slug}").height() + 300
      $("#" + "project_#{slug}").css({'height' : "#{height}px", '-webkit-transition' : 'height 0.5s linear', 'transition' : 'height 0.5s linear'})
      setTimeout (->
        $("html, body").animate
          scrollTop : projectId
        , 500
      ), 100

  ProjectTypeCtrl = ($scope, $http, $stateParams, $rootScope) ->
    $rootScope.check = null
    if $stateParams.typeofProject
      if $stateParams.typeofProject is 'all'
        $rootScope.selectType = ""
      else
        $rootScope.selectType = $stateParams.typeofProject
    $http.get("#{$rootScope.backendServer}/project").success (dataProject)->
      $rootScope.data = dataProject

  ProjectItemCtrl = ($scope, $http, $stateParams, $rootScope) ->
    $rootScope.check = $stateParams.nameofProject

    index = _.indexOf($rootScope.data, _.findWhere($rootScope.data, {slug : $rootScope.check}));
    $rootScope.numberProject = (Math.floor(index / 4) + 1) * 4
    $rootScope.showItemProject($rootScope.check)

  angular.module("ProjectController", [])
  .controller "ProjectCtrl", [ "$scope", "$http", "$stateParams", "$rootScope", ProjectCtrl ]

  angular.module("ProjectTypeController", [])
  .controller "ProjectTypeCtrl", [ "$scope", "$http", "$stateParams", "$rootScope", ProjectTypeCtrl ]

  angular.module("ProjectItemController", [])
  .controller "ProjectItemCtrl", [ "$scope", "$http", "$stateParams", "$rootScope", ProjectItemCtrl ])(window, window.angular)