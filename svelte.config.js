import adapterStatic from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import poppanatorSvg from '@poppanator/sveltekit-svg';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [preprocess({ postcss: true })],

  kit: {
    // adapter: adapter({ envConfig: { port: process.env.PORT } }),
    adapter: adapterStatic({ pages: 'build', assets: 'build', fallback: null }),
    
  },
    plugins: [sveltekit(), poppanatorSvg()]
};

export default config;
