---
layout: post
date: 2014-01-01
---
seamless file management

A neat method I have recently been appreciating and applying more is the
ability to go back and forth between the GUI-based Windows Explorer and
console-based Powershell (keeping the current directory).&nbsp;

I posted
[earlier](http://jeremywrnr-dev.tumblr.com/post/82746263121/instant-powershell)
when I first found out about how to open new powershell prompt in the current
explorer directory (alt-d, powershell, enter). The complement to this is
entering ‘explorer .’ in powershell, which opens a new explorer window, opened
at the current directory (represented in powershell as the . ). These methods
allow for easily switching between the two interfaces depending on which is
optimal for the current task.

Now I just need to figure out how to do this sort of thing on macs as
well…&nbsp;

seamless file management II

So I [posted in the
past](http://jeremywrnr-dev.tumblr.com/post/94486305139/seamless-file-management)
on easy context switching (GUI \<-\> cmd line)&nbsp;when dealing with files
systems on windows, and the ‘close-enough’ equivalent on mac wasn’t super
difficult to figure out. To jump from the terminal to finder (mac’s version of
window explorer), just enter 'open .’ as a command on terminal, which opens the
current directory in finder. Once in finder, you can go back to the directory
you came from in terminal by pressing 'cmd-up’, and two finger clicking on the
directory you just came from. This brings up a popup context menu with the
bottom option of 'New Terminal at Folder’ - exactly what I was looking for.

All this mouse movement sucks though, so once you double click on the folder,
you can just type 'new’ in, and then the bottom option should be selected. If
it is, then you can press enter and avoid more mouse actions.&nbsp;

seamless file management III

At some point, I started using [Alfred](http://www.alfredapp.com/) to further
optimize how I could transverse back and forth between CLI and GUI. Turns out
there are Alfred workflows (
[source](https://github.com/LeEnno/alfred-terminalfinder)) that make this jump
very easy, with simple shortcuts that I use w/ much pleasure:&nbsp;

- `ft`: open current&nbsp; **Finder** &nbsp;directory in&nbsp; **Terminal**
- `tf`: open current&nbsp; **Terminal** &nbsp;directory in&nbsp; **Finder**

Unfortunately, workflows are a paid feature of Alfred… which sucks. Still, I
use them all the time and generally find Alfred very handy. To read up more on
Alfred workflows, ([click here](http://support.alfredapp.com/workflows)).

