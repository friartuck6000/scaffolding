module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      test: {
        options: {
          cleancss: false
        },
        files: {
          'test/css/main.min.css': ['test/less/main.less']
        }
      }
    },
    watch: {
      test: {
        files: ['less/*.less','test/less/*.less'],
        tasks: ['less:test']
      }
    }

  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['less:test']);
  
};
