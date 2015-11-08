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
            dev: {
                options: {
                    directory: 'mustache_templates'
                },
                files: [
                    {
                        data: 'data/dev.json',
                        template: 'mustache_templates/main.mustache',
                        dest: 'build/sandbox/index.html'
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
                    'build/sandbox/css/libs/media/esb.css': 'less/media/esb.less',
                    'build/sandbox/css/libs/media/grid.css': 'less/media/grid.less',
                    'build/sandbox/css/libs/media/list.css': 'less/media/list.less',
                    'build/sandbox/css/libs/media/main.css': 'less/media/main.less',
                    'build/sandbox/css/libs/ui/loading.css': 'less/ui/loading.less',
                    'build/sandbox/css/libs/ui/mask.css': 'less/ui/mask.less',
                    'build/sandbox/css/libs/ui/nav.css': 'less/ui/nav.less',
                    'build/sandbox/css/libs/ui/overlay.css': 'less/ui/overlay.less',
                    'build/sandbox/css/libs/ui/message.css': 'less/ui/message.less',


                    'build/sandbox/css/libs/globals.css': 'less/globals.less',
                    'build/sandbox/css/libs/main.css': 'less/main.less',
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
                        src: 'bower_components/angular/angular.js',
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
                        src: 'bower_components/angular-ui-router/release/angular-ui-router.js',
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
                        src: 'bower_components/toastr/toastr.js',
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
                    'bower_components/toastr/toastr.js',

                    // libs
                    "src/app.module.js",

                    "src/core/core.module.js",
                    "src/core/core.routes.js",
                    "src/core/controllers/core.controller.js",
                    "src/core/directives/admin-bar.directive.js",
                    "src/core/services/conf.service.js",

                    "src/media/media.module.js",
                    "src/media/media.routes.js",
                    "src/media/controllers/episode.controller.js",
                    "src/media/controllers/subscription.controller.js",
                    "src/media/directives/episodes/episode-item.directive.js",
                    "src/media/directives/subscriptions/subscription-item.directive.js",
                    "src/media/directives/subscriptions/ebs.directive.js",
                    "src/media/directives/subscriptions/ebs-item.directive.js",
                    "src/media/filters/ebs.filter.js",
                    "src/media/filters/order-by-pub-date.filter.js",
                    "src/media/filters/order-by-title.filter.js",
                    "src/media/services/media.service.js",
                    "src/media/services/episode.service.js",
                    "src/media/services/subscription.service.js",

                    "src/player/player.module.js",
                    "src/player/controllers/player.controller.js",
                    "src/player/directives/player.directive.js",
                    "src/player/services/player.service.js",

                    "src/ui/ui.module.js",
                    "src/ui/controllers/action.controller.js",
                    "src/ui/controllers/ui.controller.js",
                    "src/ui/directives/navigation.directive.js",
                    "src/ui/directives/mask.directive.js",
                    "src/ui/directives/menu-toggler.directive.js",
                    "src/ui/directives/message.directive.js",
                    "src/ui/directives/overlay.directive.js",
                    "src/ui/directives/loading.directive.js",
                    "src/ui/services/dom.service.js",
                    "src/ui/services/loading.service.js",
                    "src/ui/services/mask.service.js",
                    "src/ui/services/message.service.js",
                    "src/ui/services/navigation.service.js",
                    "src/ui/services/overlay.service.js",
                    "src/ui/services/ui.data.service.js",

                    "src/utility/utility.module.js",
                    "src/utility/filters/utility.filter.js",
                    "src/utility/services/utility.service.js",

                    "src/vendors/vendors.module.js",
                    "src/vendors/underscore.js"
                ],
                dest: 'build/temp/main.js'
            }
        },

        jshint: {
            beforeconcat: [
                "src/**/*.js"
                //"src/app.module.js",
                //
                //"src/core/core.module.js",
                //"src/core/core.routes.js",
                //"src/core/Core.js",
                //"src/core/services/ConfigService.js",
                //
                //"src/media/media.module.js",
                //"src/media/media.routes.js",
                //"src/media/Episode.js",
                //"src/media/Subscription.js",
                //"src/media/directives/episodes/EpisodeItemDirective.js",
                //"src/media/directives/subscriptions/SubscriptionItemDirective.js",
                //"src/media/directives/subscriptions/SubscriptionNavigationDirective.js",
                //"src/media/directives/subscriptions/SubscriptionNavigationItemDirective.js",
                //"src/media/filters/FilterBySubscription.js",
                //"src/media/filters/OrderByPubDate.js",
                //"src/media/filters/SubscriptionFilters.js",
                //"src/media/services/Episode.js",
                //"src/media/services/EpisodeService.js",
                //"src/media/services/Subscription.js",
                //"src/media/services/SubscriptionService.js",
                //
                //"src/player/player.module.js",
                //"src/player/directives/PlayerDirective.js",
                //"src/player/services/PlayerService.js",
                //
                //"src/ui/ui.module.js",
                //"src/ui/controllers/NavigationController.js",
                //"src/ui/directives/MessageDirective.js",
                //"src/ui/directives/OverlayDirective.js",
                //"src/ui/services/UIService.js",
                //"src/ui/services/MessageService.js",
                //"src/ui/services/OverlayService.js",
                //
                //"src/utility/utility.module.js",
                //"src/utility/directives/LoadingDirective.js",
                //"src/utility/filters/UtilityFilters.js",
                //"src/utility/services/UtilityService.js",
                //
                //"src/vendors/vendor.module.js",
                //"src/vendors/exception.js",
                //"src/vendors/exception-handler.js",
                //"src/vendors/logger.js",
                //"src/vendors/routerhelper.js",
                //"src/vendors/underscore.js",
                //
                //"src/vendors/vendors.module.js",
                //"src/vendors/services/UnderscoreService.js"



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
        },
        protractor: {
            options: {
                configFile: "node_modules/protractor/example/conf.js", // Default config file
                keepAlive: true, // If false, the grunt process stops when the test fails.
                noColor: false, // If true, protractor will not use colors in its output.
                args: {
                    // Arguments passed to the command
                }
            },
            your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "protractor.conf.js", // Target-specific config file
                    args: {} // Target-specific arguments
                }
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
    grunt.registerTask('dev', ['clean:dev', 'mustache_render:dev', 'less:dev',
        'copy:dev', 'jshint:beforeconcat', /*'protractor', 'karma'*/]);
    grunt.registerTask('staging', ['clean:staging', 'mustache_render:staging', 'less:staging',
        'concat:staging', 'copy:staging', 'uglify:staging', 'cssmin:staging', 'clean:temp']);


};