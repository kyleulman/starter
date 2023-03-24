<script lang="ts">
	import { siteMetadata } from '../app-data';

	export let pageMetadata: Metadata;

	let title: string;
	const description = pageMetadata.description || siteMetadata.description;
	const url = pageMetadata.url || siteMetadata.url;
	const imageSrc = pageMetadata.imageSrc || siteMetadata.imageSrc;
	const imageAlt = pageMetadata.imageAlt || siteMetadata.imageAlt;
	const twitterCard = pageMetadata.twitterCard || siteMetadata.twitterCard;
	const twitterSite = pageMetadata.twitterSite || siteMetadata.twitterSite;
	const twitterCreator = pageMetadata.twitterCreator || siteMetadata.twitterCreator;
	const type = pageMetadata.type || siteMetadata.type;
	const robots = pageMetadata.robots;

	if (pageMetadata.title) {
		title = `${pageMetadata.title} - ${siteMetadata.title}`;
	} else {
		title = siteMetadata.title;
	}
</script>

<svelte:head>
	<title>{title}</title>
	<link rel="canonical" href={url} />
	<meta name="description" content={description} />
	{#if robots}<meta name="robots" content={robots} />{/if}

	<meta property="og:title" content={title} />
	<meta property="og:url" content={url} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={imageSrc} />
	<meta property="og:image:alt" content={imageAlt} />
	<meta property="og:type" content={type} />

	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:card" content={twitterCard} />
	<meta name="twitter:image" content={imageSrc} />
	<meta name="twitter:image:alt" content={imageAlt} />
	<meta name="twitter:site" content={'@' + twitterSite} />
	<meta name="twitter:creator" content={'@' + twitterCreator} />
</svelte:head>
