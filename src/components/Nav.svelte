<script>
	export let segment;
	let isOpen = false
</script>

<nav class="navbar" role="navigation" aria-label="main navigation">
	<div class="navbar-brand">
		<a href="/" class="navbar-item">
			<img class="is-rounded" src="covid-logo.jpg" alt="covid-logo">
		</a>
		<span
			class="navbar-burger"
			class:is-active={isOpen}
			on:click={() => isOpen = !isOpen}
			aria-label="menu"
			aria-expanded="false"
		>
			<span aria-hidden="true" />
			<span aria-hidden="true" />
			<span aria-hidden="true" />
		</span>
	</div>
	<div class="navbar-menu" class:is-active={isOpen}>
		<div class="navbar-start">
			<a 
				href="/" 
				class="navbar-item" 
				class:is-active={segment === undefined}
			>Home</a>
			<a 
				href="/about" 
				class="navbar-item" 
				class:is-active={segment === 'about'}
			>About</a>
		</div>
	</div>
</nav>

<style>
	@media(min-width: 769px) {
		nav {
			border-bottom: 1px solid gray;
		}
	}
</style>
