(function() {
  var companyWsApp;

  companyWsApp = angular.module('companyWsApp', ['ngAnimate', 'ngRoute', 'ui.bootstrap', 'ngTouch', 'ngSanitize', 'MainController', 'ui.router', 'SwitchMenuController', 'IntroController', 'ScrollIntroPageController', 'ServiceController', 'TeamController', 'VisionTeamController', 'FullTeamController', 'ProjectController', 'ProjectTypeController', 'ProjectItemController', 'JobsController', 'BlogController', 'ContactController', 'SubpageController', 'SubpageDetailController']);

  companyWsApp.config([
    "$stateProvider", "$urlRouterProvider", "$locationProvider", function($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/').when('/project', '/project/all');
      $locationProvider.html5Mode(true);
      return $stateProvider.state("home", {
        url: "/",
        templateUrl: "templates/intro.html",
        controller: 'IntroCtrl'
      }).state("service", {
        url: "/service",
        templateUrl: 'templates/service.html',
        controller: 'ServiceCtrl'
      }).state("abcd", {
        url: "/abc",
        templateUrl: 'templates/service.html'
      }).state("sub-service", {
        url: "/sub-service/:subpage",
        templateUrl: 'templates/sub-page/subpage.html',
        controller: 'SubpageCtrl'
      }).state("sub-service.page", {
        url: "/:page",
        templateUrl: 'templates/sub-page/subpage-detail.html',
        controller: 'SubpageDetailCtrl'
      }).state("project", {
        url: '/project',
        templateUrl: 'templates/project.html',
        controller: 'ProjectCtrl'
      }).state("project.type", {
        url: '/:typeofProject',
        templateUrl: 'templates/sub-page/project-list.html',
        controller: 'ProjectTypeCtrl'
      }).state("project.type.item", {
        url: '/:nameofProject',
        templateUrl: 'templates/sub-page/project-item.html',
        controller: 'ProjectItemCtrl'
      }).state("web-development", {
        url: "/web-development",
        templateUrl: 'templates/sub-page/subpage.html',
        controller: 'SubpageCtrl'
      }).state("mobile", {
        url: "/mobile",
        templateUrl: 'templates/sub-page/subpage.html',
        controller: 'SubpageCtrl'
      }).state("embedded-software", {
        url: "/embedded-software",
        templateUrl: 'templates/sub-page/subpage.html',
        controller: 'SubpageCtrl'
      }).state("voip", {
        url: "/voip",
        templateUrl: 'templates/sub-page/subpage.html',
        controller: 'SubpageCtrl'
      }).state("team", {
        url: "/team",
        templateUrl: 'templates/team.html',
        controller: 'TeamCtrl'
      }).state("vision", {
        url: "/team/vision",
        templateUrl: 'templates/sub-page/vision-team.html',
        controller: 'VisionTeamCtrl'
      }).state("full-team", {
        url: "/team/full-team",
        templateUrl: 'templates/sub-page/full-team.html',
        controller: 'FullTeamCtrl'
      }).state("jobs", {
        url: "/jobs",
        templateUrl: 'templates/jobs.html',
        controller: 'JobsCtrl'
      }).state("blog", {
        url: "/blog",
        templateUrl: 'templates/blog.html',
        controller: 'BlogCtrl'
      }).state("contact", {
        url: "/contact",
        templateUrl: 'templates/contact.html',
        controller: 'ContactCtrl'
      });
    }
  ]);

  companyWsApp.directive("errSrc", function() {
    return {
      link: function(scope, element, attrs) {
        return element.bind("error", function() {
          if (attrs.src !== attrs.errSrc) {
            return attrs.$set("src", attrs.errSrc);
          }
        });
      }
    };
  });

}).call(this);
