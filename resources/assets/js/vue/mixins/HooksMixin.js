import setSetting from '../../vuex/actions'
export default {
    vuex:{
        actions:{ 
            setSetting
        } 
    },
    created(){
        
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
        var changeTabTitle = this.$options.changeTabTitle
        if (changeTabTitle) {
            var host = this.$root.settings.appName;
            var title = this.pageTitle;
            $("title").contents().last().remove();
            $('title').append(host+" | "+title);
        }
    },
    beforeDestroy(){
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Destroying!", this.$root.settings.logGood, this.pageTitle);
        }
    }

}