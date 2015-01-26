companyWsApp = angular.module 'companyWsApp', [
  'ngAnimate',
  'ngRoute',
  'ui.bootstrap',
  'ngTouch',
  'ngSanitize',
  'MainController',
  'ui.router',

  'SwitchMenuController',
  'IntroController',
  'ScrollIntroPageController',
  'ServiceController',
  'TeamController',
  'VisionTeamController',
  'FullTeamController',
  'ProjectController',
  'ProjectTypeController',
  'ProjectItemController',
  'JobsController',
  'BlogController',
  'ContactController',
  'SubpageController',
  'SubpageDetailController'
]

companyWsApp.config [ "$stateProvider", "$urlRouterProvider", "$locationProvider",($stateProvider, $urlRouterProvider,$locationProvider) ->
  $urlRouterProvider.otherwise('/').when('/project', '/project/all')

  # HOME STATES AND NESTED VIEWS ========================================
  $locationProvider.html5Mode(true);
  $stateProvider
  .state "home",
    url : "/"
    templateUrl : "templates/intro.html"
    controller : 'IntroCtrl'

  .state "service",
    url : "/service"
    templateUrl : 'templates/service.html'
    controller : 'ServiceCtrl'

  .state "sub-service",
    url : "/service/:subpage"
    templateUrl : 'templates/sub-page/subpage.html'
    controller : 'SubpageCtrl'

  .state "sub-service.page",
    url : "/:page"
    templateUrl : 'templates/sub-page/subpage-detail.html'
    controller : 'SubpageDetailCtrl'

#  .state "sub-service.subpage.page",
#    url : "/:page"
#    controller : 'SubpageCtrl'

  .state "project",
    url :'/project'
    templateUrl : 'templates/project.html'
    controller : 'ProjectCtrl'

  .state "project.type",
    url :'/:typeofProject'
    templateUrl : 'templates/sub-page/project-list.html'
    controller : 'ProjectTypeCtrl'

  .state "project.type.item",
    url :'/:nameofProject'
    templateUrl : 'templates/sub-page/project-item.html'
    controller : 'ProjectItemCtrl'

  .state "web-development",
    url : "/web-development"
    templateUrl : 'templates/sub-page/subpage.html'
    controller : 'SubpageCtrl'

  .state "mobile",
    url : "/mobile"
    templateUrl : 'templates/sub-page/subpage.html'
    controller : 'SubpageCtrl'

  .state "embedded-software",
    url : "/embedded-software"
    templateUrl : 'templates/sub-page/subpage.html'
    controller : 'SubpageCtrl'

  .state "voip",
    url : "/voip"
    templateUrl : 'templates/sub-page/subpage.html'
    controller : 'SubpageCtrl'

  .state "team",
    url : "/team"
    templateUrl : 'templates/team.html'
    controller : 'TeamCtrl'

  .state "vision",
    url : "/team/vision"
    templateUrl : 'templates/sub-page/vision-team.html'
    controller : 'VisionTeamCtrl'

  .state "full-team",
    url : "/team/full-team"
    templateUrl : 'templates/sub-page/full-team.html'
    controller : 'FullTeamCtrl'

  .state "jobs",
    url : "/jobs"
    templateUrl : 'templates/jobs.html'
    controller : 'JobsCtrl'

  .state "blog",
    url : "/blog"
    templateUrl : 'templates/blog.html'
    controller : 'BlogCtrl'

  .state "contact",
    url : "/contact"
    templateUrl : 'templates/contact.html'
    controller : 'ContactCtrl'


#  $locationProvider.hashPrefix "!"
#  $routeProvider
#  .when '/',
#    templateUrl : 'templates/intro.html'
#    controller : 'IntroCtrl'
#  .when '/service',
#    templateUrl : 'templates/service.html'
#    controller : 'ServiceCtrl'
#  .when '/team',
#    templateUrl : 'templates/team.html'
#    controller : 'TeamCtrl'
#  .when '/project/:typeofProject?/:nameofProject?',
#    templateUrl : 'templates/project.html'
#    controller : 'ProjectCtrl'
#  .when '/jobs',
#    templateUrl : 'templates/jobs.html'
#    controller : 'JobsCtrl'
#  .when '/blog',
#    templateUrl : 'templates/blog.html'
#    controller : 'BlogCtrl'
#  .when '/contact',
#    templateUrl : 'templates/contact.html'
#    controller : 'ContactCtrl'
#  .when '/team/vision',
#    templateUrl : '/templates/sub-page/vision-team.html'
#    controller : 'VisionTeamCtrl'
#  .when '/team/full-team',
#    templateUrl : '/templates/sub-page/full-team.html'
#    controller : 'FullTeamCtrl'
#  .when '/service/:subpage/:page?',
#    templateUrl : 'templates/sub-page/subpage.html'
#    controller : 'SubpageCtrl'
#  .otherwise
#      redirectTo : '/'
]

companyWsApp.directive "errSrc", ->
  link : (scope, element, attrs) ->
    element.bind "error", ->
      attrs.$set "src", attrs.errSrc  unless attrs.src is attrs.errSrc


