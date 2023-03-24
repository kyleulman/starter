<script lang="ts">
	import { page } from '$app/stores';
	import { Head } from '@kyleulman/lib';
	import '../app.css';

	export let data;
</script>

<Head page={$page.data.page} site={data.site} />

<slot />
