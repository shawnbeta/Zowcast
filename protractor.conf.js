exports.config = {
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: 'build/sandbox',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['build/sandbox/src/libs/player/test/services/player-spec.js']

};