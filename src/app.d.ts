// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	interface Metadata {
		title: string;
		description?: string;
		url: string;
		imageSrc?: string;
		imageAlt?: string;
		twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
		twitterSite?: string;
		twitterCreator?: string;
		type?: string;
		robots?: 'index' | 'noindex' | 'follow' | 'nofollow';
	}
}

export {};
