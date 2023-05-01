import type {
	PageMetadata,
	SharedMetadata
} from '@kyuisonline/workbench/dist/types';

export const sharedMetadata: SharedMetadata = {
	title: 'SvelteKit Starter',
	type: 'website',
	robots: 'all',
	image: {
		// TODO: Prepend your domain here
		src: 'https://starter.kyu.is/card-720.png',
		alt: 'Svelte logo.',
		width: '720',
		height: '720'
	},
	twitter: {
		card: 'summary'
	}
};

export const home: {
	metadata: PageMetadata;
	hero: { heading: string; detail: string };
} = {
	metadata: {
		title: 'Hello World!',
		description:
			'An opinionated SvelteKit template with TypeScript & Tailwind.',
		url: ''
	},
	hero: {
		heading: 'Hello World!',
		detail: 'An opinionated SvelteKit template with TypeScript & Tailwind.'
	}
};
