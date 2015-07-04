module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    config: {
      dev: 'src',
      prod: 'dist'
    },

    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
      dev: {
        tasks: ['nodemon:dev', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      },
      prod: {
        tasks: ['nodemon:prod'],
        options: {
          logConcurrentOutput: false
        }
      }
    },

    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          nodeArgs: ['--debug'],
          env: {
            PORT: '3000',
            name: '<%= config.dev %>'
          },

          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            nodemon.on('config:update', function () {
              // Delay before server listens on port
              setTimeout(function() {
                require('open')('http://localhost:3000');
              }, 1000);
            });

            // refreshes browser when server reboots
            nodemon.on('restart', function () {
              console.log('::rebooted')
            });
          }
        }
      },
      prod: {
        script: 'server.js',
        options: {
          env: {
            PORT: '3000',
            name: '<%= config.prod %>'
          },

          callback: function (nodemon) {
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });

            nodemon.on('config:update', function () {
              // Delay before server listens on port
              setTimeout(function() {
                require('open')('http://localhost:3000');
              }, 1000);
            });

            // refreshes browser when server reboots
            nodemon.on('restart', function () {
              console.log('::rebooted')
            });
          }
        }
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options : {
        livereload: true
      },
      sass: {
        files: ['<%= config.dev %>/**/*.sass'],
        tasks: ['sass']
      },
      yml: {
        files: ['<%= config.dev %>/**/*.yml'],
        tasks: ['yaml']
      }
    },

    sass: {
      dev: {
        options: {
          style: 'expanded',
          trace: true,
          cacheLocation: '<%= config.dev %>/stylesheets/sass/.sass-cache'
        },
        files: {
          '<%= config.dev %>/stylesheets/css/app.css': '<%= config.dev %>/stylesheets/sass/app.sass'
        }
      },
      build: {
        options: {
          style: 'compressed',
          trace: true,
          noCache: true
        },
        files: {
          '<%= config.prod %>/stylesheets/css/app.css': '<%= config.dev %>/stylesheets/sass/app.sass'
        }
      }
    },

    yaml: {
      dev: {
        options: {
          space: 4,
          strict: true
        },
        files: {
          '<%= config.dev %>/langs/langs.json': '<%= config.dev %>/langs/langs.yml'
        }
      },
      build: {
        options: {
          space: 4,
          strict: true
        },
        files: {
          '<%= config.prod %>/langs/langs.json': '<%= config.dev %>/langs/langs.yml'
        }
      }
    },

    // Copies all needed structure to dist
    copy: {
      js: {
        expand: true,
        cwd: '<%= config.dev %>/',
        src: [
          'js/collections/*',
          'js/models/*',
          'js/views/*',
          'js/*'
        ],
        dest: '<%= config.prod %>/'
      },
      vendor: {
        expand: true,
        cwd: '<%= config.dev %>/js/vendor/',
        src: [
          'jquery/dist/jquery.min.js',
          'underscore-amd/underscore-min.js',
          'backbone-amd/backbone-min.js',
          'requirejs/require.js',
          'requirejs-text/text.js',
          'requirejs-plugins/src/*',
          'pikaday/pikaday.js',
          'notifyjs/dist/notify-combined.min.js',
          'chartist/dist/chartist.min.js',
          'chartist-plugin-tooltip/dist/chartist-plugin-tooltip.min.js',
          'bootstrap/js/dropdown.js',
          'bootstrap-select/dist/js/bootstrap-select.min.js',
          'StickyTableHeaders/js/jquery.stickytableheaders.min.js'
        ],
        dest: '<%= config.prod %>/js/vendor'
      },
      statics: {
        expand: true,
        cwd: '<%= config.dev %>/',
        src: [
          'templates/*',
          'index.html',
          'js/vendor/bootstrap/dist/css/bootstrap.min.css',
          'js/vendor/bootstrap/dist/fonts/**',
          'js/vendor/bootstrap-select/dist/css/bootstrap-select.min.css',
          'js/vendor/pikaday/css/pikaday.css',
          'js/vendor/chartist/dist/chartist.min.css',
          'favico.ico'
        ],
        dest: '<%= config.prod %>/'
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.prod %>/**'
          ]
        }]
      }
    }

  });

  grunt.registerTask('default', [
    'sass:dev',
    'yaml:dev',
    'concurrent:dev'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'sass:build',
    'yaml:build',
    'copy:vendor',
    'copy:js',
    'copy:statics'
  ]);

  grunt.registerTask('prod', [
    'clean:dist',
    'sass:build',
    'yaml:build',
    'copy:vendor',
    'copy:js',
    'copy:statics',
    'concurrent:prod'
  ]);
};
