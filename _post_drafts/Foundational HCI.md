---
layout: post
date: 2017-09-01
---

As I enter my second year as a student of Human Computer Interaction, I'm enjoying having the chance to read foundational and modern papers that represent the field. These art part of the HCI Research class I'm in, and each week we write up little reviews of the papers. I decided to take the opportunity to share my thoughts more broadly! So now both people who stumble upon this blog will have access to my evolving thoughts and opinions about these papers, and HCI more generally.

#### Readings
Bush, Vannevar (1945). "As We May Think" Atlantic Monthly 176 (July 1945) pp. 101-108. 
(Original in Context Printing 1945) 

Ivan E. Sutherland. 1964. Sketch pad a man-machine graphical communication system. In Proceedings of the SHARE design automation workshop (DAC '64). ACM, New York, NY, USA, 6.329-6.346. DOI=http://dx.doi.org/10.1145/800265.810742 

Kiesler, S., Siegel, J., & McGuire, T. W. (1984). Social psychological aspects of computer-mediated communication.Preview the documentView in a new window American Psychologist, 39(10), 1123-1134. http://dx.doi.org/10.1037/0003-066X.39.10.1123Links to an external site.

### As We May Think
Many HCI courses start out by reading Vannevar Bush's classic 1945 piece "As We May Think". It was written by the former lead engineer for the R&D efforts of World War 2. During WW2, Vannevar was in charge of coordinating the many scientists and researchers doing work for the war effort, and was instrumental in keeping the Manhattan Project at a high priority. Historical context is always important, but I think the particular details of this essay are especially interesting. Since he was part of the team that recommended deployment of the nuclear weapons to Harry S. Truman, Vannevar was among the first to know that the bombs would be used. This article came out after the decision was made, but before Hiroshima and Nagasaki were destroyed.  I don't know how obvious it was in July 1945 that the dropping of the bombs would be a decisive end to the war, but it seems that Vannevar's mind was already looking beyond the war to how society and technology would integrate in the coming years and decades. Some even interpret this essay as a kind of apology for how much damage scientific efforts had inflicted on the world during the war years, and an attempt at leveraging the awesome war-time scientific coordination for more positive means. In trying to find some way to salvage the infrastructure and intellectual prowess that was used in such a destructive way, Vannevar latches onto this notion of intellectual contributions. His techno-optimism is both refreshing and depressing (since technology has not solved many of the problems he hoped it might).

Remarkably, for someone sometimes considered the "father of HCI", many of his beliefs and actions run counter to what the field has become. For instance, as president of the Carnegie Institute of Washington in the 1930's, he evidently saw little value in the humanities and the social sciences, and cut funding for a journal dedicated to describing the cultural influences of technology. These beliefs of his do come through in the descriptions of the technology in "As We May Think": highly technical, designed for the work environment, with little to no though to how the technology might affect life outside of the lab.

The essay was a product of its time, and while we may recognize various limitations (such as the fact that scientists are always referred to as "he" throughout the piece), there is much to be lauded about the forsight and vision shared by Vannevar. I also find his enthusiasm -- especially knowing his role in overseeing thousands of research projects -- refreshing. Take this passage, where he marvels at the fact that complex machinery works so well:

```
Machines with interchangeable parts can now be constructed with great economy of effort. In spite of much complexity, they perform reliably. Witness the humble typewriter, or the movie camera, or the automobile. Electrical contacts have ceased to stick when thoroughly understood. Note the automatic telephone exchange, which has hundreds of thousands of such contacts, and yet is reliable. A spider web of metal, sealed in a thin glass container, a wire heated to brilliant glow, in short, the thermionic tube of radio sets, is made by the hundred million, tossed about in packages, plugged into sockets—and it works! Its gossamer parts, the precise location and alignment involved in its construction, would have occupied a master craftsman of the guild for months; now it is built for thirty cents. The world has arrived at an age of cheap complex devices of great reliability; and something is bound to come of it.
```

### Sketchpad response:

The first thing that strikes me about this paper is how closely it relates to the idea of Direct Manipulation - even though Schneiderman's paper on that subject wasn't published until nearly 20 years later! Specifically, choosing a graphical representation of data that is best shared visually is a perfect example of moving away from the "conversation metaphor" and towards the "model-world" metaphor described by Hutchins, et al. in their 1985 paper. 

I'm also drawn to the extraordinarily tangible interface Sutherland describes: zooming in by turning knobs, flipping switches to change functions: the whole system sounds as complicated as a pilot's cockpit (or the modern implementation of most CAD programs #burn #shade #iwentthere). Sutherland goes on to describe in great detail how one would construct a perfect hexagon or a perfect circle, and I'm very curious about how the average person in 1964 - who had never seen a computer, much less a graphical user interface like this one - would possibly interpret this. Would the system seem useful or just silly? Would it seem overly complicated? It's a reminder for myself to keep an open mind about how useful new interfaces may appear: and especially that we may not be able to predict the effect they'll have.

I'm also fascinated by the particular level of detail in the paper. It seems clear that the audience was expected to be those who had access to and familiarity with computers and compilers. Sutherland blithely references pointers with no explanation of what those are, apparently assuming that his audience needs no explanation.

I LOVE that the system basically teaches the user about one of its limitations by using that limitation as a control signal: the user indicates that they are finished drawing by flicking the pen too quickly for the system to track. I don't think it was intentionally done this way, but it provides the user with a mental model of how the system works, by revealing what might otherwise be considered a bug! Delicious.

### Social Psychological Aspects of Computing response:

I deeply appreciated this paper as yet another stepping stone along the path towards modern-day HCI. The combination of many fields - especially those well-equipped to study humans - is an enormous part of what I love about HCI. 

One of my favourite sections in this paper is where they describe some of their findings in the study they did:
The authors list some examples of uninhibited behavior:
```
subjects swearing, individuals shouting at their
terminals, and groups refusing to make a group
decision until a group member gave in
```

This is so comical, especially when constrasted with the formal, academic style of writing. But I was later struck by how much it is basically a description of how I interact with Twitter: swearing and shouting at my smartphone. This made me question whether or not we've actually progressed in terms of the way we interact with computational devices. Specifically, the authors also point out that managers make qualitatively different decisions when using online tools. Email is ubiquitous now - what effects does this have on decision-making processes that we aren'te even aware of? Jonathan Grudin's paper on Groupware stated that about 7% of email messages spanned more than 1 management level (seems small until you realize 0% did before). How would these authors interpret current email norms/expectations/behaviors?



### Other notes from the papers



Interesting:
```
People did not know exactly when
their arguments were understood or agreed to, and
consequently everyone believed they had to exert
more effort to be understood. 
```

Describing Twitter oh god:
```
 shift and uninhibited behavior, except indirectly.
Perhaps it was frustrating for people to be
discussing a problem inefficiently; they might have
become angry and, hence, more extreme in decision
making and more uninhibited.
A second explanation of our find
```

```
A final explanation for our results is that electronic
communication involves a process of depersonalization
or a redirection of attention away from
one's audience. Suppose computer-mediated communication
prevented personal feedback and individuating
information and at the same time lacked
a shared etiquette and, further, was influenced by
norms from the computer subculture. This could
have made group members more responsive to immediate
textual cues, more impulsive and assertive,
and less bound by precedents set by societal norms
of how groups should come to consensus. This
explanation fits our data. H
```
