import type { PageMetadata } from '@kyleulman/lib';
import type { PageLoad } from './$types';

export const load = (({ url }) => {
	const page: PageMetadata = {
		title: 'Welcome home!',
		description: 'An opinionated SvelteKit starter template with TypeScript & Tailwind.',
		url: url.href
	};

	return {
		page: page
	};
}) satisfies PageLoad;
