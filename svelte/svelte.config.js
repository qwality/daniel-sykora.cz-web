import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node'
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
		paths: {
			base: '/svelte'
		},
	}
};

export default config;
