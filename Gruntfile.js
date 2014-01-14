module.exports = function(grunt) {

  grunt.initConfig({
    // Read package.json
    pkg: grunt.file.readJSON('package.json'),

    less: {
      test: {
        options: {
          cleancss: true
        },
        files: {
          'test/css/main.min.css': ['less/main.less']
        }
      }
    },

    watch: {
      test: {
        files: ['less/*.less'],
        tasks: ['less:test']
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', ['less:test']);
  
};
