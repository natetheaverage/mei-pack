<?php 

namespace App\Providers;

use Illuminate\Support\Facades\Session;
use Illuminate\Support\ServiceProvider;
use App\Http\Composers\JsCssComposer;
/**
 * Class ViewComposerServiceProvider
 *
 * Pass variables constantly
 *
 * @package Boss\Providers
 */
class ViewComposerServiceProvider extends ServiceProvider {


    /**
	 * Bootstrap the application services.
     *
	 * @return void
	 */
	public function boot()
	{
		

		//view()->creator('*', "\App\Http\Composers\AppDetailsComposer@repo");

		//header view
		view()->composer(array('administrator::partials.header'), function($view)
		{
			$view->menu = app('admin_menu')->getMenu();
			$view->settingsPrefix = app('admin_config_factory')->getSettingsPrefix();
			$view->pagePrefix = app('admin_config_factory')->getPagePrefix();
			$view->configType = app()->bound('itemconfig') ? app('itemconfig')->getType() : false;
		});

		// Overide frozennode admin jquery 
		view()->composer( array('dashboard.default') , function($view)
		{
			// Usually attached to nav bar for frozen node
			$view->menu = app('admin_menu')->getMenu();
			$view->settingsPrefix = app('admin_config_factory')->getSettingsPrefix();
			$view->pagePrefix = app('admin_config_factory')->getPagePrefix();
			$view->configType = app()->bound('itemconfig') ? app('itemconfig')->getType() : false;

			//MEi Settings
			$view->meiSettings = [
				'currentUser' => \Auth::user(),
			];

	    //set up the basic asset arrays
			$view->css = array();
			$view->js = array(
				//'jquery' => asset('packages/frozennode/administrator/js/jquery/jquery-1.8.2.min.js'),
				'jquery' => asset('js/jquery-2.1.1.min.js'),
				'jquery-ui' => '',//asset('packages/frozennode/administrator/js/jquery/jquery-ui-1.10.3.custom.min.js'),
				'customscroll' => '',//asset('packages/frozennode/administrator/js/jquery/customscroll/jquery.customscroll.js'),
			);

			// MEi OVERIDE!
			//$view->js['jquery'] = asset('js/jquery-2.1.1.min.js');

		

		//add the package-wide css assets
		$view->css += array(
			'customscroll' => asset('packages/frozennode/administrator/js/jquery/customscroll/customscroll.css'),
			'main' => asset('packages/frozennode/administrator/css/main.css'),
		);

		
			//localization js assets
			$locale = config('app.locale');

			if ($locale !== 'en')
			{
				$view->js += array(
					'plupload-l18n' => asset('packages/frozennode/administrator/js/plupload/js/i18n/'.$locale.'.js'),
					'timepicker-l18n' => asset('packages/frozennode/administrator/js/jquery/localization/jquery-ui-timepicker-'.$locale.'.js'),
					'datepicker-l18n' => asset('packages/frozennode/administrator/js/jquery/i18n/jquery.ui.datepicker-'.$locale.'.js'),
					'select2-l18n' => asset('packages/frozennode/administrator/js/jquery/select2/select2_locale_'.$locale.'.js'),
				);
			}

			// //remaining js assets
			// $view->js += array(
			// 	'knockout' => asset('packages/frozennode/administrator/js/knockout/knockout-2.2.0.js'),
			// 	'knockout-mapping' => asset('packages/frozennode/administrator/js/knockout/knockout.mapping.js'),
			// 	'knockout-notification' => asset('packages/frozennode/administrator/js/knockout/KnockoutNotification.knockout.min.js'),
			// 	'knockout-update-data' => asset('packages/frozennode/administrator/js/knockout/knockout.updateData.js'),
			// 	'knockout-custom-bindings' => asset('packages/frozennode/administrator/js/knockout/custom-bindings.js'),
			// 	'accounting' => asset('packages/frozennode/administrator/js/accounting.js'),
			// 	'colorpicker' => asset('packages/frozennode/administrator/js/jquery/jquery.lw-colorpicker.min.js'),
			// 	'history' => asset('packages/frozennode/administrator/js/history/native.history.js'),
			// 	'admin' => asset('packages/frozennode/administrator/js/admin.js'),
			// 	'settings' => asset('packages/frozennode/administrator/js/settings.js'),
			// );
		//}

			//$view->js += array('page' => asset('packages/frozennode/administrator/js/page.js'));


	    $view->js += array(
	    	'pace' => asset('plugins/pace/pace.min.js'),
	    	'bootstrap' => asset('js/bootstrap.min.js'),
	    	'autosize' => asset('plugins/autosize/autosize.min.js'),
	    	'bootbox' => asset('plugins/bootbox/bootbox.min.js'),
	    	'datepicker' => asset('plugins/bootstrap-datepicker/bootstrap-datepicker.js'),
	    	'bootstrap-select' => asset('plugins/bootstrap-select/bootstrap-select.min.js'),
	    	'chosen' => asset('plugins/datatables/media/js/jquery.dataTables.min.js'),
	    	'fastclick' => asset('plugins/fast-click/fastclick.min.js'),
	    	'sweetalert' => asset('plugins/sweetalert/dist/sweetalert.min.js'),
	    	'switchery' => asset('plugins/switchery/switchery.min.js'),
	    	'dropzone' => asset('plugins/dropzone/dropzone.min.js'),
	    	// 'bootstrap-table' => asset('plugins/bootstrap-table/bootstrap-table.min.js'),
	    	// 'bootstrap-tagsinput' => asset('plugins/bootstrap-tagsinput/bootstrap-tagsinput.min.js'),
	    	// 'bootstrap-timepicker' => asset('plugins/bootstrap-timepicker/bootstrap-timepicker.min.js'),
	    	// 'bootstrapValidator' => asset('plugins/bootstrap-validator/bootstrapValidator.min.js'),
	    	// 'wizard' => asset('plugins/bootstrap-wizard/jquery.bootstrap.wizard.min.js'),
	    	// 'easy-pie-chart' => asset('plugins/easy-pie-chart/jquery.easypiechart.min.js'),
	    	// //'fullcalendar' => asset('plugins/fullcalendar/fullcalendar.min.js'),
	    	// 'gauge' => asset('plugins/gauge-js/gauge.min.js'),
	    	// //'gmaps' => asset('plugins/gmaps/gmaps.js'),
	    	// 'maskedinput' => asset('plugins/masked-input/jquery.maskedinput.min.js'),
	    	// 'morris-js' => asset('plugins/morris-js/morris.min.js'),
	    	// 'noUISlider' => asset('plugins/noUiSlider/jquery.nouislider.all.min.js'),
	    	// 'skycons' => asset('plugins/skycons/skycons.min.js'),
	    	// 'sparkline' => asset('plugins/sparkline/jquery.sparkline.min.js'),
	    	// 'summernote' => asset('plugins/summernote/summernote.min.js'),
	    	// 'tabcomplete' => asset('plugins/tabcomplete/tabcomplete.js'),
	    	'nifty' => asset('js/dashboard/nifty.js'),
	    	'dash-core' => asset('js/dash-core.js'),
	    	'nifty-demo' => asset('js/dashboard/demo/nifty-demo.js'),
	    	//'editable' => asset('plugins/x-editable/js/bootstrap-editable.min.js'),
	    );
 
	    $view->css += array(
	    	'dashboard_plugins' => asset('css/dashboardPlugins.css'),
	    	'bootstrap' => asset('css/vendor/bootstrap.min.css'),
	    	'elixer_dash' => asset('css/dashboard.css'),
	    );

		});

  }


	/**
	 * Register the application services.
	 *
	 * @return void
	 */
	public function register()
	{
		//
	}

    /**
     * Call the user composer class for descriptions about the user
     *
     * @param $view
     * @param $compose
     */
    public function composeUserDetails($view, $compose)
    {
    	//view()->creator($view, "\App\Http\Composers\UserDetailsComposer@$compose");
    }

}