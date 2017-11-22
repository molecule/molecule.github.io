Jacques Cohen (Ed.). 1993. Special issue on computer augmented environments: back to the real world. Commun. ACM 36, 7 (July 1993) 

Steven Feiner, Blair Macintyre, and Dorée Seligmann. 1993. Knowledge-based augmented reality. Commun. ACM 36, 7 (July 1993), 53-62. DOI= http://dx.doi.org/10.1145/159544.159587

### Special issue on computer augmented environments: back to the real world.

I was surprised by this interesting comment from the authors:
```
 VR allows us to escape from the computer screen 
```
I feel like VR is the opposite of escaping from the computer screen. Reading on, it seems they agree, which is why this comment is a bit confusing. I would agree that it lets us escape the keyboard maybe? By, as they say, using our whole bodies. 

This very short intro to the special issue on "computer-augmented environments" eads like a list of classic papers. Wellner? Weiser? Resnick? (I assume that's Mitchell Resnick from MIT Media Lab, who now works on "Lifelong Kindergarten" but I admit I didn't check!). 

I like when papers distinguish between "ubiquitous computing" and augmented reality. These authors are correct that they're both about incorporating computing technology into the physical world. 


### Knowledge-based augmented reality.
#### Paper structure
While I was initially surprised by the use-case of "end-user printer maintenance", it actually ended up being a pretty good example that helped me visualize how the system worked. I suspect this is also because they were likely funded by a group working on improving office spaces (like Weiser's work earlier), and focused on this because of their employer/funder. 

The way this paper is written is the wrong level of detail for me to actually visualize/understand what they built. I wanted a video, or maybe a high-level overview of the functionality (as opposed to a medium-level view of the underlying architecture). It's too detailed to wrap my head around, but certainly not detailed enough to reproduce. I found myself skipping over large chunks of the paper, uninterested in which servers did what.

I wish they had walked us through a concrete example of a use-case, instead of introducing a lot of italicized _terms_. Instead, this reads to me like a very dry project spec. I also wanted one place where they defined all the terms, like a table. It was annoying trying to keep track of everything that had ever been italicized throughout the paper.

#### Interesting new interactions
If the cartridge is already in view volume and not occluded, did I understand correctly that the system does nothing? But if you don't know what the printer cartridge is you're totally lost and confused (this is exactly what happens to me currently w/ instruction manuals). On the other hand, this weird limitation suggests interesting interaction choices: it encourages you to actively occlude parts of a new machine to "trigger" the system to show you things. I like imagining the bizarre dance someone would go through to find a material big enough to "occlude" a large laser printer to the system would show them the part they want to see.

#### Strange design choices
The authors describe a separation of the systems that control user interaction and those that update the designs: so do the designs suddenly update, unexpectedly and outside of your control as you're using the system? Again I had a tough time imagining how this worked based on simply their written description, so I'm not sure I understood this part, but it seems a little odd.

#### Tool details
Overall, this sounds like a very impressive research tool. Calibration steps don't even seem that bad, and the fact that they list them as describe the automated procedures for incorporating the info into the system makes the system feel complete.


### Class notes

What counts as AR? Glasses, those 3D pictures, etc. What is the "actual earliest" AR experience?
Body discomfort always a part of it: holding up tablet forever, arms extended in front for "clicking" in AR.
"humans don't have laptops, computer scientists have laptops."
How does AR disrupt learning/experiencing the world? E.g., Google maps degrading ability to navigate/learn cities/maps.
