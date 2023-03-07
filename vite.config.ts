import path from 'path'
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			src: path.resolve("src")
		}
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
