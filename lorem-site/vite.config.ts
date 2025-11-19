console.log("VITE CONFIG LOADED");
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	build: {
		target: "esnext"  // or "es2022"
	},
	plugins: [sveltekit()]
});
