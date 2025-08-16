---
date: "2025-08-16T18:43:11+09:00"
draft: false
title: "11ty Migration: Feature Parity"
tags: [dev, projects, blog]
layout: _post.html
---

{% raw %}
After managing to stick to at least one weekly post for a few months I've decided to reward myself with the true purpose of a personal blog - tinkering.

I started off on Hugo with the [Bear Cub](https://github.com/clente/hugo-bearcub) theme so I had no excuse to put off writing while I worked on 'essential' features, but now it's time to make my personal site a bit more _personal_.

I settled on 11ty as that seems to be what a lot of the people I read are using, and my brief interactions with Hugo's config/syntax didn't impress me (+ I just wanted a fresh start).

## Acceptance Criteria

- All existing content available, descending date order
- Basic layouts for indexes & posts
- Similar styling
- Category & tag pages, with tags being clickable links to their index
- RSS feed

## Existing Content

Getting the actual content migrated was dead easy, as planned having everrything in Markdown made it just drag and drop. I just migrated my frontmatter from '+++' to '---', double-quoted any titles with ':' in them and off I went.

The first stumbling block was building the site and realising no theme means needing to create an `index.html`, but the freedom of starting from a blank slate is part of why I'm doing this. Even when I started the blog originally with a set and forget template, I couldn't resist vendoring it and makings some 'improvements'.

I'm also adding manual index pages for each category. I assume these can be auto-generated somehow which I'll take advantage that for the tag pages, but as I don't have many categories I plan to give each of their indexes some customised styling.

Posts automatically being available in collections according to their tags '~Rails~ Magic' gave me a nice warm sense of familiarity, accompanied by the creeping dread of needing to modify that magic at some point. Luckily Liquid seems easier to work with than my last interaction with it on my ill-fated Jekyll wiki, or maybe my years of React experience since then have inured me to bullshit syntax.

A few `for .. in .. | reverse` loops later and I have visible content on pages again. I also succeeded in my first library customisation; adding a filter to prevent unsuspecting users needing to download every 'article' I've graced the world with on initial page load. Shoutout to [jeromecoupe](https://github.com/11ty/eleventy/issues/749#issuecomment-547835442) on a Github issue for the syntax to add a custom filter

```js
eleventyConfig.addFilter("limit", function (array, limit) {
  return array.slice(0, limit);
});
```

which I then spent far too long figuring out how to use because the example was using Jinja as the templating language

```
// Jinja example
{% set postslist = collections.posts | limit(3) %}

// Liquid syntax
{% assign allPosts = collections.all | reverse | limit: 5 %}

```

## Layouts

The examples in 11ty's docs were all in Nunjucks, but happily the other available templating languages are available too. Probably best to stick with one until absolutely necessary. Adding and using a `_base.html` was as simple as creating the file with a `{{ content }}` portal and setting `template: _base.html` on the homepage.

Before moving on to [layout chaining](https://www.11ty.dev/docs/layout-chaining/) for posts, I had to resolve some issues with... unexpected link behaviour. I wanted to wrap each article on my homepage in a link, making the whole card clickable, but the end result of

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

After that lesson in web standards and basic logic, nesting layouts turned out to be a breeze (just specify the parent layout as a layout for the child layout). On to CSS!

## Styling

I already had infinte ideas for cool styles to apply, so in the interests of not spending an entire week on this I strictly limited myself to:

- default font styles & background color
- post content is justified & limited to [~80 characters](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html)
- links look decent, but still underlined
- the nav header doesn't look terrible

You need to explicitly tell 11ty to watch your css files for some reason, which can be done with

```
eleventyConfig.addWatchTarget(`${pathToFile}`);
```

According to [swyx](https://www.swyx.io/line-lengths) `ch` is a decent approximation for character count, so I set `max-width: 70ch` on all `main` elements. I also copied the rest of the content styles from [100 Bytes of CSS](https://www.swyx.io/css-100-bytes) on that blog since they looked like a decent starting point, though I applied them to `main` rather than `html` since I want the freedom to style everything else however I want.

## Return of the Layouts

At this point I realised there was a lot of duplicated code on the index pages for each collection, so it would be best to autogenerate them and handle customisation through custom stylesheets. I implemented per-page stylesheets by adding a `stylesheets` property to my frontmatter which contains an array of strings, then using that inside the head of my base layout like so:

```
  <head>
    ...
    {% if stylesheets %} {% for stylesheet in stylesheets %}
    <link rel="stylesheet" href="/css/{{ stylesheet }}.css" />
    {% endfor %} {% endif %}
    ...
  </head>

```

While it was easy enough to follow [11ty's guide](https://www.11ty.dev/docs/quicktips/tag-pages/) and generate some tag pages, it was not obvious that these pages can't be paginated by default (e.g. the `size` frontmatter property does nothing here). I found a promising looking [blog post](https://desmondrivet.com/2022/03/23/eleventy-pagination) by Desmond Rivet, but since it's pretty complex I'll leave it for a time where I actually have enough posts to require pagination within tags.

One place I don't need pagination is my RSS feed, which is up next.

## RSS

Since there's a [plugin](https://www.11ty.dev/docs/plugins/rss/) for RSS and I just need to get it up and running for now, I used that. For once in my life the setup was exactly as simple as advertised, nice job plugin authors. And with that, step one of the migration is done! Woo! ~6 hours all up to get it to a point where I felt like I could deploy it instead of the existing version, not too bad.

Next post will be either on styling or paginating the tag pages, depending on what I feel like at the time.

{% endraw %}
