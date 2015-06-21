module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            css: ['assets/css/*.css', '!assets/css/vendor/*.css'],
            js: ['assets/js']
        },

        ngAnnotate: {
            compile: {
                files: {
                    'assets/js/main.js': 'assets/js/main.js'
                }
            }
        },

        ngtemplates: {
            app: {
                options: {
                    module: "filmsiteApp"
                },
                src: [
                    'js/app/templates/*.html',
                    'js/app/directives/**/*.html'
                ],
                dest: 'js/app/templates/templates.js'
            }
        },

        concat: {
            options: {
                sourceMap: false
            },
            js: {
                src: [
                    'js/vendor/jquery.js',
                    'js/vendor/jquery.event.move.js',
                    'js/vendor/jquery.twentytwenty.js',
                    'js/vendor/angular.js',
                    'js/vendor/angular-route.js',
                    'js/vendor/angular-animate.js',
                    'js/app/app.js',
                    'js/app/routes.js',
                    'js/app/constants.js',
                    'js/app/directives/*.js',
                    'js/app/directives/**/*.js',
                    'js/app/services/*.js',
                    'js/app/controllers/*.js',
                    'js/app/templates/templates.js'
                ],
                dest: 'assets/js/main.js'
            },
            css: {
                src: [
                    'assets/css/vendor/*',
                    'assets/css/styles.css'
                ],
                dest: 'assets/css/main.css'
            }
        },

        jshint: {
            all: ['Gruntfile.js', 'js/app/*.js']
        },

        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'assets/css',
                    environment: 'development'
                }
            }
        },

        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        },

        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: [
                    'js/vendor/*.js',
                    'js/app/*.js',
                    'js/app/**/*.js',
                    'js/app/**/**/*.js',
                    'js/app/directives/**/*.html',
                    'js/app/templates/*.html'
                ],
                tasks: ['ngtemplates', 'concat:js', 'ngAnnotate' /*, 'uglify'*/ ]
            },
            css: {
                files: [
                    'sass/*.scss',
                    'sass/*/*.scss',
                    'sass/*/*/*.scss'
                ],
                tasks: ['clean:css', 'compass', 'concat:css']
            }
        },

        connect: {
            server: {
                options: {
                    livereload: 1337,
                    port: 8000,
                    hostname: '127.0.0.1',
                    base: '.'
                }
            }
        }

    });

    grunt.registerTask('default', ['clean', 'ngtemplates', 'compass', 'concat', 'ngAnnotate', 'uglify', 'watch']);
    grunt.registerTask('dev', ['clean', 'ngtemplates', 'compass', 'concat', 'ngAnnotate', 'connect', 'watch']);

};
