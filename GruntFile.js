module.exports = function (grunt) {
    var // defaults
        defaultBrowsers = [ 'PhantomJS' ],

        // CLI options
        browsers = typeof grunt.option('browsers') == 'string' ? grunt.option('browsers').split(',') : defaultBrowsers;


    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        templates: [
            'src/views/**/*.html'
        ],
        srcFiles: [
            'src/scripts/**/*.js'
        ],
        testFiles: {
            karmaUnit: 'test/karma.conf.js'
        },
        clean: ['target'],
        karma: {
            unit: {
                options: {
                    configFile: 'test/karma.conf.js',
                    autoWatch: false,
                    singleRun: true,
                    browsers: browsers
                }
            },
            watch: {
                options: {
                    configFile: '<%= testFiles.karmaUnit %>',
                    autoWatch: false,
                    browsers: browsers
                },
                background: true
            }
        },
        watch: {
            karma: {
                files: ['src/scripts/*.js', 'test/unit/**/*.js'],
                tasks: ['karma:watch:run']
            }
        },
        jshint: {
            options: {
                boss: true,
                browser: true,
                camelcase: true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                forin: true,
                immed: true,
                indent: 4,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                globals: {
                    angular: false,
                    $: false
                }
            },
            src: [ 'src/scripts/**/*.js' ],
            spec: {
                options: {
                    camelcase: false,
                    globals: {
                        $: false,
                        angular: false,
                        beforeEach: false,
                        browser: false,
                        browserTrigger: false,
                        console: false,
                        describe: false,
                        expect: false,
                        inject: false,
                        input: false,
                        it: false,
                        module: false,
                        repeater: false,
                        runs: false,
                        spyOn: false,
                        waits: false,
                        waitsFor: false
                    }
                },
                files: {
                    spec: ['test/**/*.js', '!test/vendor/**/*.js']
                }
            }
        }
    });

    // Tasks
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('test', ['jshint', 'karma:unit']);
    grunt.registerTask('testwatch', ['jshint', 'karma:watch', 'watch']);
};