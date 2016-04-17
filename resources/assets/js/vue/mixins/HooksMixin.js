
export default {

    created(){
        var changeTabTitle = this.$options.changeTabTitle
        if (changeTabTitle) {
            var host = this.$root.settings.appName;
            var title = this.pageTitle;
            $("title").contents().last().remove();
            $('title').append(host+" | "+title);
            this.$root.settings.viewTitle = title;
        }
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Created!", this.$root.settings.logGood, this.pageTitle);
        }
    },
    ready() {
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Ready!", this.$root.settings.logGood, this.pageTitle);
        }
    },
    beforeDestroy(){
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Destroying!", this.$root.settings.logGood, this.pageTitle);
        }
    }

}