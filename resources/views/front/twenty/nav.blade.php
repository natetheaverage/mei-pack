<div 
	class="app-nav"
	:class="$root.settings.menuOpen ? 'side-menu-enter' : 'side-menu-leave'"
	v-if="$root.settings.primaryOn"
>
	<!-- :class="$root.truth.menuOpen ? 'slideInLeft' : 'slideOutLeft'" -->
	<mainmenu></mainmenu>
</div>