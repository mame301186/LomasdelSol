module.exports = function(grunt){
	require('time-grunt')(grunt);
	require('jit-grunt')(grunt,{
		useminPrepare:'grunt-usemin'
	});

	grunt.initConfig({
		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'css-miguel',
					src: ['*.scss'],
					dest: 'css-miguel',
					ext: '.css'
				}]
			}
		},

		watch: {
			files: ['css-miguel/*.scss'],
			tasks: ['css']
		},

		browserSync: {
			dev: {
				bsFiles: {//browser files
					src: [
						'css-miguel/*.css',
						'*.html',
						'js/*.js'
				    ]
				},
				options: {
					watchTask: true,
					server: {
						baseDir: './' //Directorio base para nuestro servidor
			        }
		        }
			}
	    },

		imagemin: {
		    dynamic: {
			    files: [{
					expand: true,
					cwd: './',
					src: 'images/*.{png,gif,jpg,jpeg}',
					dest: 'dist/'
			    }]
			}
		},

		copy: {
		    html: {
			    files: [{
					expand: true,
					dot: true,
					cwd: './',
					src: ['*.html'],
					dest: 'dist'
			    }]
			},
		},

		clean: {
			build: {
				src: ['dist/']
			}
		},

		cssmin: {
			dist:{}
		},

		uglify: {
			dist:{}
		},

		filerev: {
			options: {
				encouding: 'utf8',
				algorithm: 'md5'
				length:20
			},

			release: {
			// filerev: release hashes(md5) all assets (images, js, and css)
			// in dist directory
				files: [{
					src: [
						'dist/js/*.js',
						'dist/css/*.css',
					]
				}]
			}
		},

		concat: {
			options: {
				separator: ';'
			},
			dist: {}
		},

		useminPrepare: {
			foo: {
				dest: 'dist',
				src: ['index.html', 'about.html', 'project.html', 'economics-index.html', 'estadisticas.html', 'term-and-conditions.html', 'contacts.html']
			},
			options: {
				flow: {
					steps: {
						css: ['cssmin'],
						js: ['uglify']
					},
					post: {
						css: [{
							name:'cssmin',
							createConfig: function (context, block) {
								var generated = context.options.generated;
								generated.options = {
									keepSpecialComments: 0,
									rebase: false
								}
							}
						}] 
					}
				}
			}
		},

		usemin: {
			html:['dist/index.html','dist/about.html','dist/proyect.html','dist/economics-index.html','dist/estadisticas.html','dist/term-and-conditions.html','dist/contacts.html'],
			options: {
				assetsDir: ['dist', 'dist/css', 'dist/js']
			}
		}
	});

	    grunt.loadNpmTasks()
		grunt.registerTask('css', ['sass']);
		grunt.registerTask('default',['browserSync','watch']);
		grunt.registerTask('img:compress', ['imagemin']);
		grunt.registerTask('build', [
			'clean',
			'copy',
			'imagemin',
			'useminPrepare',
			'concat',
			'cssmin',
			'uglify',
			'filerev',
			'usemin'
			])
};