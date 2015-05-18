module.exports = function(grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({
    config: {
      dev: 'src',
    },

    pkg: grunt.file.readJSON('package.json'),

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      options : {
        livereload: true
      },
      sass: {
        files: ['<%= config.dev %>/**/*.sass'],
        tasks: ['sass']
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
      }
    },

    // The actual grunt server settings
    connect: {
      dev: {
        options: {
          port: 9090,
          base: 'src/',
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'sass:dev',
    'connect:dev',
    'watch'
  ]);
};
