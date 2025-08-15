---
date: "2025-08-16T18:43:11+09:00"
draft: false
title: "11ty Migration: Feature Parity"
tags: [dev, projects, blog]
---

{% raw %}
After managing to stick to at least one weekly post for a few months I've decided to reward myself with the true purpose of a personal blog - having an excuse to tinker with new stuff.

I started off on Hugo with the [Bear Cub](https://github.com/clente/hugo-bearcub) theme so I had no excuse to put off writing while I worked on 'essential' features, but now it's time to make my personal site a bit more _personal_.

I settled on 11ty as that seems to be what a lot of the people I read are using, and my brief interactions with Hugo's config/syntax didn't impress me (+ I just wanted a fresh start).

## Acceptance Criteria

- All existing content available, descending date order
- Basic layouts for homepage, indexes & posts
- Category & tag pages, with tags being clickable links to their index
- Similar styling
- RSS feed

## Existing Content

Getting the actual content migrated was dead easy, as planned having everrything in Markdown made it just drag and drop. I just migrated my frontmatter from '+++' to '---', double-quoted any titles with ':' in them and off I went.

The first stumbling block was building the site and realising no theme means needing to create an `index.html`, but the freedom of starting from a blank slate is part of why I'm doing this. Even when I started the blog originally with a set and forget template, I couldn't resist vendoring it and makings some 'improvements'.

I'm also adding manual index pages for each category. I assume these can be auto-generated somehow which I'll take advantage that for the tag pages, but as I don't have many categories I plan to give each of their indexes some customised styling.

Posts automatically being available in collections according to their tags '~Rails~ Magic' gave me a nice warm sense of familiarity, accompanied by the creeping dread of needing to modify that magic at some point. Luckily Liquid seems easier to work with than my last interaction with it on my ill-fated Jekyll wiki, or maybe my years of React experience since then have inured me to bullshit syntax.

A few `for .. in .. | reverse` loops later and I have visible content on pages again. I also succeeded in my first library customisation; adding a filter to prevent unsuspecting users needing to download every 'article' I've graced the world with on initial page load. Shoutout to [jeromecoupe](https://github.com/11ty/eleventy/issues/749#issuecomment-547835442) on a Github issue for the custom filter

```js
eleventyConfig.addFilter("limit", function (array, limit) {
  return array.slice(0, limit);
});
```

which I then spent far too long figuring out how to use because the example was using Jinja as the templating language

```
// Jinja example
{% set postslist = collections.posts | limit(3) | escape %}

// Liquid syntax
{% assign allPosts = collections.all | reverse | limit: 5 | escape %}

```

## Layouts

The examples in 11ty's docs were all in Nunjucks, but happily the other available templating languages are available too. Probably best to stick with one until absolutely necessary. Adding and using a `_base.html` was as simple as creating the file with a `{{ content }}` portal and setting `template: _base.html` on the homepage.

Before moving on to template chaining for other pages, I had to resolve some issues with... unexpected link behaviour. I wanted to wrap each article on my homepage in a link, making the whole card clickable, but the end result of

```
{%- for post in allPosts -%}
<a href="{{ post.url }}">
  <article>
    <h2>{{ post.data.title }}</h2>
    <p>{{ post.content | truncatewords: 100 }}</p>
  </article>
</a>
{%- endfor -%}
```

Was a bunch of empty links floating above headings, followed by it finally working as expected for the last two. As it turns out [nesting links](https://css-tricks.com/nested-links/) is unsurprisingly not allowed, and the first few posts had links in their first hundred words of content. I decided making the whole card a clickable link was a dumb idea anyway and went back to just the heading as a link.

{% endraw %}
