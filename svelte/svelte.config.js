import adapter from '@sveltejs/adapter-auto';
// import svg from 'vite-plugin-svelte-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		// vite: {
		// 	plugins: [
		// 		svg()
		// 	]
		// }
	}
};

export default config;
