<script lang="ts">
	import { page } from '$app/stores';
	import Head from './Head.svelte';

	const content = {
		hero: {
			heading: 'Starter Kit',
			description: 'An opinionated SvelteKit starter template with TypeScript & Tailwind.'
		}
	};
</script>

<Head
	pageMetadata={{
		title: 'Get to production quicker',
		description: 'Be sure to write a unique description for each page.',
		url: $page.url.origin
	}}
/>

<h1>{content.hero.heading}</h1>
<p>{content.hero.description}</p>
