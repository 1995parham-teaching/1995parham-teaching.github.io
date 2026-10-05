// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://teaching.1995parham.me",
	integrations: [sitemap()],
	// Inter is fetched at build time and self-hosted from /_astro, so the
	// page never calls out to Google Fonts. Rendered via <Font /> in Layout.
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Inter",
			cssVariable: "--font-inter",
			weights: ["400 700"],
			styles: ["normal"],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["system-ui", "sans-serif"],
		},
	],
});
