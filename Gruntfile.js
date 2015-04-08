module.exports = function(grunt) {

	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        clean: {
            css: ['assets/css'],
            js: ['assets/js']
        },

        ngtemplates:  {
            app: {
                options: {
                    module: "filmsiteApp"
                },
                src:      'js/app/templates/*.html',
                dest:     'js/app/templates/templates.js'
            }
        },
        
        concat: {
           options: {
               sourceMap: false
           },
           js: {
               src: [
                   'js/vendor/angular.js',
                   'js/vendor/angular-route.js',
                   'js/vendor/angular-animate.js',
                   'js/app/app.js',
                   'js/app/routes.js',
                   'js/app/constants.js',
                   'js/app/*/*.js',
                   'js/app/*/*/*.js'
               ],
               dest: 'assets/js/main.js'
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
       		scripts: {
	            files: [
	                'js/vendor/*.js', 
                  'js/app/*.js', 
                  'js/app/**/*.js',
                  'js/app/templates/*.html'
	            ],
	            tasks: ['ngtemplates', 'concat:js', 'uglify']
	        },
	        css: {
                files: [
                    'sass/*.scss', 
                    'sass/*/*.scss', 
                    'sass/*/*/*.scss'
                ],
                tasks: ['clean:css', 'compass']
            }
       }

    });

    grunt.registerTask('dev', ['clean', 'ngtemplates', 'concat', 'compass', 'uglify', 'watch']);

};