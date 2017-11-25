---
layout: project
title: Qbadge
---

<style>
img { max-width: 500px; }
</style>

## Qbadge

<style>
img { display: inline; }
img#qbadge { width: 10em; }
img.proj { display: block; margin: auto; }
</style>

<img id="qbadge" class="proj" src="/src/img/qbadge.jpg">


###### [source code][qbadge] - [grace hopper blog][ghc-blog] - [article][steam-article]

| <img src="/src/img/noun_779891.svg" alt="Qualstar awards" style="width: 50px;"/> | <img src="/src/img/noun_779891.svg" alt="Qualstar awards" style="width: 50px;"/> | [ Won 2 Qualstar awards!][qualstars] |


Arduinos are amazing devices, but even with the incredible community surrounding them, there still seems to be  a huge lack of women interested in low-level programming. I wondered if this was because frequently the only embedded application people know about is robots. Inspired by Leah Buechley’s Lilypad Arduinos, I wanted to show how to use Arduinos for a different kind of application. Working together with the campus team, and 3 other teams at Qualcomm, I designed an event around what I created. Questions I wanted to ask:


### questions

  - **Crafting as entry-point into STEM** For those who do use Arduino, what is the entry point? For me, it was crafting – is that a common experience? Programming is really about problem-solving, which is a valuable skill for anyone – so how can we emphasize that and generate interest among people with different backgrounds? Leah Buechley’s wonderful Lilypad taps into the crafting, as does Jie Qi’s Circuit Stickers. Bioengineering seems like a field that is ripe for exploration.
  - **Social computing** This event really emphasized social connection. The Qbadges were used to initiate conversations, and the women worked in groups to solve the programming challenges. We got a lot of positive feedback about this aspect, and identified some extremely strong candidates who we wanted to interview. How could we incorporate a social component into the interviewing process? What problems would that cause for cross-cultural interviews?
  - **Support deep interaction** The “networking” portion of the event compared survey answers between participants. My goal was to spark conversation about the specific topics, but we found that people used it mainly to get a “snapshot” of how compatible they were. In other words, the pendant encouraged snap assessments rather than in-depth conversations. How can I use a platform like this as a jumping off point for more meaningful types of interactions? Or was the novelty of the experience enough to initiate a connection? How do successful networkers build a connection – are there themes we can identify?
  - **Tangible interfaces** The physicality of the object was important to me – embodying the experience in an aesthetically pleasing pendant is far more interesting than interacting through a screen or an app. But why was that? What aspects of the physicality are important? In other words, where we draw the line between physical and digital is up to us: what kinds of interesting experiences can we create by drawing that line in different places? Take [the COSMAC ELF computer](https://en.wikipedia.org/wiki/COSMAC_ELF), for instance, which you can program by physically toggling switches. How else can we utilize the physical world to interact digitally, and how does that effect our experience?

To learn more about how we used these unique devices, check out the github page with all of the open source code! Qualcomm posted [a blog I wrote about my experiences at Grace Hopper 2015](https://www.qualcomm.com/news/onq/2015/10/23/grace-hopper-conference-celebrates-women-computing), as well as [another opinion piece I wrote about STEAM.](https://www.qualcomm.com/news/onq/2016/05/04/stem-steam-young-artists-can-become-engineers-too)

### "lessons learned" AKA Disaster Project

I was thrilled and honored to be supported by Qualcomm to work on this project. A number of people put their faith in me, and gave me all the support they could to make sure we would succeed. I could never thank them enough for the opportunity to do such a wacky project!!! Everything about it was also super fun, even the disasters, and I could not be more proud of everyone involved (including myself) for their efforts. I have nothing but fond memories of every aspect of the experience.

Having said that, many parts of actually constructing the Qbadge and putting on the events was a complete disaster. Briefly:

- After months of prototyping every aspect of the project, keeping meticulous notes and building out every piece of it (bluetooth, IR communication, button, button disbouncing, LED control) when, a week before we ordered HUNDREDS of parts, I realized that when I tried to put all the individual parts into ONE prototype I: 1) didn't have enough pins, 2) would run out of memory, and 3) the way we were planning to build it wouldn't have fit into the 3D-printed case we had designed anyway!!! I was on vacation visiting my boyfriend at the time, hanging out in his apartment while he was at work. I remember realizing that there weren't enough pins (and I had been miscounting for MONTHS) and just pacing around his empty apartment, fear in my heart and danger in my eyes. I quickly texted one of my collaborators (Paul, who was in charge of the 3D-printed design that would ultimately hold everything), and he confirmed that the newer board would be able to fit, and I cancelled the several-thousand dollar order, and put in a new one with the new boards. 
- how brainstorms transformed over time, so looking back was a surprise/shock/journey
- day when every single rework group was working on Qbadge, and every single other project was put on hold completely.
- that was due to the absolute disaster of the print job (wouldn't schedule job until thursday before they were due, printed them incorrectly with lids embedded into bottoms, ran out of material, no store w/in driving/emergency shipping distance carried it, dude had to come in on saturday to print them special but no material, printed everything on monday, rework teams got them on tuesday (day where qbadge took over everything), and were completed by tuesday night).
- monitors didn't work w/ dragonboards on the day of the event (dragonboards were super picky and didn't recognize monitors through an adapter, only HDMI monitors would work)
- despite specific instructions, HDMI monitors not available at the actual event.
- charging 150 in my room the night before the event
- shipping them unwrapped, so the little hooks broke off and I had to run to the store to buy super glue and little metal rings and hand glue all of them.



<small> &copy; {{ site.time | date: '%Y' }} / {{ site.author.name }} /
[email][mail]</small>

[mail]:mailto:molecule@berkeley.edu
[qbadge]:https://github.com/molecule/qbadge
[ghc-blog]:https://www.qualcomm.com/news/onq/2015/10/23/grace-hopper-conference-celebrates-women-computing
[steam-article]:https://www.qualcomm.com/news/onq/2016/05/04/stem-steam-young-artists-can-become-engineers-too
[qualstars]:https://molecule.github.io/cv/
