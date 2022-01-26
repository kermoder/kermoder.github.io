export var ptrHeader = {
    data: function(){
    	return {
    		mainTask : ""
    	};	
    },
    methods: {
        go: function(dest) {
            this.$router.push(dest);
        },
        home: function() {
            go("/");
        },
    },
    template: `
		<header>
            <nav class="navbar navbar-expand-md navbar-dark navbar-fixed-top bg-dark">
				<div class="container">
					<div class="navbar-header">
						<div class="navbar-brand">
							<a data-toggle="tab" v-on:click="go('/')" id="nav_home">Ptruth</a>
						</div>
					</div>
					<!-- <button class="navbar-toggler" type="button" 
							   data-toggle="collapse" 
							   data-target="#navbarNav" 
							   aria-controls="navbarNav" 
							   aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button> -->
					<div id="navbarNav" class="navbar-collapse collapse">
						<ul class="nav navbar-nav">
							<li><a v-on:click="go('cheatSheet')" id="nav_cheat">As a cheat sheet</a></li>
							<li><a v-on:click="go('youtube')" id="nav_theYoutubeChannel">As Youtube videos</a></li>
							<li><a v-on:click="go('paper')" id="nav_thePaper">As a paper</a></li>
							<!-- <li><a v-on:click="go('slogans')" id="nav_theSlogans">As slogans</a></li> -->
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
