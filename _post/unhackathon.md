---
layout: post
date: 2014-09-27
---

I recently went to my first hackathon (called the
’[unhackathon](http://www.unhackathon.org/)’) recently, held at this really
cool place [AlleyNYC](http://www.alleynyc.com/), and hosted by Stony Brook
University. Going in, I wasn’t really sure what to expect, but I was excited to
start learning and building something new. &nbsp;

I ended up forming a group with students from University of Rochester and The
Cooper Union, with the goal of making a robot arm controlled by Thalmic Lab’s
[Myo](https://www.thalmic.com/en/myo/) (a wireless armband that measures arm
orientation and recognizes different hand gestures). The guys from UR had
brought a bunch of hardware equipment, and the student from Cooper Union was a
MechE, so we fashioned a working arm with controlled by gears and servos fairly
quickly into the hackathon.&nbsp;

[Check out the finished product](https://www.youtube.com/watch?v=cxl433BW4wQ),
which actually worked surprisingly well for how sleep deprived all of us were…
We piped a c++ executable for interfacing with the Myo into a Perl script,
which opened a COM port with an arduino microcontroller, which in turn
controlled the arm. The arm not only followed the position of the arm, but also
triggered the opening and closing of a claw based on whether the user’s hand
position opened or closed. Tuning it was a bit rough as the Myo actually
records orientation and not position, but still it managed to work fairly well!

Overall, the experience was entirely awesome, I and met some really cool people
along the way. I only slept for about 45 min around 7am on the final day… which
in retrospect was a bad idea. I wasn’t really able to code (or think)
effectively after about 5am. Next time (coming up today at BigRedHacks), I’ll
try and be a bit more balanced.

