<div 
	class="app-nav"
	:class="pubSettings.primaryOpen ? 'primary-menu-enter' : 'primary-menu-leave'"
	v-if="settings.primaryOn"
>
	<mainmenu></mainmenu>
</div>