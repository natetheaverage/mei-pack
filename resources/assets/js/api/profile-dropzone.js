$(document).ready(function() {

    // DROPZONE
    // =================================================================
    // Require Dropzone
    // http://www.dropzonejs.com/
    // =================================================================
    Dropzone.options.myDropzone = {

        autoProcessQueue: true,
        headers: {"profileId" : document.getElementById("dropzoneParentId").getAttributeNode("value").value},

        // The setting up of the dropzone
        init: function() {
            var myDropzone = this;
            myDropzone.on("success", function(file, responseText) {
                var that = $(bosspos);
                console.log( that );
            });
        }

    }
});




