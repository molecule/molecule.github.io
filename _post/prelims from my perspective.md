---
layout: post
date: 2017-08-25
---

I just finished taking my Prelim exam, and wrote up this brief -- but hopefully helpful! -- overview of how the day actually looked from my perspective. 

For those not in my program, the Prelim exam is an hour-long oral exam that decides whether or not you get to stay in the graduate program. Failing is pretty common, partly because people don't know what to expect. If you fail, you get to take it again (but I think taking it 3 times is unusual). Everyone tells you that the examiners don't want you to fail: the purpose isn't to weed people out, it's to confirm that you'll do Berkeley proud. 

For HCI, Prelims involves reading ~41 papers/articles/book chapters and knowing them all in such depth that you can easily answer detailed questions (such as those I answered, listed below) and show evidence of critical thought. In February (about 7 months before the exam) myself and the other first-year students formed a group and we took turns presenting papers to each other. Two weeks before the test, we realized we had a lot of work left to do and created a bunch of flashcards to study from. The flashcards (created for Anki) -- as well as a lot of our other studying materials -- are available on [Jeremy Warner's github](https://github.com/jeremywrnr/hci-prelims/blob/gh-pages/assets/Prelims.apkg). The beautiful published version of the page is available on [Jeremy Warner's site!](https://jeremywrnr.com/hci-prelims/) Thanks for sharing, Jeremy!

#### Logistics

Examiners: John Canny and Eric Paulos

The folks arranging the exam emailed us the day before to say the room had been changed.  I went to scope it out an hour early to make sure I knew where it was - good thing, because it wasn't on any of the maps and the woman at the front desk didn't know where it was either! We found it eventually of course. I also had with me my own whiteboard markers just in case.

Both examiners were very nice (one is my advisor, and the other I had only met once briefly). They introduced themselves, and reminded me that even though all tests can be stressful I should relax and not worry too much. They also emphasized that talking out loud is good - the purpose is to show what I know, so try not to get too stuck or stop talking.

#### Questions
Here are the questions I got, to the best of my ability to remember, as well as some details about what I said, what I think they were looking for, and places where I stumbled.

##### Q1. Let's start w/ Jefferson Han's paper, can you describe the technology behind how that paper worked? Give technical details, describe how it fit into the historical context, and how it differed from technology that came before, and any limitations.


THEIR QUESTIONS AND MY ANSWERS
1. Specific technical details, how this differed from what had come before, and how it fit into the historical context.
	- I drew the screen, with the light, and a camera a few inches behind, with a hand interacting, and some lines that indicate the light bouncing off of where the hand is touching.
	- I said multiple people could interact with it (mostly making this up), it could remember an individual over time, with some % accuracy.
	- I didn't remember historical context at all (indeed: I don't think this was in the paper, and I think we would have needed someone well-versed in the field to explain to us how it fit. This was actually something we had discussed as a study group as something that would be interesting, but didn't know!) (I said this).
2. Limitations both technically, and in terms of the types of interactions it enabled.
	- I talked about how it wouldn't work w/ dry skin, lighting conditions had to be carefully controlled, smudges could mess it up, and the fact that you needed a big gap behind the substrate for the camera/lighting setup.
	- Eric asked specifically if it would work with any objects, and I said yes as long as they weren't too dry (this was wrong).
	- Interactions: I couldn't think of any. Really barely remembered this paper. We had talked as a group beforehand and thought it was very unlikely that anyone would ask about it.
3. The types of interactions that were supported, and how that was different from what came before.
    - I couldn't remember what other types of sensors existed for similar kinds of work, so I stumbled a lot, and eventually Eric said "you could imagine something that recognizes a single touch". Then I agreed, and expanded on that and drew a big array of sensors on a table, and said that was another way you could do it but it was more complicated to implement, maintain, and didn't give as much functionality. I said something about fidelity, and Eric pointed out that any camera w/ low fidelity would have that problem, and I didn't really have a response to that.
    - I only barely recalled that it was about multi-touch, so I stumbled around some answers here: "collaborative" "pinch and zoom because multiple fingers can touch it" "different gestures since you have continuous tracking". 
    
This was, honestly, extremely rough and probably my worst answer.


##### Q2. Parallel Prototyping, Describe the study details, motivation, procedure, evaluation and the results. Identify a key problem with the way the experiment was run. Describe any issues with their data analysis, given these data samples.

THEIR QUESTIONS AND MY ANSWERS
1. Details of the experiment, how it was run, what their findings were. 
	- I first started describing the Tohidi et al. paper about showing participants multiple designs, but quickly corrected myself.
	- Then I described the motivation, that the authors wondered whether getting designers to create multiple versions would improve quality and diversity. I described the Serial condition vs Parallel condition.
	- With some prompting, I said that they were actually designing web ads (I could have said this without prompting, but I was feeling nervous and so I just stopped talking here).
	- I described the three hypotheses: Better/more successful ads, greater diversity in designs, and increased levels of self-efficacy in student designers. 
	- I said they used expert ratings to evaluate diversity, and Professor Canny pressed me on  how they actually did the comparison (I said "pairwise comparison") and on who these 'experts' actually were. I said they were Mechanical Turk workers, which is what he was looking for.
2. Theoretical motivations behind what they looked for and found.
	- I described how the serial process enabled iterative improvement on the starting point, which may hillcimb toward some kind of local optima, whereas generating multiple designs in parallel may sample more broadly from the design space, and allows a greater chance of global optima.
3. Obvious problems w/ the experimental design or how it was run.
	- I didn't remember this, but apparently the experimenters were not blind to the experimental setup (parallel or serial) and they were the ones providing the rankings, so that may have biased things). I pointed out that the independent ratings by Mechanical Turk and the click-throughs made the findings more believable.
4. Analysis of specific data samples (provided by examiners). What problem would you see here in this data, or what concerns do you have? The following was drawn on the board:

	```
	mean(std)
	Parallel: 31(134)
	Sequential: 13(80)
	```

	- After drawing the data up on the board, I was able to clearly see that the distribution isn't normal, and the enormous variance means there might not actually be a difference in these two populations. I also said something about how they might have used a T-test, and can't we trust statistics?


##### Q3. 1992 - Beyond Being There. What was the point of this paper? It was somewhat controversial at the time, can you talk about the why that might have been? What types of technology embody their ethos?

THEIR QUESTIONS AND MY ANSWERS
1. Details about the philosophy of the paper.
	- Talk about what it was a response to. I said: a lot of technology was being built around the unstated goal of recreating physical colocation, where we're striving towards this goal of perfectly recreating the experience of being in the same location, what if instead we talked about this as only one of many possible media? That kind of opens up questions of what does face-to-face interactions lack/do poorly/not do at all/ etc.
	- Define "being there". I said "physically co-located" and emphasized that the goal was always for people at a distance to not feel like they were at a disadvantage to people who were physically present (He nodded after this, which I took as an indication that I had said what he was looking for). I referenced Skype/video-conferencing system as one way geographically-disparate participants are at a disadvantage, due to technology problems like dropping frames, poor video quality, not synched sound and video, etc.
2. Core concepts and ideas.
	- I described the 5 projects the authors list. Amorphous Groups, Online Profile, Anonymity, Semisynchronous Discussions, and Soundpaper (Clarity, Archiving, and I blanked on Feedback so didn't mention it).
	- What besides "being there" would the authors use to measure success? I stumbled on this a lot, couldn't remember teh authors specifically mentioning this, but finally remembered one sentence about how social psychologists measure this kind of thing. So I talked about how the authors wanted to stop focusing on 'distance' and instead measure what was actually important to the experience, namely social presence and richness of information.
3. Speculation about why it might be controversial.
	- I said because people at the time would have been wanting to push technology forward and always increase it, and this paper sort of argues that that is wasted energy, and that the field woud be better served by moving in different directions.
4. Modern implementations / interpretations of the core concepts.
	- I described HoloLens, where you're literally sharing the same view - seeing through their eyes. It's actually better than being physically there, because if you're pointing to the part of the sink that needs fixing, you'll occlude their view, but this annotation can hang in the air, and you won't block them. 
	- I also talked about how the old phone sounded like you were farther away, which actually helped people mentally and emotionally experience the distance, so increased sound fidelity would actually lower the quality of the experience.



##### Q4. In Ben Schneiderman's CST he talked about 4 things (Collect, Relate, Create, Donate). Describe them. Canny gave the example of creating a family album, and asked if there was any technology existing today that supports these kinds of efforts. Schneiderman also describes 8 tasks (Professor Canny wrote the 8 tasks on the board exactly). He then asked for my personal critical reactions to the 8 tasks as I was reading the paper. He wanted me to talk about which seem to have stuck around, which seem to have fallen out of favor, if there is any technology that exists that supports this type of work, which seems to be "Schneiderman"-specific, etc.

THEIR QUESTIONS AND MY ANSWERS
1. Personal, critical reaction, especially critiquing Schneiderman's perspective/viewpoint.
	- I talked about how important I think disemmination is, as it's rarely mentioned in most design guidelines, and my experience at the old company I worked at where (setting aside licensing) they didn't even provide documentation to groups within the company - teams wouldn't even help each other out, much less customers, or any outside groups.
	-  I talked a little bit about Search and Canny responded that he thinks Search is an outdated term, to which I had a big reaction. He talked about how his kids use Google to search for specific pieces of knowledge, and I emphasized that while that's a part of search, another part is understanding what already exists, and placing yourself in the larger context of the work that's been done.
2. Accurate interpretation/understanding of Schneiderman's philosophy.
	- Relate is more about relating to other people, not relating ideas to themselves (he even said my interpretation was a common mistake). (I messed this up)
3. Core concepts, and modern interpretations/examples of them.
	- I listed FB, Ancestry.com, and 23andMe as modern versions of tracking family history details.
4. Analysis of what aspects of this have continued on to this day, and what have been left behind.
	- I talked about ml4a and how that fits into the 8 tasks, and describe what you're able to do with ml4a, and why it's valuable and how it matches Schneiderman's. I described the ml4a project where someone fed in pictures of dinosaurs and pictures of flowers, and the output was dinosaur-shaped flower-like structures (I was relating this to the Composition task).

#### Notes on my experiences

The first question was one of my weakest papers, but I knew I was confident on the rest, so I didn't let it rattle me too much. I definitely struggled on that question, though, as you can see in the 'questions' section. Each question had multiple sub-questions, but it wasn't broken down so expilcitly - things flowed based on what I said and where they wanted more detail. I tried to speak at length as much as I knew, covering motivations, main point, all details I recalled, and limitations. I didn't always succeed. The examiners helped me along when I was going in the wrong direction, or was not answering with the kinds of detail they wanted. Here's a specific example of what I mean: 

In Q2 (see below), Professor Canny was trying to get my sense of what the theoretical motivations behind the experimental design in Parallel Protoyping were. The way he phrased the question made it seem like he wanted to know what papers they referenced, and I said "If you want me to list specific references I won't be able to do that, because I don't remember them." He said something like "why did they choose the questions that they did? Let's start with what you've called "successful" - why did they think their technique would make people more successful?" (I had described the 3 hypotheses as "successful, diverse, and increased self-efficacy", so he was using my word). I talked about how the authors thought that designers who were given feedback after a single prototype would be more likely to iteratively make incremental improvements on that design, perhaps inadvertantly limiting themselves to a local optima, whereas those who made 3 designs in parallel were more likely to sample widely from the design space, and be more likely to find a global optima (or at least a higher local optima. He said "ok that covers success and diversity, what about self-efficacy?" I repeated what I had said earlier: that they had done an interview and a survey. He said "yes but an open-ended interview isn't the type of thing you'd do if you wanted to get information about self-efficacy". I paused uncertainly for a while and repeated the bit about the survey. He pressed me again "a survey isn't really the way one would get at something as tricky as self-efficacy, because people might not be aware of how it works." I said "Oh! yes they did a survey before the experiment and repeated it afterwards" which is the detail he had been looking for.

So that may give you a sense of how they lead you through questions if you aren't getting to the right answer, and how they'll help you if you're seemingly stuck.


#### Recommendations

To study, we read all the papers, drew maps that connected all of the ideas of all the papers together on a whiteboard, discussed the concepts in detail (especially motivations, experimental setups, findings, and limitations), and studied over 300 flashcards. The other grad students told us we were preparing more than anyone has prepared for prelims in the last 10 years, and thought we were way overthinking things. I'm very happy with the amount of time and energy I put into preparing: not only because I felt confident and ready for the test, but also because these topics are things I'm very interested in! I can't imagine a world where I wouldn't benefit from having so much detailed knowledge about foundational papers in my field. My recommendations:

1. Read all the papers. I actually read each paper at least 3 times but that's because I read super fast and need time to absorb things.
2. The flashcards were probably the most helpful study aid (this from someone who hates flashcards). I put every list that was in a paper into a flashcard, along with examples and descriptions of what each item was. I also made sure I could describe every experiment in great detail and I was super glad I did. I also made sure I could apply the concepts from every paper. So if they had asked me to design a search user interface, I would have known exactly how to do it. Anki (the flashcard program I used) has a great system to help you learn things, and the desktop version is free! (The app is $25 which is high but it was definitely worth it for me).
3. Talk w/ other students, practicing questions, and drawing connections / comparisons. Not only was this invaluable it was also fun! Practicing talking in front of people who are looking at you with blank expressions on their face is surprisingly difficult, and I'm glad we practiced this as much as we did. 




