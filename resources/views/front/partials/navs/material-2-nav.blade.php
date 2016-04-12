<div 
	class="app-nav"
	:class="$root.truth.settings.menuOpen ? 'side-menu-enter' : 'side-menu-leave'"
	v-if="$root.truth.settings.useSideMenu"
>
	<!-- :class="$root.truth.menuOpen ? 'slideInLeft' : 'slideOutLeft'" -->
	<mainmenu></mainmenu>
</div>