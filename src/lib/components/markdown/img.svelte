<script lang="ts">
	import clsx from 'clsx';

	export let width: number | undefined = undefined;
	export let height: number | undefined = undefined;
	export let src: string;
	export let alt: string;
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<img {width} {height} {src} {alt} loading="lazy" class={clsx('rounded-lg', $$restProps.class)} />
