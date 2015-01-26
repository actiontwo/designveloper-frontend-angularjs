var tasks = [
  'clean:public',
  'jade:templates',
  'jade:view',
  'coffee:compile',
  'concat:jsFiles',
  'sass:dist',
  'copy:dev',
  'copy:images',
  'uglify:minFile',
  'clean:js'
];
var tasksDev = [
  'jade:templates',
  'jade:view',
  'coffee:compile',
  'concat:jsFiles',
  'sass:dist',
  'copy:dev',
  'copy:images',
  'clean:js'
];
var coffeeFileOrder = [
  'lib/underscore-min.js',
  'lib/jquery.min.js',
  'lib/angular-file-upload-shim.min.js',
  'lib/angular.min.js',
  'lib/angular-file-upload.min.js',
  'lib/angular-animate.min.js',
  'lib/angular-route.min.js',
  'lib/angular-ui-router.min.js',
  'lib/angular-touch.min.js',
  'lib/angular-sanitize.min.js',
  'lib/angular-filter.min.js',
  'lib/ui-bootstrap-tpls.min.js',
  'lib/google-analytics.js',
  'lib/bxslider.js',
  'coffee/js/controllers.js',
  'coffee/js/app.js',
  'lib/jquery.animateNumber.js',
  'lib/slick.js'
];
module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        options: {
          lineNumbers: true
        },
        files: [
          {
            expand: true,
            cwd: 'styles',
            src: ['**/*.scss'],
            dest: 'public/css',
            ext: '.css'
          }
        ]
      }
    },
    jade: {
      templates: {
        options: {
          pretty: true
        },
        files: [
          {
            expand: true,
            cwd: 'templates',
            src: ['**/*.jade'],
            dest: 'public/templates',
            ext: '.html'
          }
        ]
      },
      view: {
        options: {
          pretty: true
        },
        files: {
          "public/index.html": ["view/index.jade"]
        }
      }
    },
    copy: {
      dev: {
        files: [
          {
            expand: true,
            cwd: 'styles',
            src: ['**/*','!*.scss'],
            dest: 'public/css'
          }
        ]
      },
      images: {
        files: [
          {
            expand: true,
            cwd: 'images',
            src: ['**/*'],
            dest: 'public/images'
          }
        ]
      }
    },
    coffee: {
      compile: {
        files: {
          'coffee/js/app.js': 'coffee/app.coffee', // 1:1 compile
          'coffee/js/controllers.js': ['coffee/controllers/*.coffee'] // compile and concat into single file
        }
      },
      glob_to_multiple: {
        expand: true,
        flatten: true,
        cwd: 'coffee',
        src: ['**/*.coffee'],
        dest: 'coffee/js',
        ext: '.js'
      }
    },
    concat: {
      jsFiles: {
        files: {
          'public/js/designveloper.js': coffeeFileOrder
        }
      }
    },
    uglify: {
      options: {
//        mangle: false
      },
      minFile: {
        files: {
          'public/js/designveloper.js': ['public/js/designveloper.js']
        }
      }
    },
    clean: {
      js: ["coffee/js"],
      public: ["public"]
    },
    watch: {
      assets: {
        // Assets to watch:
        files: ['view/**/*', 'templates/**/*','sass/**/*','coffee/**/*','lib/**/*','images/**/*'],

        // When assets are changed:
        tasks: tasksDev
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', tasks);
  grunt.registerTask('dev', tasksDev.concat(['watch:assets']));

};