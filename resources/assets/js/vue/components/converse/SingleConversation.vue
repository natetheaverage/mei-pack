<template>
<!-- VIEW MESSAGE -->
<!--===================================================-->
<div class="panel panel-default panel-left">
    <div class="panel-body">
        <div class="row">
            <div class="col-sm-7">

                <!--Sender Information-->
                <div class="media">
                    <span class="media-left">
                        <img 
                            src="/img/av4.png" 
                            class="img-circle img-sm" 
                            alt="Profile Picture"
                        >
                    </span>
                    <div class="media-body">
                        <div class="text-bold">Lisa D. Smith</div>
                        <small class="text-muted">lisa.aqua@boss-pos.com</small>
                    </div>
                </div>
            </div>
            <hr class="hr-sm visible-xs">
            <div class="col-sm-5 clearfix">

                <!--Details Information-->
                <div class="pull-right text-right">
                    <p class="mar-no"><small class="text-muted">Monday 23, Jan 2014</small></p>
                    <a href="#">
                        <strong>Holiday.zip</strong>
                        <i class="fa fa-paperclip fa-lg fa-fw"></i>
                    </a>
                </div>
            </div>
        </div>
        <div class="row pad-ver">
            <div class="col-xs-7">

                <!--Mail toolbar-->
                <button class="btn btn-default"><i class="fa fa-print"></i></button>
                <div class="btn-group btn-group">
                    <button class="btn btn-default"><i class="fa fa-exclamation-circle"></i></button>
                    <button class="btn btn-default"><i class="fa fa-trash"></i></button>
                </div>
            </div>
            <div class="col-xs-5 clearfix">
                <div class="pull-right">

                    <!--Reply & forward buttons-->
                    <div class="btn-group btn-group">
                        <a class="btn btn-default" href="#">
                        <i class="fa fa-reply"></i>
                        </a>
                        <a class="btn btn-default" href="#">
                        <i class="fa fa-share"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!--Message-->
        <!--===================================================-->
        <div class="pad-all bord-all bg-gray-light">
            Hey John,
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br><br>
            <blockquote class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </blockquote>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            <br><br>
            Regards,
            <br><br>
            <strong>Lisa D. Smith</strong><br>
            2834 Street Name<br>
            San Francisco, CA<br>
        </div>
        <!--===================================================-->
        <!--End Message-->

        <!-- Attach Files-->
        <!--===================================================-->
        <div class="pad-ver">
            <h4><i class="fa fa-paperclip fa-fw"></i> Attachments <span>(2)</span></h4>

            <ul class="mail-attach-list list-ov">
                <li class=" clearfix">

                    <!--Download button-->
                    <div class="mail-attach-btn"><a href="#" class="btn btn-purple btn-sm">Download</a></div>

                    <!--File information-->
                    <div class="mail-attach-file">
                        <span class="mail-attach-label">
                            <span class="label label-info text-uppercase">Images</span>
                        </span>
                        <div class="media-body">
                            <div class="text-bold"><a href="#">IMG_007.jpg</a></div>
                            <small class="text-muted">(15 KB)</small>
                        </div>
                    </div>
                </li>
                <li class="clearfix">

                    <!--Download button-->
                    <div class="mail-attach-btn"><a href="#" class="btn btn-purple btn-sm">Download</a></div>

                    <!--File information-->
                    <div class="mail-attach-file">
                        <span class="mail-attach-label">
                            <span class="label label-warning  text-uppercase">Video</span>
                        </span>
                        <div class="media-body">
                            <div class="text-bold"><a href="#">VID_007.mp4</a></div>
                            <small class="text-muted">(178 MB)</small>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <!--===================================================-->
        <!-- End Attach Files-->


        <!--Quick reply : Summernote Placeholder -->
        <div id="demo-mail-textarea" class="mail-message-reply bg-gray-light">
            <strong>Reply</strong> or <strong>Forward</strong> this message...
        </div>

        <!--Send button-->
        <div class="pad-ver">
            <button id="demo-mail-send-btn" type="button" class="btn btn-primary hide">
                <span class="fa fa-paper-plane"></span>
                Send Message
            </button>
        </div>
    </div>
</div>
<!--===================================================-->
<!-- END VIEW MESSAGE -->
</template>
<script>
export default {
    name: 'singleConversation',
    changeTabTitle: true,
    logHooksToConsole: true,
    watchMode: true,
    data() {
        return {
            pageTitle: 'The Title',
        }
    },
}
</script>
<style lang='stylus'>
</style>