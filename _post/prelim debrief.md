---
layout: post
date: 2017-08-25
---

#### Q1. Let's start w/ Jefferson Han's paper, can you describe the technology behind how that paper worked? Give technical details, describe how it fit into the historical context, and how it differed from technology that came before, and any limitations.


WHAT THEY WERE LOOKING FOR
1. Specific technical details, how this differed from what had come before, and how it fit into the historical context.
	- I drew the screen, with the light, and a camera a few inches behind, with a hand interacting, and some lines that indicate the light bouncing off of where the hand is touching.
	- I said multiple people could interact with it (mostly making this up), it could remember an individual over time, with some % accuracy.
	- I didn't remember historical context at all (indeed: I don't think this was in the paper, and I think we would have needed someone well-versed in the field to explain to us how it fit. This was actually something we had discussed as a study group as something that would be interesting, but didn't know!) (I said this).
2. Limitations both technically, and in terms of the types of interactions it enabled.
	- I talked about how it wouldn't work w/ dry skin, lighting conditions had to be carefully controlled, smudges could mess it up, and the fact that you needed a big gap behind the substrate for the camera/lighting setup.
	- Interactions: I couldn't think of any.
3. The types of interactions that were supported, and how that was different from what came before.
    - I couldn't remember what other types of sensors existed for similar kinds of work, so I stumbled a lot, and eventually Eric said "you could imagine something that recognizes a single touch". Then I drew a big array of sensors on a table, and said that was another way you could do it but it was more complicated to implement, maintain, and didn't give as much functionality. I said something about fidelity, and Eric pointed out that any camera w/ low fidelity would have that problem, and I didn't really have a response to that.
	- I only barely recalled that it was about multi-touch, so I stumbled around some answers here: "collaborative" "pinch and zoom because multiple fingers can touch it" "different gestures since you have continuous tracking".


#### Q2. Parallel Prototyping, Describe the study details, motivation, procedure, evaluation and the results. Identify a key problem with the way the experiment was run. Describe any issues with their data analysis, given these data samples.

WHAT THEY WERE LOOKING FOR
- Details of the experiment, how it was run, what their findings were. 
	- Serial condition vs Parallel condition
	- What they were actually designing (web ads)
	- How they evaluated their findings (web clicks on online ads, similarity comparisons, and self-efficacy pre- and post- study surveys).
	- Three hypotheses: Better/more successful ads, greater diversity in designs, and increased levels of self-efficacy in student designers.
	- Level of detail they were looking for: Q) how did they actually do the comparison to see diversity? A) Pairwise comparison. Q) Who did the comparison? A) Mechanical Turk workers
- Theoretical motivations behind what they looked for and found.
	- I described how the serial process enabled iterative improvement on the starting point, which may hillcimb toward some kind of local optima, whereas generating multiple designs in parallel may sample more broadly from the design space, and allows a greater chance of global optima.
- Obvious problems w/ the experimental design or how it was run.
	- I didn't remember this, but apparently the experimenters were not blind to the experimental setup (parallel or serial) and they were the ones providing the rankings, so that may have biased things). I pointed out that the independent ratings by Mechanical Turk and the click-throughs made the findings more believable.
- Analysis of specific data samples (provided by examiners). What problem would you see here in this data, or what concerns do you have? The following was drawn on the board:

	```
	mean(std)
	Parallel: 31(134)
	Sequential: 13(80)
	```

	- I said: The distribution isn't normal, and the enormous variance means there might not actually be a difference in these two populations. I also said something about how they might have used a T-test, and can't we trust statistics?


#### Q3. 1992 - Beyond Being There. What was the point of this paper? It was somewhat controversial at the time, can you talk about the why that might have been? What types of technology embody their ethos?

WHAT THEY WERE LOOKING FOR
- Details about the philosophy of the paper.
  - Talk about what it was a response to. I said: a lot of technology was being built around the unstated goal of recreating physical colocation, where we're striving towards this goal of perfectly recreating the experience of being in the same location, what if instead we talked about this as only one of many possible media? That kind of opens up questions of what does face-to-face interactions lack/do poorly/not do at all/ etc.
  - Define "being there". I said "physically co-located" and emphasized that the goal was always for people at a distance to not feel like they were at a disadvanage to people who were physically present. I referenced Skype/video-conferencing system as one way geographically-disparate participants are at a disadvantage.
- Core concepts and ideas.
  - I described the 5 projects the authors list. Amorphous Groups, Online Profile, Anonymity, Semisynchronous Discussions, and Soundpaper (Clarity, Feedback, Archiving).
  - What besides "being there" would the authors use to measure success? I stumbled on this a lot, and eventually talked about social presence and richness of information.
- Speculation about why it might be controversial.
  - I said because people at the time would have been wanting to push technology forward and always increase it, and this paper sort of argues that that is wasted energy, and that the field woud be better served by moving in different directions.
- Modern implementations / interpretations of the core concepts.
  - I describe HoloLens, where you're literally sharing the same view - seeing through their eyes. It's actually better than being physically there, because if you're pointing to the part of the sink that needs fixing, you'll occlude their view, but this annotation can hang in the air, and you won't block them. 
  - I also talked about how the old phone sounded like you were farther away, which actually helped people mentally and emotionally experience the distance, so increased sound fidelity would actually lower the quality of the experience.



#### Q4. Ben Schneiderman's CST he talked about 4 things (Collect, Relate, Create, Donate). Describe them. He also describes 8 tasks (written on the board by the examiners). Canny gave the example of creating a family album, and asked if there was any technology existing today that supports these kinds of efforts. He then asked for my personal critical reactions to the 8 tasks as I was reading the paper. He wanted me to talk about which seem to have stuck around, which seem to have fallen out of favor, if there is any technology that exists that supports this type of work, which seems to be "Schneiderman"-specific, etc.

WHAT THEY WERE LOOKING FOR
- Personal, critical reaction, especially critiquing Schneiderman's perspective/viewpoint.
	- I talked about how important I think disemmination is, as it's rarely mentioned in most design guidelines, and my experience at the old company I worked at where (setting aside licensing) they didn't even provide documentation to groups within the company - teams wouldn't even help each other out, much less customers, or any outside groups.
	-  I talked a little bit about Search and Canny responded that he thinks Search is an outdated term, to which I have a big reaction. He talked about how his kids use Google to search for specific pieces of knowledge, and I emphasized that while that's a part of search, another part is understanding what already exists, and placing yourself in the larger context of the work that's been done.
- Accurate interpretation/understanding of Schneiderman's philosophy.
	- Relate is more about relating to other people, not relating ideas to themselves (he even said my interpretation was a common mistake made only by buffoons or something similar). (I messed this up)
- Core concepts, and modern interpretations/examples of them.
	- I listed FB, Ancestry.com, and 23andMe as modern versions of tracking family history details.
- Analysis of what aspects of this have continued on to this day, and what have been left behind.
	- I talked about ml4a and how that fits into the 8 tasks, and describe what you're able to do with ml4a, and why it's valuable and how it matches Schneiderman's.










