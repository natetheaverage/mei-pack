module.exports = {
    created(){
        var watchModes = this.$options.watchModes
        if (watchModes) {
            this.$watch("$root.editMode", function(res) {
                this.editMode = res;
            })
            this.$watch("$root.editAll", function(res) {
                this.editAll = res;
            })
            this.$watch("$root.dataMode", function(res) {
                this.dataMode = res;
            })
        }
    },
    ready() {
        
    },

}