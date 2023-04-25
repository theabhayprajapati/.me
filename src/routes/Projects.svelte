<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';

	import Description from '$lib/components/Description.svelte';
	import Headline from '$lib/components/nav/Headline.svelte';
  import { personalProjects } from '$lib/constants';

	
	// const data = $page.data as PageData;
	// const projects = data.projects.slice(0, 3); // Only show 3 projects
	const projects = personalProjects
	let isHovered = false;
  
  function toggleHover() {
    isHovered = !isHovered;
  }
</script>

<section class="flex flex-col gap-4">
	<div class="mb-6 flex flex-col">
		<Headline level="2" class="mb-2.5">Some Of My Projects</Headline>
		<Description>
			Here are some of my projects that I have worked on.
		</Description>	
		</div>

	<!-- grid md:cos2 else grid cols1 -->
	<!-- <ul class="flex flex-col gap-2"> -->
	<ul class="grid md:grid-cols-2 gap-8">
		{#each projects as project}
		<div class="relative">
			<div
			  class="bg-cover bg-center h-64 rounded-lg overflow-hidden transform transition duration-300 ease-in-out hover:scale-105 hover:border hover:border-slate-100 cursor-pointer"
			  style="background-image: url('{project.image}')"
			  on:mouseenter={toggleHover}
			  on:mouseleave={toggleHover}
			>
			  <div class="absolute inset-0 bg-black opacity-40"></div>
			  <div class="absolute inset-0 flex items-center justify-center"> 
				<div class="text-center">
				  <h2 class="text-xl font-bold text-white  tracking-wide">
					{project.title}
				  </h2>
				  
			  </div>
			</div>
			 
		  </div>
		  </div>	
		{/each}
	</ul>
	<a href="/projects" class="text-sm text-zinc-500 hover:underline dark:text-zinc-400">
		...and much more!
	</a>
</section>
