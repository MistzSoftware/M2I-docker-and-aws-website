<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link href="https://m2i-loremsite-bootstrap.s3.us-east-1.amazonaws.com/bootstrap-5.3.2-dist/css/bootstrap.min.css" rel="stylesheet" />
	<script src="https://m2i-loremsite-bootstrap.s3.us-east-1.amazonaws.com/bootstrap-5.3.2-dist/js/bootstrap.bundle.min.js"></script>
</svelte:head>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
	<div class="container">
		<a class="navbar-brand" href="/">Lorem Site</a>
		<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarNav">
			<ul class="navbar-nav ms-auto">
				<li class="nav-item">
					<a class="nav-link" href="/">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="/contact">Contact</a>
				</li>
			</ul>
		</div>
	</div>
</nav>

<main class="container my-5">
	{@render children()}
</main>

<footer class="bg-dark text-white text-center py-4 mt-5">
	<div class="container">
		<p>&copy; 2025 Lorem Site. All rights reserved.</p>
	</div>
</footer>
