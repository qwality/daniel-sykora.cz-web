import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// import path from 'path';

// import dynamicImport from 'vite-plugin-dynamic-import';
import svg from '@poppanator/sveltekit-svg'

export default defineConfig({
	plugins: [
		sveltekit(),
		svg(), // Options are optional
		// dynamicImport(),
	],
	// resolve: {
	// 	alias: {
	// 		'@': path.resolve(__dirname, './src/'),
	// 	}
	// }
});
