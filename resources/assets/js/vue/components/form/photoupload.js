module.exports = {
    
    template: '#photo-upload-template',

    props: ['post'],

    inherit: true,

    data: function () 
    {
      return {
        photoResource: this.$resource('api/images/upload'),
        photos: Dropzone,
      }
    },

    methods: {
        loadDropzone: function(){
            var form = this;
            this.photos = new Dropzone("#photos");
            Dropzone.options.photos = {
                //previewTemplate: $(".dz-file-preview"),
                dictDefaultMessage: 'Drop or click here to upload photos',
                acceptedFiles: 'image/*',
                uploadMultiple: false,
                thumbnailHeight: 100,
                thumbnailWidth: 100,
                paramName: "file",
                maxFilesize: 8,
                maxFiles: 2,
                parallelUploads: 2,
                autoProcessQueue: 'true',
            }
            this.photos.on("maxfilesexceeded", function(file) { this.removeFile(file); });
            this.photos.on("success", function(data,response){
                //console.log(response)
                form.post.photo = form.post.id + '/' +response;
            })  
        },
    },
    
    ready: function () 
    {
        this.loadDropzone()
    }
  }