/*jshint node:true */

var fs = require('fs');
var path = require('path');

module.exports = function(grunt) {
  'use strict';

  var _ = grunt.util._,
    /**
     * My grunt configuration filename
     */
    MY_GRUNT = 'mygrunt.json';

  if (!fs.existsSync(MY_GRUNT)) {
    grunt.warn('No `' + MY_GRUNT + '` file were found. You can copy the `mygrunt.json.example` file.');
  }

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-mocha');
  grunt.loadNpmTasks('grunt-shell');

  // Configuration files
  var mybox  = grunt.file.readJSON(MY_GRUNT),
      pkg    = grunt.file.readJSON('package.json');

  // Shell logging function
  function logShell(err, stdout, stderr, cb) {
    if (err) { return grunt.log.error('Command failed on ' + mybox.host); }
    grunt.log.ok('Command executed on ' + mybox.host);
  }

  // Project configuration.
  grunt.initConfig({
    pkg: pkg,
    mybox: mybox,

    dirs: {
      specs:   'specs/'
    },

    files: {
      all: '**/*',
      js:  '**/*.js'
    },

    // Testing/Linting tasks
    //
    mocha: {
      index: ['specs/index.html']
    },

    jshint: {
      files: [
        'grunt.js',
        '<%= dirs.specs %><%= files.js %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Developement tools
    //
    watch: {
      test: {
        files: '<%= dirs.js %><%= files.js %>',
        tasks: 'test'
      }
    }
  });

  // The host name can be overriden with the --host option
  var host = grunt.option('host');
  if (host) {
    grunt.config.set('mybox.host', host);
  }

  // Testing
  grunt.registerTask('test', ['mocha']);
};