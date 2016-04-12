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
    .stylus('mei-core.styl', 'public/css/mei-app-core.css')
    .browserify('mei-core.js')

    .styles([
    	'./node_modules/normalize.css/normalize.css',
    	'./node_modules/sweetalert/dist/sweetalert.css',
    ], './public/css/all-vendor.css')

    .scripts([
        './node_modules/sweetalert/dist/sweetalert.min.js',
    ], './public/js/all-vendor.js')

    .scripts([
        './resources/assets/vendor/waypoints.min.js',
    ], './public/js/front-vendor.js')

    .task('test')



    .browserSync();
});

    
