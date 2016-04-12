////////////////////////////////////////////////////////////////
/// Profile Pic Upload Model
/// Requires: flysystem/filesystem, bootbox/alerts
/// ** Out dated to VUE **
////////////////////////////////////////////////////////////////
function open_file_upload_window(id, location) {
    bootbox.dialog({
        className: "modal-primary",
        title: 'Upload your '+location,
        message: '<div class="row">  ' +
        '<div class="col-md-12" > ' +
        '<iframe name="Uploader" src="http://bosspos1.5/upload/'+location+'/'+ id + '" height="375" width="100%">Your browser does not support frames.</iframe>' +
        '</div>  </div>'
    });
}

