export default async function(eleventyConfig) {
	eleventyConfig.addCollection("tagsList", (collectionApi) => {
		const tagsList = new Set();
		collectionApi.getAll().forEach((item) => {
			if (item.data.tags) {
				item.data.tags.map((tag) => tagsList.add(tag));
			}
		});
		return tagsList;
	});
}
