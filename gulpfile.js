var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');
require('laravel-elixir-stylus');

//var browserify = require('browserify');
var gulp = require('gulp');
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});
/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */ 

elixir(function(mix) {
    mix
    //.copy('./node_modules/bootstrap-styl/bootstrap', './resources/assets/stylus/bootstrap/')
    //.stylus('bootstrap/*.styl', 'public/css/bootstrap.css')
    // .less('nifty.less', 'public/css/nifty.css')
    // .less('app.less', 'public/css/dashboard-app.css')

    //.stylus('material-1-app.styl')
    .stylus('twenty-app.styl', 'public/css/app-core.css')
    .stylus('mei-core.styl', 'public/css/mei-app-core.css')
    .browserify('mei-core.js')

    // Always required
    .styles([
        './node_modules/normalize.css/normalize.css',
        './node_modules/sweetalert/dist/sweetalert.css',
        './resources/assets/vendor/css/font-awesome.min.css',
        './resources/assets/vendor/css/animate.min.css',
    ], './public/css/all-vendor.css')

    .styles([
        './resources/assets/vendor/css/owl.carousel.css',
        './resources/assets/vendor/css/owl.transitions.css',
        './resources/assets/vendor/css/prettyPhoto.css',
        './resources/assets/vendor/css/responsive.css',
    ], './public/css/front-vendor.css')


    .scripts([
        './node_modules/sweetalert/dist/sweetalert.min.js',
        './resources/assets/vendor/dropzone.js',
    ], './public/js/all-vendor.js')

    .scripts([
        'resources/assets/vendor/AnimatedLetters/js/letters.js',
        'resources/assets/vendor/AnimatedLetters/js/segment.min.js',
        'resources/assets/vendor/AnimatedLetters/js/d3-ease.v0.6.js',
    ], 'public/js/front-vendor-top.js', './')

    .scripts([
        './resources/assets/vendor/waypoints.min.js',
    ], './public/js/front-vendor.js')



    .styles([
        './resources/assets/vendor/AnimatedLetters/css/demo.css',
        './resources/assets/twenty-plugins/demo-phone.css',
        './resources/assets/twenty-plugins/ipad3dmenu.css',
    ], './public/css/twenty-twenty-vendor.css')


    .task('test')



    .browserSync();
});

    
