/*
*  Dropzone module built to handel compliance calculator file uploads
*  allows files to be dragged to the page for uploading than sends the
*  processed return to an object on the page.
*
*   resources/assets/js/ui
 */
export var InventoryDropzone = (function () {

    var newDropzoneUpload = 'waiting for file...';
    var previewTemplate = '';
    var inventoryDropzoneTemplate = function () {
        var previewNode = document.querySelector("#template");
        previewNode.id = "";
        previewTemplate = previewNode.parentNode.innerHTML;
        previewNode.parentNode.removeChild(previewNode);
    }

    var myDropzone = function () {
        //console.log(this);
        console.log(Vue.Calculator);
        new Dropzone(document.body, { // Make the whole body a dropzone
            headers: {'X-CSRF-TOKEN': document.querySelector('#token').getAttribute('value')},
            url: "/inventory/compliance/upload", // Set the url
            thumbnailWidth: 80,
            thumbnailHeight: 80,
            parallelUploads: 20,
            previewTemplate: previewTemplate,
            autoQueue: true,
            previewsContainer: "#dropzone-previews",
            newDropzoneUpload: 'waiting for file...',
            //clickable: ".fileinput-button" // Need to define
            init: function () {
                this.on("addedfile", function (file) {
                    $.niftyNoty({
                        type: 'info',
                        container: 'page'
                    });
                    var newDownload = $('#dropzone-previews .file-row')
                    $('#page-alert').find('.media-body').replaceWith(newDownload);
                });

                this.on("success", function (file, response) {
                    $("#page-alert").find(".close").trigger("click");
                    var fileName = file.name;
                    console.log(Vue);
                    newDropzoneUpload = metrcCsv2Json(response, fileName)


                });

                // Update the total progress bar
                this.on("totaluploadprogress", function (progress) {
                    //document.querySelector("#total-progress .progress-bar").style.width = progress + "%";
                });

                this.on("sending", function (file) {
                    // Show the total progress bar when upload starts
                    //document.querySelector("#total-progress").style.opacity = "1";
                    // And disable the start button
                    //file.previewElement.querySelector(".start").setAttribute("disabled", "disabled");
                });

                 // Hide the total progress bar when nothing's uploading anymore
                this.on("queuecomplete", function (progress) {
                    //document.querySelector("#total-progress").style.opacity = "0";
                });

                // Setup the buttons for all transfers
                // The "add files" button doesn't need to be setup because the config
                // `clickable` has already been specified.
                /*document.querySelector("#actions .start").onclick = function() {
                 this.enqueueFiles(this.getFilesWithStatus(Dropzone.ADDED));
                 };
                 document.querySelector("#actions .cancel").onclick = function() {
                 this.removeAllFiles(true);
                 };*/
            }
        });
    };

    return {
        inventoryDropzoneTemplate: inventoryDropzoneTemplate,
        previewTemplate: previewTemplate,
        myDropzone: myDropzone,
        newDropzoneUpload: newDropzoneUpload
    };
})();