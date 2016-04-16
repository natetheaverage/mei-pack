module.exports = {
    created(){
        var watchModes = this.$options.watchMode
        if (watchModes) {
            this.$watch("$root.pubSettings.editMode", function(res) {
                this.editMode = res;
            })
            this.$watch("$root.pubSettings.editAll", function(res) {
                this.editAll = res;
            })
            this.$watch("$root.pubSettings.dataMode", function(res) {
                this.dataMode = res;
            })
        }
    },

}