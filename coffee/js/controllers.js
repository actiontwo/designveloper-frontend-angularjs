(function() {
  (function(window, angular) {
    var BlogCtrl;
    BlogCtrl = function($scope, $location, $window) {
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      return $('#logo').show();
    };
    return angular.module("BlogController", []).controller("BlogCtrl", ["$scope", "$location", "$window", BlogCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var ContactCtrl;
    ContactCtrl = function($scope, $location, $window, $http, $rootScope) {
      $scope.pageClass = "contact-page";
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      $('#logo').show();
      $scope.infoCustomer = {};
      $scope.submit = function() {
        if (!($scope.infoCustomer.email && $scope.infoCustomer.name && $scope.infoCustomer.message)) {
          return;
        }
        document.location.href = "mailto:info@designveloper.com?Subject=Hello%20Designveloper&body=" + $scope.infoCustomer.message;
        return $http.post("" + $rootScope.backendServer + "/contact", $scope.infoCustomer).success(function(data) {
          return $scope.infoCustomer = {};
        });
      };
      return $http.get("" + $rootScope.backendServer + "/pageSetting?slug=contact").success(function(dataSetting) {
        return $scope.pageSetting = dataSetting;
      });
    };
    return angular.module("ContactController", []).controller("ContactCtrl", ["$scope", "$location", "$window", "$http", "$rootScope", ContactCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var FullTeamCtrl;
    FullTeamCtrl = function($scope, $window, $location, $document, $interval, $http, $rootScope) {
      $('.menu li:nth-child(2) a').addClass("active_menu");
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      $('#logo').show();
      $http.get("" + $rootScope.backendServer + "/team").success(function(teams) {
        return $scope.teams = teams;
      });
      $scope.viewMore = function() {
        return setTimeout((function() {
          return $("html, body").animate({
            scrollTop: $(document).height()
          }, 1000);
        }), 500);
      };
      return $scope.selectType = '';
    };
    return angular.module("FullTeamController", []).controller("FullTeamCtrl", ["$scope", "$window", "$location", "$document", "$interval", "$http", "$rootScope", FullTeamCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var MainCtrl, SwitchMenuCtrl;
    SwitchMenuCtrl = function($scope) {
      $scope.showbtn = false;
      return $scope.menu_table = {
        status: false
      };
    };
    MainCtrl = function($scope, $location, $rootScope, $window) {
      $rootScope.imageDefault = 'https://cws.designveloper.com/images/no-image.png';
      $rootScope.backendServer = 'https://ad.designveloper.com';
      $scope.isActive = function(route, index) {
        return $location.path().indexOf(route) !== -1;
      };
      $scope.pageClass = "down-page";
      $scope.currentIndex = 0;
      $scope.resetIndex = function() {
        return $scope.currentIndex = 0;
      };
      $scope.changeStatusPage = function(index) {
        if (index > $scope.currentIndex) {
          $scope.pageClass = 'up-page';
        } else {
          $scope.pageClass = 'down-page';
        }
        return $scope.currentIndex = index;
      };
      $scope.addRightPage = function() {
        return $scope.pageClass = 'right-page';
      };
      $scope.addLeftPage = function() {
        return $scope.pageClass = 'left-page';
      };
      $scope.addUpPage = function() {
        return $scope.pageClass = 'up-page';
      };
      $scope.topMenu = {
        template: 'templates/topMenu.html',
        list: [
          {
            name: 'service',
            href: 'service',
            slug: 'service'
          }, {
            name: 'team',
            href: 'team',
            slug: 'team'
          }, {
            name: 'work',
            href: 'project/all',
            slug: 'project'
          }, {
            name: 'jobs',
            href: 'jobs',
            slug: 'jobs'
          }, {
            name: 'contact',
            href: 'contact',
            slug: 'contact'
          }
        ]
      };
      $scope.initializeWindowResize = function() {
        var widthScreen;
        widthScreen = $window.innerWidth;
        if (widthScreen < 768) {
          $('#logo').css({
            'width': widthScreen
          });
          setTimeout((function() {
            return $('.show-social').css({
              'left': widthScreen - 40
            });
          }), 100);
        }
        if (widthScreen > 769) {
          return $('#logo').removeAttr('style').show();
        }
      };
      $scope.initializeWindowResize();
      $(window).resize(function() {
        $scope.initializeWindowResize();
      });
      $('#menu-mobile').hide();
      $('#social-responsive').hide();
      $scope.doneEditMenu = function() {
        return $scope.toggleMenu();
      };
      $scope.showmenu = false;
      $scope.showsocial = false;
      $scope.toggleMenu = function() {
        $('#menu-mobile').show();
        $('#btn-menu-mobile').addClass("fadeInLeft animated");
        $scope.showmenu = ($scope.showmenu ? false : true);
        $('#menu-mobile').addClass('fadeInLeft animated');
      };
      return $scope.toggleSocial = function() {
        $('#social-responsive').show();
        $scope.showsocial = ($scope.showsocial ? false : true);
        $('#social-responsive').addClass('fadeInRight animated');
      };
    };
    angular.module("SwitchMenuController", []).controller("SwitchMenuCtrl", ["$scope", SwitchMenuCtrl]);
    return angular.module("MainController", []).controller("MainCtrl", ["$scope", "$location", "$rootScope", "$window", MainCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  var ScrollIntroPageCtrl;

  ScrollIntroPageCtrl = function($scope, $location, $window) {
    var heightScreen, widthMask, widthScreen;
    heightScreen = $window.innerHeight;
    widthScreen = $window.innerWidth;
    widthMask = widthScreen * 0.9;
    $('#intro').css('height', heightScreen);
    $scope.initializeWindowResize = function() {
      heightScreen = $window.innerHeight;
      widthScreen = $window.innerWidth;
      widthMask = widthScreen * 0.9;
      if (heightScreen > 700 || widthScreen < 768) {
        $('#intro').css('height', heightScreen);
      } else {
        if (widthScreen < 400) {
          $('#intro').css('height', heightScreen);
        } else {
          $('#intro').css('min-height', 615);
        }
      }
      if (widthScreen >= 1280) {
        $('.img-home_mask').css('height', heightScreen);
        $('#home_mask').css('border-top-width', widthMask);
        $('#home_mask').css('border-right-width', widthMask);
        $('#home_mask').css('left', -widthMask / 10);
      }
      if (widthScreen >= 1024 & widthScreen < 1280) {
        $('#home_mask').css('border-top-width', widthScreen * 1.2);
        $('#home_mask').css('border-right-width', widthScreen * 1.2);
        $('#home_mask').css('left', -widthScreen / 3);
      }
    };
    $scope.initializeWindowSize = function() {
      $scope.windowHeight = $window.innerHeight;
      return $scope.windowWidth = $window.innerWidth;
    };
    if (heightScreen > 700) {
      $('#intro').css('height', heightScreen);
    } else {
      if (widthScreen < 400) {
        $('#intro').css('height', heightScreen);
      } else {
        $('#intro').css('min-height', 615);
      }
    }
    $scope.initializeWindowResize();
    return $(window).resize(function() {
      $scope.initializeWindowResize();
    });
  };

  angular.module("ScrollIntroPageController", []).controller("ScrollIntroPageCtrl", ["$scope", "$location", "$window", ScrollIntroPageCtrl]);

  (function(window, angular) {
    var IntroCtrl;
    IntroCtrl = function($scope, $location, $window) {
      $scope.pageClass = "intro-page";
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      return $('#logo').hide();
    };
    return angular.module("IntroController", []).controller("IntroCtrl", ["$scope", "$location", "$window", IntroCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var JobsCtrl;
    JobsCtrl = function($scope, $location, $window, $document, $http, $rootScope) {
      var tabsStatus, widthScreen;
      $('#logo').show();
      $scope.oneAtATime = true;
      $http.get("" + $rootScope.backendServer + "/jobs").success(function(data) {
        return $scope.jobs = data;
      });
      $scope.status = {
        isFirstOpen: true,
        isFirstDisabled: false
      };
      $http.get("" + $rootScope.backendServer + "/pageSetting?slug=jobs").success(function(dataSetting) {
        return $scope.pageSetting = dataSetting;
      });
      widthScreen = $window.innerWidth;
      if (widthScreen >= 1024) {
        $(".jobs-list").click(function() {
          return setTimeout((function() {
            if ($('.check').hasClass("icon-collapse")) {
              return $('.jobs-offer').hide();
            } else {
              return $('.jobs-offer').show();
            }
          }), 1);
        });
      } else {
        $(".jobs-list").css('position', 'initial');
        $("#jobs").css('position', 'relative');
      }
      tabsStatus = {};
      $scope.menu_show = function(tabs, id) {
        if (!tabsStatus[id]) {
          tabsStatus[id] = id + '0';
        }
        setTimeout((function() {
          $(tabs).slick({
            dots: true,
            infinite: false,
            placeholders: false,
            speed: 1000,
            slidesToShow: 3,
            touchMove: true,
            slidesToScroll: 1
          });
        }), 1);
      };
      $scope.menu_show_mobile = function(tabs) {
        return setTimeout((function() {
          $(tabs).slick({
            dots: true,
            infinite: false,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
          });
        }), 1);
      };
      $scope.setCurrentTab = function(id, index) {
        tabsStatus[id] = id + index;
      };
      return $scope.getCurrentTab = function(id, index) {
        if ((id + index) === tabsStatus[id]) {
          return true;
        }
        return false;
      };
    };
    return angular.module("JobsController", []).controller("JobsCtrl", ["$scope", "$location", "$window", "$document", "$http", "$rootScope", JobsCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var ProjectCtrl, ProjectItemCtrl, ProjectTypeCtrl;
    ProjectCtrl = function($scope, $http, $stateParams, $rootScope) {
      $rootScope.numberProject = 4;
      $http.get("" + $rootScope.backendServer + "/category").success(function(data) {
        $scope.categories = data;
        $scope.isCurrentTab = function(type) {
          if (type === 'all' && $rootScope.selectType === '' || $rootScope.selectType === type) {
            $rootScope.type = type;
            return true;
          }
          return false;
        };
        $scope.selectTypeCat = function(cat) {
          if (cat === 'all') {
            $rootScope.selectType = "";
          } else {
            $rootScope.selectType = cat.slug;
          }
          $rootScope.numberProject = 4;
          return $rootScope.check = null;
        };
        return $rootScope.check = null;
      });
      $http.get("" + $rootScope.backendServer + "/pageSetting?slug=project").success(function(dataSetting) {
        return $scope.pageSetting = dataSetting;
      });
      setTimeout((function() {
        $(".menu-select").on("mouseleave", function() {
          $(this).removeClass("active");
        });
        $(".menu-list-responsive").on("mouseover", function() {
          var select;
          select = $(".menu-select");
          select.addClass("active");
        });
        return $(".menu-select-options li a").on("click", function() {
          var pk, select;
          select = $(".menu-select");
          pk = $(this).closest("li").find("i").first().text();
          $(this).closest(".menu-select-options").find("a").removeClass("active");
          $(this).addClass("active");
          $(".menu-selected").text($(this).html());
          select.removeClass("active");
          $(".menu-select-header").find("input[name=demo-category]").val(pk);
        });
      }), 100);
      $scope.showMore = function() {
        return setTimeout((function() {
          return $("html, body").animate({
            scrollTop: $(document).height()
          }, 500);
        }), 500);
      };
      return $rootScope.showProject = function(id) {
        var detail, projectId;
        $('.list_project li').removeAttr('style');
        $('.list_project li show-detail').css({
          'display': 'none'
        });
        if ($rootScope.check !== id) {
          projectId = $("#" + ("project_" + id)).offset().top + 240;
          if (detail > 1000 && $rootScope.check) {
            detail = projectId - projectDetails;
          }
          $rootScope.check = id;
          $('#' + ("project_detail_" + id + " .website-image img")).one("load", function() {
            var height;
            height = $("#" + ("project_detail_" + id)).height() + 300;
            $("#" + ("project_" + id)).css({
              'height': "" + height + "px",
              '-webkit-transition': 'height 0.5s linear',
              'transition': 'height 0.5s linear'
            });
            return setTimeout((function() {
              return $("html, body").animate({
                scrollTop: projectId
              }, 500);
            }), 100);
          });
        }
      };
    };
    ProjectTypeCtrl = function($scope, $http, $stateParams, $rootScope) {
      $rootScope.check = null;
      if ($stateParams.typeofProject) {
        if ($stateParams.typeofProject === 'all') {
          $rootScope.selectType = "";
        } else {
          $rootScope.selectType = $stateParams.typeofProject;
        }
      }
      return $http.get("" + $rootScope.backendServer + "/project").success(function(dataProject) {
        return $rootScope.data = dataProject;
      });
    };
    ProjectItemCtrl = function($scope, $http, $stateParams, $rootScope) {
      var index;
      $rootScope.check = $stateParams.nameofProject;
      index = _.indexOf($rootScope.data, _.findWhere($rootScope.data, {
        id: $rootScope.check
      }));
      return $rootScope.numberProject = (Math.floor(index / 4) + 1) * 4;
    };
    angular.module("ProjectController", []).controller("ProjectCtrl", ["$scope", "$http", "$stateParams", "$rootScope", ProjectCtrl]);
    angular.module("ProjectTypeController", []).controller("ProjectTypeCtrl", ["$scope", "$http", "$stateParams", "$rootScope", ProjectTypeCtrl]);
    return angular.module("ProjectItemController", []).controller("ProjectItemCtrl", ["$scope", "$http", "$stateParams", "$rootScope", ProjectItemCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var ServiceCtrl;
    ServiceCtrl = function($scope, $window, $location, $http, $rootScope) {
      var diviveArray;
      $scope.$on('$routeChangeSuccess', function() {
        $window.scrollTo(0, 1);
      });
      setTimeout((function() {
        $('#logo').fadeIn("slow");
      }), 1000);
      $('.menu li').click(function() {
        return $('.menu li:nth-child(1) a').removeClass("active-menu");
      });
      $http.get("" + $rootScope.backendServer + "/service").success(function(data) {
        return $scope.data = data;
      });
      $http.get("" + $rootScope.backendServer + "/technology").success(function(data) {
        $scope.technologies = data;
        $scope.normalLayout = diviveArray(data, 6);
        $scope.mobileLayout = diviveArray(data, 3);
        return setTimeout((function() {
          $('.bxslider').bxSlider({
            mode: 'vertical',
            slideMargin: 5,
            auto: true,
            autoControls: true,
            pause: 5000
          });
        }), 200);
      });
      $http.get("" + $rootScope.backendServer + "/pageSetting?slug=service").success(function(dataSetting) {
        return $scope.dataSetting = dataSetting;
      });
      return diviveArray = function(array, number) {
        var i, item, newList, temp, _i, _len;
        newList = [];
        temp = [];
        for (i = _i = 0, _len = array.length; _i < _len; i = ++_i) {
          item = array[i];
          if (i % number === 0 && i !== 0) {
            newList.push(temp);
            temp = [];
          }
          temp.push(item);
        }
        newList.push(temp);
        return newList;
      };
    };
    return angular.module("ServiceController", []).controller("ServiceCtrl", ["$scope", "$window", "$location", "$http", "$rootScope", ServiceCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  (function(window, angular) {
    var SubpageCtrl, SubpageDetailCtrl;
    SubpageCtrl = function($scope, $window, $routeParams, $http, $stateParams, $rootScope) {
      $('.menu li:nth-child(1) a').addClass("active_menu");
      $rootScope.hidePage = true;
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      setTimeout((function() {
        $('#logo').fadeIn("slow");
      }), 1000);
      return $http.get("" + $rootScope.backendServer + "/service?slug=" + $stateParams.subpage).success(function(data) {
        var dataPage;
        $rootScope.currentPage = data;
        return dataPage = data.subpage;
      });
    };
    SubpageDetailCtrl = function($scope, $window, $routeParams, $http, $stateParams, $rootScope) {
      return $http.get("" + $rootScope.backendServer + "/service?slug=" + $stateParams.subpage).success(function(data) {
        var contentPage, dataPage, pageIndex;
        $scope.currentPage = data;
        if ($stateParams.page === 'content') {
          $rootScope.hidePage = false;
        }
        dataPage = data.subpage;
        contentPage = $stateParams.page;
        $rootScope.listSlug = _.pluck(dataPage.page, 'slug');
        pageIndex = _.indexOf($rootScope.listSlug, contentPage);
        return $rootScope.subpage = {
          currentIndex: pageIndex,
          template: dataPage.page[pageIndex].template,
          slug: dataPage.page[pageIndex].slug
        };
      });
    };
    angular.module("SubpageController", []).controller("SubpageCtrl", ["$scope", "$window", "$routeParams", "$http", "$stateParams", "$rootScope", SubpageCtrl]);
    return angular.module("SubpageDetailController", []).controller("SubpageDetailCtrl", ["$scope", "$window", "$routeParams", "$http", "$stateParams", "$rootScope", SubpageDetailCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  var __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  (function(window, angular) {
    var TeamCtrl;
    TeamCtrl = function($scope, $window, $location, $document, $interval, $http, $rootScope) {
      var progressBar;
      $('.menu li:nth-child(2) a').addClass("active_menu");
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      $('#logo').show();
      $http.get("" + $rootScope.backendServer + "/team").success(function(teams) {
        var i, randomMemberIndex, selectedMemberIndexes, _i;
        $scope.teams = teams;
        console.log(teams);
        selectedMemberIndexes = [];
        randomMemberIndex = function() {
          var index;
          if (selectedMemberIndexes.length === teams.length) {
            selectedMemberIndexes = selectedMemberIndexes.slice(0, 4);
          }
          index = Math.floor(Math.random() * teams.length);
          while (__indexOf.call(selectedMemberIndexes, index) >= 0) {
            index = Math.floor(Math.random() * teams.length);
          }
          selectedMemberIndexes.unshift(index);
          return index;
        };
        $scope.showTeams = [];
        for (i = _i = 0; _i <= 3; i = ++_i) {
          $scope.showTeams.push({
            first: teams[randomMemberIndex()],
            second: teams[randomMemberIndex()]
          });
        }
        setTimeout((function() {
          $(".team_list_mobile").slick({
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
          });
        }), 100);
        $interval((function() {
          var replacePosition, selectedMemberIndex, temp;
          selectedMemberIndex = randomMemberIndex();
          replacePosition = Math.floor(Math.random() * 4);
          temp = $scope.showTeams[replacePosition].second;
          return $scope.showTeams[replacePosition] = {
            first: temp,
            second: teams[selectedMemberIndex]
          };
        }), 3000);
      });
      $http.get("" + $rootScope.backendServer + "/pageSetting?slug=team").success(function(dataSetting) {
        var value1, value2, value3;
        $scope.dataSetting = dataSetting;
        if (dataSetting.options) {
          value1 = dataSetting.options.value1;
          value2 = dataSetting.options.value2;
          value3 = dataSetting.options.value3;
        }
        setTimeout((function() {
          $('#lines-of-code').animateNumber({
            number: value1
          }, 2000);
        }), 0);
        setTimeout((function() {
          $('#pixels-crafted').animateNumber({
            number: value2
          }, 2000);
        }), 1000);
        return setTimeout((function() {
          return $('#beer-bottles').animateNumber({
            number: value3
          }, 2000);
        }), 2000);
      });
      $('.menu li').click(function() {
        return $('.menu li:nth-child(2) a').removeClass("active-menu");
      });
      return progressBar = function(percent, $element) {
        var progressBarWidth;
        progressBarWidth = percent * $element.width() / 100;
        return $element.find('div').animate({
          width: progressBarWidth
        }, 3000).html(percent);
      };
    };
    return angular.module("TeamController", []).controller("TeamCtrl", ["$scope", "$window", "$location", "$document", "$interval", "$http", "$rootScope", TeamCtrl]);
  })(window, window.angular);

}).call(this);

(function() {
  $(document).ready(function() {});

}).call(this);

(function() {
  (function(window, angular) {
    var VisionTeamCtrl;
    VisionTeamCtrl = function($scope, $window) {
      $('.menu li:nth-child(2) a').addClass("active_menu");
      $scope.$on('$routeChangeSuccess', function() {
        return $window.scrollTo(0, 1);
      });
      setTimeout((function() {
        $('#logo').fadeIn("slow");
      }), 1000);
      $scope.initializeWindowResize = function() {
        var widthScreen;
        widthScreen = $window.innerWidth;
        if (widthScreen < 768) {
          return $('.team_image').css({
            "height": widthScreen / 3.5
          });
        }
      };
      $scope.initializeWindowResize();
      return $(window).resize(function() {
        $scope.initializeWindowResize();
      });
    };
    return angular.module("VisionTeamController", []).controller("VisionTeamCtrl", ["$scope", "$window", VisionTeamCtrl]);
  })(window, window.angular);

}).call(this);
