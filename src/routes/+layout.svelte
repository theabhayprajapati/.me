<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Nav from '../lib/components/nav/Nav.svelte';
</script>

<svelte:head>
	<script async src="https://cdn.splitbee.io/sb.js"></script>
</svelte:head>

<div class="relative flex min-h-screen flex-col">
	<Nav />

	<div class="relative mb-auto">
		<main class="mx-auto w-full max-w-screen-sm px-4">
			<slot />
		</main>
	</div>

	<Footer />
</div>
