const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy ('src/css');
    eleventyConfig.addPassthroughCopy ('src/images');
    eleventyConfig.addPassthroughCopy ('src/fonts');
    eleventyConfig.addPassthroughCopy ('src/admin');

    // Custom Collection for Blog Posts
    eleventyConfig.addCollection("post", function(collectionApi) {
        return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
    });

    eleventyConfig.addFilter("readableDate", dateObj => DateTime.fromJSDate(dateObj).toFormat("dd LLL yyyy"));
    eleventyConfig.addFilter("isoL", dateObj => DateTime.fromJSDate(dateObj).toFormat("yyyy-LL-dd"));

    eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

    return {
        markdownTemplateEngine: 'njk',
        dir: {
            input: 'src',
            output: 'public'
        },
    };
};