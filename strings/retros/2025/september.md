---
date: "2025-10-01"
title: "2025 September Retro"
tags: [strings, retro]
layout: _post.html
---

## What went well

### Projects

- Kept writing this blog
- Nothing else this month haha

### Games

Well I was right about [Silksong](/games/reviews/2025/hollow_knight_silksong.md) being the main focus in [last month's retro](/strings/retros/2025_august_retro.md); didn't anticipate Hades 2 though. Absolutely crazy those two came out in the same month; both live up to their hype which is incredible given Silksong's 7 year development time and all the memes. Hades was a safer bet since it somehow spent its whole early access at Overwhelmingly Positive, but even given that it's an amazing example of how to make a 'more, but better' sequel. Really hope Slay the Spire completes my indie trinity by doing something similar when it hits EA next March.

I also had some budget left to grab a pair of indie Inside-likes in the Autumn sale (White Shadows & Shady Part of Me) as well as a potential fiance game (Haven). This locks in my available games for my anniversary week off in the middle of October, but given Hades 2 is a rogue-like and I still have DS3 plus ~ 5 backlog games on my Steam Deck I think I'll be fine.

### Books

Had a lot of time to read on our trip to Nagano, during which I finished [Homo Deus](/books/homo_deus.md) and [The Founders Trilogy](/books/founders_trilogy.md). Neither was terribly impressive, both for reasons related to my having too much experience with something, so I went back to the ol' reliable Discworld anthology. I've read an incredible number of Terry's books, enjoying them all, and still have over a hundred hours left to read according to my Kobo. Truly incredible writing output. After finishing the one I'm on now I might pick up the new Witcher book; curious to see if Sapkowski is just shamelessly cashing in on the games or actually still had stories to tell.

### General Life Stuff

Considering our 5 day trip to Nagano was prompted by an offhand comment I made about it being cool to show my fiance where I spent my first year in Japan, it went pretty well. We didn't have much of a plan other than 3 days in Matsumoto/two in Nagano and wanting to visit Kamikochi, but my fears of not finding enough to do were unfounded.

On the first day we took a limited express to Suwa, a small city near where I lived in Shiojiri which is about 80% lake. Mostly we walked around said lake, but there was also a nice shrine and a public foot bath so hot I can't believe it's legal to leave it open in public. We spent the evening wandering around Matsumoto Castle, appreciating the way it reflected on the water.

Day 2 was a road-trip day; we rented a car from my good buddy TRC and drove through Narai-juku to Naegi Castle Ruins in Gifu. Sadly the cafe the fiance found us for brekky had a gigantic line out front and we had limited time, so we ended up having the buffet breakfast at a Gutso under a fancy hotel. On the way back we stopped off at a very steep Nakasendo station with an infestation of water wheels and a 'paid' parking lot which seems to rely on customers walking into the nearby gift shop and asking to please have their money taken. If you're reading this and a Japanese police officer, we absolutely did this. In what was probably karma for not paying for parking, we got hit by a torrential downpour on the way back, which on single-lane, pitch-black Japanese roads with no reflective markings is a very stressful experience.

Day 3 was Kamikochi, the only fixed plan of the trip and definitely the most annoying to access. The original plan was to rent a car again and drive there, but not only would that have been foolish since you can't drive inside the park; we also would have still had to pay ~4 000yen for a bus to the park entrance from the carpark. Next to that, the ~5 000yen each way train + bus combo looked positively frugal. Only in that context though.

Despite the annoyance of getting there, the park itself was really nice. We spent 6 hours there, walking the whole time, and still didn't see everything in the main area, let alone the hiking trails. As expected of Japan paths near the main areas were absolutely packed, but it didn't take too long to get away from the crowds if you headed to less popular but still beautiful areas. The water was unbelievably clear, the weather was lovely and there was a surprising variety in terrain for an area nestled high in the alps.

Nature's dangerous side was on display as well; signs announcing recent bear sightings were plentiful, but thankfully we were well protected by the all powerful bells on people's backpacks, in addition to the stationary ones it seems customary to ring whenever you pass. There was also evidence of landslides on a few nearby mountains, plus a stabilised one which would have cut a wide swath out of the main path when it happened. A long bus + train + train combo landed us at our hotel for the night in Nagano, ready for a big breakfast and day 4.

Road trip number 2 was also a surprising success, since the only plan we had was visiting Togakushi Shrine (about 45min out of the city). Luckily my brilliant strategy of pathing toward the only major city we could reasonably reach within the day and make it back paid off, on the way to Joestsu we discovered an unexpected mountain lake apparently famous for elephant bones, the museum dedicated to said bones and another vertically blessed set of castle ruins.

The fiance also had her first real driving lesson in the abandoned parking lot of an old government building (just making a funny gaijin joke Mr Japanese Policeman) and progressed from creeping forward in a mostly straight line to creeping forward in a mostly controlled oval-ish loop. Next time I might convince her to touch the accelerator!

We found a fantastic burger/shake restaurant for lunch, walked around the local castle remains/biggest lotus lake I've ever seen and finished off the day with a stroll along the local beach before heading back. Luckily our impromptu driving lesson didn't attract the wrath of karma, and I had a nice relaxing drive back to the hotel to drop the car off.

On our last day we made the obligatory visit to Todaiji, then spent most of the day wandering around that general area (hilltop shrines! the outside of an art museum! depressing Japanese zoos!) and watching the fountain in a local park absolutely wreck a bunch of kids. It was one of those that're set into the ground with no barriers, and turns on certain jets at certain times/turns off completely every now and again. Without fail children (and sometimes parents) wandered into its maw while the jets were off; only to run screaming out/further in as they suddenly came on at the worst possible moment. We both suspect sitting on the many benches in the area and watching this happen must be a popular local pastime.

When 5pm came we boarded our Shinkansen and made the amazingly quick journey back to Tokyo, refreshed and ready to begin our second consecutive 3-day week thanks to plentiful public holidays. A nice reminder that if you're lucky enough to have good company, it doesn't really matter where you go/what you do.

### Work

Didn't do too much of it this month between two 3 day weeks and dealing with the incident, but it mostly went well. Landed some features and continued refactoring our now not-so legacy codebase, which is now the first in the company to use React 19 thanks to my teammate.

## What went badly

- Another incident, directly my fault this time
  - Should have rolled it out to staging first
  - But honestly should have just known better, I even resisted making a change on a previous PR using reasoning which would've prevented the incident
  - Need to put more though into making sure I cover everything in my PRs rather than relying on others to catch stuff
- Made some similarly embarrassing mistakes in the next few days too;
  - not including a foreign key because I thought something was behind FDW when it wasn't
  - opening a PR to clear cache keys which didn't need clearing in that situation before closing it after my manager reviewed it

## Action Items

### Review

#### Shorter, more frequent rides

Great job on shorter, more frequent not so much. In my defense I went on a 5 day holiday and it rained a lot more often, but I still could've got off my butt for more than 15 rides/110km.

#### Don't burn out on this blog

Unironically really good job. My Persona 5 review has been languishing for half the month since I want to write a custom stylesheet for it but I'll get there eventually. I kept up with TWIL (other than the week I came back from holiday) and added some book reviews as I finished them.

### Next Month

- Seriously, get off my butt. At least 20 rides/140km this time
- Enjoy my week off by gaming like its my full-time job
- Go a whole month without causing an incident -\_\_-
