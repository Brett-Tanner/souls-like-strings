---
date: "2025-09-01T10:00:29+09:00"
title: "2025 August Retro"
tags: [strings, retro]
layout: _post.html
---

## What went well

### Projects

- Migrated this blog to 11ty
  - started adding more of my own to it
  - and started producing a lot more content, not just the weekly TWIL
- Added a 'Links' section to TWIL posts and found a lot of great sites for my RSS feed
  - Feels like I have a steady flow of quality articles to read that I'm pretty happy with now
  - Once you get it set up RSS is so much better than trusting the algorithm, and blogs I like linking to blogs they like makes that much easier
- Finally got around to figuring out how to get our existing spending data off the Fly.io postgres instance
  - gives me motivation to work on the new spending tracker again
  - initially thought I should rewrite in plain TypeScript, but then remembered how close to done I was so might finish the Svelte version first

### Games

Persona 5 Royal took over my life for the first half of the month, I think I played something like 72 hours across the first 3 weeks. Luckily I recognised the symptoms of burnout this time when I started just automatically opening it up to check some items off my internal todo list, and I've taken a break from it for a while in the last(?) main story palace so I can jump back in and enjoy it properly.

This also allowed me to make a lot of progress in DS2, meaning I should have it done in time for SILKSONG TO RELEASE SEPTEMBER 4TH! Man it's been a long time coming, I remember playing Hollow Knight on Switch so many years ago and loving it. I never finished it, wasn't a fan of the 'git gud' mentality at the time so I think I ran into one too many tough bosses and bounced off. But the lore, beautiful artstyle, amazing sound design and smooth gameplay kept me going for way longer than I would have in any similarly difficult/obtuse game at the time.

Now that I've lived and breathed the 'git gud' to the point where the name of this blog is a reference to the souls games, I can't wait to dive into the sequel. It's been really tough to resist diving back into the original TBH, but I did play a fair chunk of it and with Silksong coming out in days I know it's better to wait and experience that along with everyone else. Will definitely go back to the original at some point though, maybe as a long term game I play every now and again. Though I planned to do that with [Ender Magnolia](/games/reviews/2025/ender_magnolia.md) and it ended up being the only thing I played until I finished it.

Next month is going to be the Silksong show once it comes out, along with some P5R at night when my fiance is around and I can't play anything too 'clicky'. P5R is almost certainly going to be in the tier of game where they get their own CSS for the review, so that'll probably take a while even after I finish it and write the thing.

### Books

Read some middling YA fare in [The Bright Sword](/books/2025/the_bright_sword.md), [The Book of Love](/books/2025/the_book_of_love.md) and [The Day Death Stopped](/books/2025/the_day_death_stopped.md). Coming off Infinite Jest I'm maybe being a bit harsh on a genre I've typically enjoyed, but the writing feels absolutely juvenile by comparison. Maybe I'm finally aging out of YA at 30 haha. Maybe I'll prompt my automated book recommendation algorithm (fiance looking at titles/covers) to pick something more mature looking when I finish the angsty witch one.

### General Life Stuff

Kept up my bicycling to some extent, though probably less distance covered than last month and definitely much slower. Part of that was due to my fiance tagging along and her steadfast refusal to admit that the only thing to do on a bike is go really, really fast, but it's nice to ride around and explore Tokyo together as well so can't be too disappointed about it.

I made the next logical step from keeping my extra money in a high interest savings account to investing in ETFs, and had some nice initial success. I also had an immediate reminder that thinking about success or failure in the stock market on the scale of weeks or months is a trap, but there're many more years for it to buff out before I need to pull that money out.

### Work

Had my first incident where I felt like I made meaningful contributions! Usually I just watch the channel from the outside, or if I end up in the call just try to keep up with what people are talking about but this time I found an edge case, provided some helpful context and helped write the mitigations/fixes. Of course the reason I knew so much this time was that it was our team's code which caused the incident, but silver linings.

CPM ('Corporate Performance Management' I think? Had to Google it and still not sure) season is here and I spent probably too much time writing up my promotion case last Friday. It was a fun excuse to look back on everything I've accomplished in the year since starting at my current company, I really feel like I made a crazy amount of progress compared to the two years as a solo dev at my previous company.

Part of that is so many new things I need to be aware of working at a teach company; CI and observability were not things I had the budget or time to think about in the past, but working with other, experienced devs has also played a big role. It's fun to look back at the 40-odd comments that needed resolving before my first few PRs could be merged and comparing it to the relatively painless process I usually have now. I definitely still make mistakes, but they're considerably less egregious than they used to be and I'm glad my first senior engineer was so picky in PR review, it trained me to really think about the code I was writing and how I structured PRs to avoid getting chewed out.

Both my manager and skip-level say they're putting my name forward for promotion, so hopefully in a few months (whatever CPMs are they take a long time) I'll officially not be a junior engineer anymore! (not a senior either lol, just from E1 to E2 in my company's hierarchy)

## What went badly

- Incidents caused by code your team owns are never great
  - even if they turned out to be pretty low-impact
  - and caused by a chain of very loosely related bugfixes/some legacy code we didn't know was legacy
  - A reminder that legacy code includes code which works perfectly but is completely out of sync with the current business logic
- Less riding == no reduction in my looming beer belly, though I feel even the amount I was doing should have had some impact
  - went down from 21 days/217km to 19 days 171km
  - playing hours of basketball a day by default for the majority of my life may have given me a warped sense of how easy it is to stay fit
- Got overexcited about the low fees on a new ETF, then immediately wiped out years worth of benefits of those low fees by buying it on release
  - I even looked at difference between the NAV and trading price before buying, and noticed it was big
  - But didn't do the math, which is important when the difference between 0.04% and 0.5% is huge
  - Now I'm down ~2% on that part of my investment, which will hopefully serve as an effective deterrant to making such stupid mistakes in the future

## Action Items

- Focus on shorter, more frequent rides this month, with the aim of going for a ride every day
- Don't burn out on this blog by forcing myself to write a bunch
  - not everything which falls into a category needs a post or at least not a huge one
  - for example I'm reading ['The Day Death Stopped'](/books/2025/the_day_death_stopped right now and basically think it's just generic, fine YA stuff, so I might just write that
