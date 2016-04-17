<div 
	class="app-aside pad-all bg-off-white mtrl-fixed mtrl-raised"
	:class="pubSettings.asideOpen ? 'aside-menu-enter' : 'aside-menu-leave'"
	v-if="settings.asideOn"
>
	<div v-if="true" class="waffel waffel-card">
		<h1>Bang! Aside</h1>
		<!-- <h2>Bang</h2>
		<p>Bang</p>
		<ul>
			<li>one</li>
			<li>two</li>
			<li>three</li>
		</ul> -->
	</div>
</div>