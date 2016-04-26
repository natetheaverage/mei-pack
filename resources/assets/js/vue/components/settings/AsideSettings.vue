<template>
  <div class="aside-settings">
    <ul class="list-group bg-trans">
			<li class="list-header">
				<h4 class="text-thin">Account Settings</h4>
			</li>
			
			<!--Edit Toggle Button-->
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <li class="list-group-item" >
	    	<div class="pull-right">
        	<input 
        		type="checkbox" 
        		class="switchery bp-edit-toggle"
        		:checked="settings.editMode"
        		@change="setSetting('editMode', !settings.editMode)" 
        		
        	/>
        </div>
				<p>Edit All</p>
				<small class="text-muted">Right now edit mode is {{ editMode ? "on" : "off" }}.</small>
	    </li>
	    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
	    <!--End Edit toggle button-->
	    <!--Data Output Toggle Button-->
	    <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
	    <li class="list-group-item">
	    	<div class="pull-right">
        	<input 
        		type="checkbox" 
        		class="switchery bp-data-toggle" 
        		v-model="dataMode"
        		@change="setSetting('dataMode', dataMode)" 
        	/>
        </div>
				<p>Data Output</p>
				<small class="text-muted">Right now data view is {{ dataMode ? "on" : "off" }}.</small>
      </li>
      <!--~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~-->
      <!--End Edit toggle button-->

			<li class="list-group-item">
				<div class="pull-right">
					<input class="demo-switch" type="checkbox" checked>
				</div>
				<p>Show offline contact</p>
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small>
			</li>
			<li class="list-group-item">
				<div class="pull-right">
					<input class="demo-switch" type="checkbox">
				</div>
				<p>Invisible mode </p>
				<small class="text-muted">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</small>
			</li>
		</ul>

		<hr>

		<ul class="list-group bg-trans">
			<li class="list-header"><h4 class="text-thin">Public Settings</h4></li>
			<li class="list-group-item">
				<div class="pull-right">
					<input class="demo-switch" type="checkbox" checked>
				</div>
				Online status
			</li>
			<li class="list-group-item">
				<div class="pull-right">
					<input class="demo-switch" type="checkbox" checked>
				</div>
				Show offline contact
			</li>
			<li class="list-group-item">
				<div class="pull-right">
					<input class="demo-switch" type="checkbox">
				</div>
				Show my device icon
			</li>
		</ul>

		<hr>
		<h4 class="pad-hor text-thin">Task Progress</h4>
		<div class="pad-all">
			<p>Upgrade Progress</p>
			<div class="progress progress-sm">
				<div class="progress-bar progress-bar-success" style="width: 15%;"><span class="sr-only">15%</span></div>
			</div>
			<small class="text-muted">15% Completed</small>
		</div>
		<div class="pad-hor">
			<p>Database</p>
			<div class="progress progress-sm">
				<div class="progress-bar progress-bar-danger" style="width: 75%;"><span class="sr-only">75%</span></div>
			</div>
			<small class="text-muted">17/23 Database</small>
		</div>
  </div>
</template>

<script>
import { setSetting } from '../../../vuex/actions'
export default {
    name: 'aside-settings',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'aside-settings',
      	settings: this.$store.state.settings.all
      }
    },
    vuex:{
    	actions:{ 
    		setSetting
    	} 
    },
    methods:{
    	set(target, value)
    	{
    		console.log(target, value)
    	}
    },

    ready() 
    {

    }
  }
</script>

<style lang="stylus">
</style>