module.exports = function (grunt) {
    'use strict';

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    // Project configuration.
    grunt.initConfig({

        clean: {
            core: 'build/core/**',
            dev: ['build/sandbox/*', '!build/sandbox/rest/**'],
            staging: ['build/testing/*', '!build/testing/rest/**'],
            temp: 'build/temp'
        },

        mustache_render: {
            core: {
                options: {
                    directory: 'mustache_templates'
                },
                files: [
                    {
                        data: 'data/dev.json',
                        template: 'mustache_templates/core/settings.mustache',
                        dest: 'src/core/templates/settings.html'
                    }
                ]
            },
            dev: {
                options: {
                    directory: 'mustache_templates'
                },
                files: [
                    {
                        data: 'data/dev.json',
                        template: 'mustache_templates/main.mustache',
                        dest: 'build/sandbox/index.html'
                    },
                    {
                        data: 'data/dev.json',
                        template: 'mustache_templates/core/settings.mustache',
                        dest: 'src/core/templates/settings.html'
                    }
                ]
            },
            staging: {
                options: {
                    directory: 'mustache_templates'
                },
                files: [
                    {
                        data: 'data/staging.json',
                        template: 'mustache_templates/main.mustache',
                        dest: 'build/testing/index.html'
                    }
                ]
            }
        },

        less: {

            dev: {
                options: {
                    strictMath: true,
                    outputSourceFiles: true
                },
                files: {
                    'build/sandbox/css/contrib/bootstrap-lite.css': 'less/contrib/bootstrap-lite.less',
                    'build/sandbox/css/libs/media/main.css': 'less/media/main.less',
                    'build/sandbox/css/libs/media/grid.css': 'less/media/grid.less',
                    'build/sandbox/css/libs/media/list.css': 'less/media/list.less',
                    'build/sandbox/css/libs/message.css': 'less/message.less',
                    'build/sandbox/css/libs/overlay.css': 'less/overlay.less',
                    'build/sandbox/css/libs/globals.css': 'less/globals.less',
                    'build/sandbox/css/libs/main.css': 'less/main.less',
                    'build/sandbox/css/libs/nav.css': 'less/nav.less',
                    'build/sandbox/css/libs/player.css': 'less/player.less',
                    'build/sandbox/css/libs/variables.css': 'less/variables.less'
                }
            },
            staging: {
                options: {
                    strictMath: true,
                    outputSourceFiles: true
                },
                files: {
                    'build/temp/styles.css' : 'less/styles.less'
                }
            }
        },

        copy: {

            dev: {
                files : [
                    {
                        expand: true,
                        flatten: false,
                        cwd: 'src',
                        src: '**',
                        dest: 'build/sandbox/src/libs/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/angular/angular.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'node_modules/angular-mocks/angular-mocks.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/angular-route/angular-route.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/angular-sanitize/angular-sanitize.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/angular-touch/angular-touch.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/angular-truncate/src/truncate.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/jquery/dist/jquery.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: 'bower_components/underscore/underscore.js',
                        dest: 'build/sandbox/src/contrib/'
                    },
                    {
                        expand: true,
                        flatten: true,
                        src: [
                            'bower_components/angularUtils/src/directives/pagination/dirPagination.js',
                            'bower_components/angularUtils/src/directives/pagination/dirPagination.tpl.html'
                        ],
                        dest: 'build/sandbox/src/contrib/'
                    }
                ]
            },

            staging: {
                files : [
                    {
                        expand: true,
                        flatten: false,
                        cwd: 'src',
                        src: '**/templates/**/*',
                        dest: 'build/testing/src/libs/'
                    }
                ]
            }
        },

        concat: {

            options: {
                banner: '<%= banner %>\n<%= jqueryCheck %>',
                stripBanners: false
            },
            // Smush all the contributed JS files together.
            staging: {
                src: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'bower_components/angular-sanitize/angular-sanitize.js',
                    'bower_components/angular-touch/angular-touch.js',
                    'bower_components/angular-truncate/src/truncate.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/underscore/underscore.js',

                    // libs
                    "src/app.module.js",

                    "src/core/core.module.js",
                    "src/core/core.routes.js",
                    "src/core/controllers/CoreController.js",
                    "src/core/services/ConfigService.js",

                    "src/media/media.module.js",
                    "src/media/media.routes.js",
                    "src/media/controllers/EpisodeController.js",
                    "src/media/controllers/SubscriptionController.js",
                    "src/media/directives/episodes/EpisodeItemDirective.js",
                    "src/media/directives/subscriptions/SubscriptionItemDirective.js",
                    "src/media/directives/subscriptions/SubscriptionNavigationDirective.js",
                    "src/media/directives/subscriptions/SubscriptionNavigationItemDirective.js",
                    "src/media/filters/FilterBySubscription.js",
                    "src/media/filters/OrderByPubDate.js",
                    "src/media/filters/SubscriptionFilters.js",
                    "src/media/services/Episode.js",
                    "src/media/services/EpisodeService.js",
                    "src/media/services/Subscription.js",
                    "src/media/services/SubscriptionService.js",

                    "src/player/player.module.js",
                    "src/player/directives/PlayerDirective.js",
                    "src/player/services/PlayerService.js",

                    "src/ui/ui.module.js",
                    "src/ui/controllers/NavigationController.js",
                    "src/ui/directives/MessageDirective.js",
                    "src/ui/directives/OverlayDirective.js",
                    "src/ui/services/UIService.js",
                    "src/ui/services/MessageService.js",
                    "src/ui/services/OverlayService.js",

                    "src/utility/utility.module.js",
                    "src/utility/directives/LoadingDirective.js",
                    "src/utility/filters/UtilityFilters.js",
                    "src/utility/services/UtilityService.js",

                    "src/vendors/vendors.module.js",
                    "src/vendors/services/UnderscoreService.js"


                ],
                dest: 'build/temp/main.js'
            }
        },

        jshint: {
            beforeconcat: [
                "src/app.module.js",

                "src/core/core.module.js",
                "src/core/core.routes.js",
                "src/core/controllers/CoreController.js",
                "src/core/services/ConfigService.js",

                "src/media/media.module.js",
                "src/media/media.routes.js",
                "src/media/controllers/EpisodeController.js",
                "src/media/controllers/SubscriptionController.js",
                "src/media/directives/episodes/EpisodeItemDirective.js",
                "src/media/directives/subscriptions/SubscriptionItemDirective.js",
                "src/media/directives/subscriptions/SubscriptionNavigationDirective.js",
                "src/media/directives/subscriptions/SubscriptionNavigationItemDirective.js",
                "src/media/filters/FilterBySubscription.js",
                "src/media/filters/OrderByPubDate.js",
                "src/media/filters/SubscriptionFilters.js",
                "src/media/services/Episode.js",
                "src/media/services/EpisodeService.js",
                "src/media/services/Subscription.js",
                "src/media/services/SubscriptionService.js",

                "src/player/player.module.js",
                "src/player/directives/PlayerDirective.js",
                "src/player/services/PlayerService.js",

                "src/ui/ui.module.js",
                "src/ui/controllers/NavigationController.js",
                "src/ui/directives/MessageDirective.js",
                "src/ui/directives/OverlayDirective.js",
                "src/ui/services/UIService.js",
                "src/ui/services/MessageService.js",
                "src/ui/services/OverlayService.js",

                "src/utility/utility.module.js",
                "src/utility/directives/LoadingDirective.js",
                "src/utility/filters/UtilityFilters.js",
                "src/utility/services/UtilityService.js",

                "src/vendors/vendors.module.js",
                "src/vendors/services/UnderscoreService.js"



            ],
            afterconcat: ['dist/output.js']
        },

        uglify: {
            staging: {
                files: {
                    'build/testing/src/main.min.js': 'build/temp/main.js'
                }
            }
        },


        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            staging: {
                files: {
                    'build/testing/css/styles.min.css': 'build/temp/styles.css'
                }
            }
        },

        karma: {
            unit: {
                configFile: 'karma.conf.js',
                //port: 9999,
                //singleRun: true,
                //browsers: ['chrome'],
                //logLevel: 'ERROR'
            }
        }

    });


    // These plugins provide necessary tasks.
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies'});

    grunt.loadNpmTasks('grunt-karma');

    //Custom Build

    grunt.registerTask('testdev', ['clean:core', 'mustache_render:core', 'mustache_render:dev', 'copy:dev', 'karma']);


    grunt.registerTask('build', ['clean:main', 'less', 'copy:main']);
    grunt.registerTask('test', ['clean:dev', 'copy:dev', 'karma']);
    grunt.registerTask('dev', ['clean:dev', 'mustache_render:dev', 'mustache_render:core', 'less:dev',
        'copy:dev', 'jshint:beforeconcat']);
    grunt.registerTask('staging', ['clean:staging', 'mustache_render:staging', 'mustache_render:core', 'less:staging',
        'concat:staging', 'copy:staging', 'uglify:staging', 'cssmin:staging', 'clean:temp']);


};