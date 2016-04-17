module.exports = {
    created(){
        var watchModes = this.$options.watchMode
        if (watchModes) {
            this.$watch("$root.settings.editMode", function(res) {
                this.editMode = res;
            })
            this.$watch("$root.settings.editAll", function(res) {
                this.editAll = res;
            })
            this.$watch("$root.settings.dataMode", function(res) {
                this.dataMode = res;
            })
        }
    },

}