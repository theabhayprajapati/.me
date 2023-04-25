<script lang="ts">
	import Headline from '$lib/components/nav/Headline.svelte';
</script>

<section>
	<Headline level="2" class="mb-3">Short Bio</Headline>
	<div class="flex flex-row gap-5">
		<p class="w-full dark:text-zinc-400">
			Hey 👋, I'm Abhay Prajapati
			<br />

		</p>

		<div
			class="h-20 w-20 flex-none overflow-hidden rounded-full ring-zinc-300 transition-shadow duration-300 hover:ring-[3px] dark:ring-zinc-700"
		>
			<img loading="lazy" alt="Profile" src="/images/profile_pic.jpg" class="grayscale" />
		</div>
	</div>
</section>
