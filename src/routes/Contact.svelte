<script>
	import Headline from '$lib/components/nav/Headline.svelte';
	import { EMAIL } from '$lib/constants';
</script>

<section>	 
	<div class="flex items-center gap-6"> 
		<a href="mailto:{EMAIL}" class="font-medium text-zinc-500 hover:underline dark:text-zinc-400">
			{EMAIL}
		</a>
	</div>
</section>
