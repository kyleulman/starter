<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<heading>
	<h1>{data.content.hero.heading}</h1>
	<p>{@html data.content.hero.detail}</p>
</heading>
