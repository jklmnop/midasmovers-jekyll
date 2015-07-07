/* globals module, require */

module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/site.js'],
        dest: 'js/dist/site.js'
      }
    },

    uglify: {
      global: {
        files: {
          "js/dist/site.min.js": ["js/dist/site.js"]
        }
      }
    },

    sass: {
      global: {
        options: {
          style: "compressed"
        },
        files: {
          "css/main-unprefixed.css": "scss/main.scss"
        }
      }
    },

    autoprefixer: {
      global: {
        src: "css/main-unprefixed.css",
        dest: "css/main.css"
      }
    },

    shell: {
      jekyllServe: {
        command: "jekyll serve --baseurl="
      },
      jekyllBuild: {
        command: "jekyll build --config _config-dev.yml"
      }
    },

    watch: {
      options: {
        livereload: true
      },
      site: {
        files: ["index.html", "faq/**/*.html", "_layouts/**/*.html", "_includes/**/*.{html,markdown}"],
        tasks: ["shell:jekyllBuild"]
      },
      js: {
        files: ["js/**/*.js"],
        tasks: ["concat", "uglify", "shell:jekyllBuild"]
      },
      css: {
        files: ["scss/**/*.scss"],
        tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'imgraw',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    }
  });

  require("load-grunt-tasks")(grunt);

  grunt.registerTask("serve", ["shell:jekyllServe"]);
  grunt.registerTask("img", ["imagemin"]);
  grunt.registerTask("default", ["sass", "autoprefixer", "concat", "uglify", "shell:jekyllBuild", "watch"]);

};
