<script lang="ts">
	import Img from '$lib/components/markdown/img.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
	import { personalProjects } from '$lib/constants';

	// const { projects } = $page.data as PageData;
	const projects = personalProjects
</script>

<ul class="flex flex-col gap-2">
	{#each projects as project}
		<li
			class="h-28 hover:h-52 w-full group relative transition-all duration-300 ease-in-out rounded-lg overflow-hidden"
		>
			<a href="{project.url}">
				<Img
					alt="{project.title}'s thumbnail"
					src={project.image}
					class="w-full h-full bg-zinc-100 object-cover dark:bg-zinc-900"
				/>

				<div
					aria-hidden="true"
					class="absolute bottom-0 left-0 right-0 top-0 transition-colors duration-300 ease-in-out group-hover:bg-zinc-800/40"
				/>

				<div
					class="absolute bottom-0 left-0 translate-y-full p-6 text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0"
				>
					<Headline level="2" class="mb-1.5">{project.title}</Headline>
					<p class="text-sm">{project.description}</p>
				</div>
			</a>
		</li>
	{/each}
</ul>
