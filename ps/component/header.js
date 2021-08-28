export var ptrHeader = {
    data: function(){
    	return {
    		mainTask : ""
    	};	
    },
    methods: {
	cheatSheet: function() {
	    go("/cheatSheet");
	},
	go: function(dest) {
	    this.$router.push(dest);
	},
	home: function() {
	    go("/");
	},
	who: function() {
	    go("/who");
	},
	what: function() {
	    go("/what");
	},
	why: function() {
	     go("/why");
	}
    },
    template: `
		<header>
			<nav class="navbar navbar-default navbar-fixed-top">
				<div class="container">
					<div class="navbar-header">
						<div class="navbar-brand">
							<a data-toggle="tab" v-on:click="go('/')" id="nav_home">Ptruth</a>
						</div>
					</div>
					<div id="navbar" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li><a v-on:click="go('cheatSheet')" id="nav_cheat">As a cheat sheet</a></li>
							<li><a v-on:click="go('youtube')" id="nav_theYoutubeChannel">As a Youtube channel</a></li>
							<li><a v-on:click="go('paper')" id="nav_thePaper">As a paper</a></li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li><a id="nav_what" v-on:click="go('/what')" >What</a></li>
							<li><a id="nav_why" v-on:click="go('/why')" >Why</a></li>
							<li><a id="nav_who" v-on:click="go('/who')" >Who</a></li>
						</ul>
					</div><!--/.nav-collapse -->
				</div>
			</nav>
		</header>`
};
