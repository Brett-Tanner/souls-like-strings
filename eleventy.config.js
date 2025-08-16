/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

import { feedPlugin } from "@11ty/eleventy-plugin-rss";

export default async function(eleventyConfig) {
	eleventyConfig.setLayoutsDirectory("_layouts");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addWatchTarget("css");

	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss",
		outputPath: "/feed.xml",
		collection: {
			name: "all",
			limit: 10,
		},
		metadata: {
			language: "en",
			title: "Souls Like Strings",
			subtitle: "Brett's scribblings on programming, gaming and life",
			base: "https://souls-like-strings.brett-tanner.dev/",
			author: {
				name: "Brett Tanner",
				email: "",
			},
		},
	});

	eleventyConfig.addCollection("tagsList", (collectionApi) => {
		const tagsList = new Set();
		collectionApi.getAll().forEach((item) => {
			if (item.data.tags) {
				item.data.tags.map((tag) => tagsList.add(tag));
			}
		});
		return Array.from(tagsList);
	});
	// I'm commiting to the first tag always being the collection
	eleventyConfig.addCollection("collectionList", (collectionApi) => {
		const collectionsList = new Set();
		collectionApi.getAll().forEach((item) => {
			if (item.data.tags) {
				collectionsList.add(item.data.tags[0]);
			}
		});
		return collectionsList;
	});
}
