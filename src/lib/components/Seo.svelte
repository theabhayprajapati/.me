<script lang="ts">
	import { page } from '$app/stores';
	import { SITE_URL } from '$lib/constants';

	export let title = 'Abhay Prajapati / Software Developer.';
	export let description = "I'm a software developer based in India. I specialize in designing, building, and sometimes rescuing softwares.";
	export let image = SITE_URL + '/images/banner.png';
	export let type = 'website';
	export let date: string | undefined = undefined;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="robots" content="follow, index" />
	<meta content={description} name="description" />
	<meta property="og:url" content="{SITE_URL}{$page.url.pathname}" />
	<link rel="canonical" href="{SITE_URL}{$page.url.pathname}" />
	<meta property="og:type" content={type} />
	<meta property="og:site_name" content="Abhay" />
	<meta property="og:description" content={description} />
	<meta property="og:title" content={title} />
	<meta property="og:image" content={image} />
	<meta property="og:image:alt" content="Abhay Banner" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@abhayprajapati_" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
	{#if date}
		<meta property="article:published_time" content={date} />
	{/if}

	<link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />
</svelte:head>
