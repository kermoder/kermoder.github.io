import { ptrHeader } from '../component/header.js';
import { ptrFooter } from '../component/footer.js';
import { cheatSheet} from '../component/cheatSheet.js';
import { paper }     from '../component/paper.js';
import { home }      from '../component/home.js';
import { youtube }   from '../component/youtube.js';
import { why }       from '../component/why.js';
import { what }      from '../component/what.js';
import { who }       from '../component/who.js';
import { definition} from '../component/definition.js';

export var ptr = ptr || {};

const routes = [
    { path: "/", 
      component: home
    },
    { path: "/cheatSheet", 
      component: cheatSheet
    },
    { path: "/paper", 
      component: paper
    },
    { path: "/youtube", 
      component: youtube
    },
    { path: "/why", 
      component: why
    },
    { path: "/what", 
      component: what
    },
    { path: "/who", 
      component: who
    },

];

var router = new VueRouter({
    routes: routes
});

ptr.init = function(){

    ptr.vm = new Vue({
	el: '#app',
      	data: {
      	    renderCount: 0
      	},
      	components: {
      	    'ptr-header': ptrHeader,
	    'home' : home,
	    'why'  : why,
	    'what' : what,
	    'who'  : who,
	    'cheatSheet' : cheatSheet,
	    'paper': paper,
	    'definition' : definition,
      	    'ptr-footer': ptrFooter
      	},
      	create : function() {

      	},
	// vuetify: new Vuetify(),
	router: router
    });
    
};
