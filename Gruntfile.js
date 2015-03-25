module.exports = function(grunt) {

  // Load tasks
  require('load-grunt-tasks')(grunt);

  // Show task time
  require('time-grunt')(grunt);

  grunt.initConfig({
    // Read package.json
    pkg: grunt.file.readJSON('package.json'),

    // Paths
    path: {
      less: 'test/less',
      css: 'test/css'
    },

    less: {
      test: {
        options: {
          compress: false
        },
        files: {
          '<%= path.css %>/default.css' : '<%= path.less %>/_default.less'
        }
      }
    },

    watch: {
      all: {
        files: ['less/**/*.less'],
        tasks: ['less:test']
      },
    }
  });

  // Build
  grunt.registerTask('build-test', ['less:test']);

  // Default task
  grunt.registerTask('default', ['build-test']);

};
