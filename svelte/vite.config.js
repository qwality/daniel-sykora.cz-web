import { sveltekit } from '@sveltejs/kit/vite';
import svelteSVG from "vite-plugin-svelte-svg";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		sveltekit(),
		svelteSVG({
			svgoConfig: {}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true, // Set false to accept '.svg' without the '?component'
		}),
	]
};

export default config;
