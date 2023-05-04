import { sveltekit } from "@sveltejs/kit/vite";
import type { UserConfig } from "vite";

const config: UserConfig = {
	plugins: [sveltekit()],
	build: {
		ssrManifest: false
	},
	ssr: {
		noExternal: ["ogl"]
	}
};

export default config;
