---
layout: post
date: 2014-06-02
---

This is a collection of helpful videos that I used while I was learning to solder.

# General tips

0. ALWAYS use leaded solder. NEVER use unleaded solder. It's a huge pain to use, and especially will cause problems if you need to rework anything.
1. If working with a hot-air tool, set it to be about 350 degrees Fahrenheit, and default wind speed (too high and the parts will get blown around).
2. The datasheet will have a "soldering temperature" that will tell you how hot the chip can get without frying.
3. Pulling apart the copper wicking tape and using the frayed ends can help with delicate pieces.
4. Soaking the copper wick in flux can help as well.
5. ALWAYS use leaded solder.

# Helpful videos

Very dense video. Lots of good techniques in here. Music is excellent:
<iframe width="560" height="315" src="https://www.youtube.com/embed/5uiroWBkdFY" frameborder="0" allowfullscreen></iframe>

In-depth, great introduction to SMT soldering:
<iframe width="560" height="315" src="https://www.youtube.com/embed/b9FC9fAlfQE" frameborder="0" allowfullscreen></iframe>

Beautifully shot, simple closeup video of SMD soldering:
<iframe width="560" height="315" src="https://www.youtube.com/embed/MqivHi7Qjvk" frameborder="0" allowfullscreen></iframe>

Helpful but a little long. Soldering-specific stuff starts at 18:13.
<iframe width="560" height="315" src="https://www.youtube.com/embed/3v5tKHLZhAM" frameborder="0" allowfullscreen></iframe>

<a href="https://youtu.be/77JgIqraX_I">Desoldering techniques,</a> which are good to know, though I didn't find these particularly helpful for my problem.

# My specific problem and how I solved it.
We were working with a very tiny chip in a TSSOP8 package on a purchased PCB. Needing particular functionality, we'd tried to short two of the pins together, but missed and accidentally shorted three! Normally this wouldn't be a huge deal to fix, but unfortunately we'd accidentally used the dreaded unleaded solder (cue dramatic music). We struggled with the copper wick for about an hour, even fraying it, and soaking it in flux to help, but it nothing worked. 
 
Finally, I decided I could coat all the pins in leaded solder and at least remove the chip, and then clean the chip and the board separately (or, worst-case scenario replace the chip entirely and hope I could reprogram it). Coating the messed-up pins in leaded solder worked, though! I was able to then wick up all the excess solder in the copper, and resoldered it with clean, leaded solder. Yay!