

<!-- FOOTER -->
<!--===================================================-->
<footer id="footer">
 
	<!-- Visible when footer positions are fixed -->
	<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
	<div class="show-fixed pull-right">
		<ul class="footer-list list-inline">
			<li>
				<p class="text-sm">SEO Proggres</p>
				<div class="progress progress-sm progress-light-base">
					<div style="width: 80%" class="progress-bar progress-bar-danger"></div>
				</div>
			</li>

			<li>
				<p class="text-sm">Online Tutorial</p>
				<div class="progress progress-sm progress-light-base">
					<div style="width: 80%" class="progress-bar progress-bar-primary"></div>
				</div>
			</li>
			<li>
				<button class="btn btn-sm btn-dark btn-active-success">Checkout</button>
			</li>
		</ul>
	</div>



	<!-- Visible when footer positions are static -->
	<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
	<div class="hide-fixed pull-right pad-rgt">Currently v0.3</div>



	<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
	<!-- Remove the class name "show-fixed" and "hide-fixed" to make the content always appears. -->
	<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

	<p class="pad-lft">&#0169; 2015 BossPos  -  editMode: @{{ $root.editMode }}</p>



</footer>


<!--JAVASCRIPT-->
<!--=================================================-->

<!--jQuery [ REQUIRED ]-->
<script src="js/jquery-2.1.1.min.js"></script>


<!--BootstrapJS [ RECOMMENDED ]-->
<script src="js/bootstrap.min.js"></script>


<!--Fast Click [ OPTIONAL ]-->
<script src="{!! asset('plugins/fast-click/fastclick.min.js') !!}"></script>


<!--BootBox Modual-->
<script src="{!! asset('plugins/bootbox/bootbox.min.js') !!}"></script>


<!--AutoSize -->
<script src="{!! asset('plugins/autosize/autosize.min.js') !!}"></script>


<!--Nifty Admin [ RECOMMENDED ]-->
{{-- <script src="{!! asset('js/nifty2.min.js') !!}"></script> --}}
<script src="{!! asset('js/nifty.js') !!}"></script>


<!--SweetAlert-->
<script src="{!! asset('plugins/sweetalert/dist/sweetalert.min.js') !!}"></script>


<!--Skycons [ OPTIONAL ]-->
<script src="{!! asset('plugins/skycons/skycons.min.js') !!}"></script>


<!--Switchery [ OPTIONAL ]-->
<script src="{!! asset('plugins/switchery/switchery.min.js') !!}"></script>


<!--Bootstrap Select [ OPTIONAL ]-->
<script src="{!! asset('plugins/bootstrap-select/bootstrap-select.min.js') !!}"></script>

<!--Chosen [ OPTIONAL ]-->
<script src="{!! asset('plugins/chosen/chosen.jquery.min.js') !!}"></script> 


<!-- Vue Compiled-->
 <script  src="{!! asset('js/bp-app.js') !!}"></script>

 
<!--Demo script [ DEMONSTRATION ]-->
<script src="{!! asset('js/demo/nifty-demo.js') !!}"></script>


<!--Bosspos  [ Local editing scripts ]-->
{{-- <script src="{!! asset('js/bossposEditing.js') !!}"></script> --}}


<!--Bosspos  [ Local editing scripts ]-->
{{-- <script src="{!! asset('js/bp-upload.js') !!}"></script> --}}




<!--Socket.io  [ Broadcasting server ]
<script src="http://192.168.10.10:3000/socket.io/socket.io.js"></script>
<script>
	var socket = io.connect('http://192.168.10.10:3000');
	var counter = socket.on('newMessage', function(){
		$(bosspos.messageCounter++);
	}).on('newConversation', function(){
        $(bosspos.conversationCounter++);

    })
</script>-->



<!--JAVASCRIPT-->
<!--=================================================-->


<!--===================================================-->
<!-- END FOOTER -->