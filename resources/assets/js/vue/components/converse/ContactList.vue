<template>
  <div class="contact-list">
    <h4 class="pad-hor text-thin">
			<span class="pull-right badge badge-warning">3</span> Family
		</h4>

		<!--Family-->
		<div class="list-group bg-trans">
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av2.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Stephen Tran</div>
					<span class="text-muted">Availabe</span>
				</div>
			</a>
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av4.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Brittany Meyer</div>
					<span class="text-muted">I think so</span>
				</div>
			</a>
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av3.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Donald Brown</div>
					<span class="text-muted">Lorem ipsum dolor sit amet.</span>
				</div>
			</a>
		</div>


		<hr>
		<h4 class="pad-hor text-thin">
			<span class="pull-right badge badge-info">4</span> Friends
		</h4>

		<!--Friends-->
		<div class="list-group bg-trans">
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av5.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Betty Murphy</div>
					<span class="text-muted">Bye</span>
				</div>
			</a>
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av6.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Olivia Spencer</div>
					<span class="text-muted">Thank you!</span>
				</div>
			</a>
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av4.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Sarah Ruiz</div>
					<span class="text-muted">2 hours ago</span>
				</div>
			</a>
			<a href="#" class="list-group-item">
				<div class="media-left">
					<img class="img-circle img-xs" src="/img/avatars/av3.png" alt="Profile Picture">
				</div>
				<div class="media-body">
					<div class="text-lg">Paul Aguilar</div>
					<span class="text-muted">2 hours ago</span>
				</div>
			</a>
		</div>

		<hr>
		<h4 class="pad-hor text-thin">
			<span class="pull-right badge badge-success">Offline</span> Works
		</h4>

		<!--Works-->
		<div class="list-group bg-trans">
			<a href="#" class="list-group-item">
				<span class="badge badge-purple badge-icon badge-fw pull-left"></span> Joey K. Greyson
			</a>
			<a href="#" class="list-group-item">
				<span class="badge badge-info badge-icon badge-fw pull-left"></span> Andrea Branden
			</a>
			<a href="#" class="list-group-item">
				<span class="badge badge-pink badge-icon badge-fw pull-left"></span> Lucy Moon
			</a>
			<a href="#" class="list-group-item">
				<span class="badge badge-success badge-icon badge-fw pull-left"></span> Johny Juan
			</a>
			<a href="#" class="list-group-item">
				<span class="badge badge-danger badge-icon badge-fw pull-left"></span> Susan Sun
			</a>
		</div>
  </div>
</template>

<script>
export default {
    name: 'contact-list',
    changeTabTitle: false,
    logHooksToConsole: true,
    watchMode: true,
    data() {
      return {
      	pageTitle: 'contact-list',

      }
    },

    methods: {

    },

    ready() {

    }
  }
</script>

<style lang="stylus">
</style>