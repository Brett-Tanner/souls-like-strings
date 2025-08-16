/** @param {import("@11ty/eleventy").UserConfig} eleventyConfig */

export default async function (eleventyConfig) {
	eleventyConfig.setLayoutsDirectory("_layouts");
	eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addWatchTarget("css");

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

	eleventyConfig.addFilter("limit", (array, limit) => {
		return array.slice(0, limit);
	});
}
