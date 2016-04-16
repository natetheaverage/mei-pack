import { getPublicSettings } from '../../vuex/getters.js'

export default {
    vuex:{
        getters:{ 
            settings: getPublicSettings
        },
    },
    created(){
        var changeTabTitle = this.$options.changeTabTitle
        if (changeTabTitle) {
            var host = this.settings.appName;
            var title = this.pageTitle;
            $("title").contents().last().remove();
            $('title').append(host+" | "+title);
            this.settings.viewTitle = title;
        }
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Created!", this.settings.logGood, this.pageTitle);
        }
    },
    ready() {
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Ready!", this.settings.logGood, this.pageTitle);
        }
    },
    beforeDestroy(){
        var logHooksToConsole = this.$options.logHooksToConsole
        if (logHooksToConsole) {
            console.log("%c<< %s.vue >> Destroying!", this.settings.logGood, this.pageTitle);
        }
    }

}