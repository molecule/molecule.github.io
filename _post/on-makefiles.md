---
layout: post
date: 2014-10-09
---

Earlier this semester, I sought and recruited the help of [Charles
Lehner](https://celehner.com/) to write a script that would let me compile all
files with the ‘_.sp_’ extension using HSPICE, and put the command line output
into a file of the same name, but with an extension of ’_\*.lis_’. This was for
a class on IC design I was taking
([ECE 222](http://www.ece.rochester.edu/courses/ECE222/syllabus.htm))
in the spring of 2014.

I could not figure out how to do this with just a basic script, but he told me
of a program on most \*NIX based systems called _make,_ which was designed to
do exactly this sort of stuff.
**[Here](https://gist.github.com/jeremywrnr/11046931)** is a link to the
makefile, which is run simply by entering the command ‘_make_’ in a folder
where there is a file called ’_Makefile_’.

Similarly, you can enter other commands that can be run via ‘_make _fakecommand
‘. By default, the command ‘_make_’ runs the first command found in the
makefile, and all other commands must be referenced with their command name. So
for example, the makefile linked above contains a command called clean, which
deletes all of the files ending with the ’\*.lis’ extension. This is invoked by
entering ’_make clean_’.

One of the great things about this program is that before running on a file, it
checks to see if there have any changes in the file (which is the only case in
which it would be worth retesting them). In addition to HSPICE (netlist
compiler), I imagine this would be incredibly useful when running any sort of
code that is distributed over more than one file and requires compilation
(java, c, etc).

Anyways, this was incredibly convenient, and made my time dealing with HSPICE
slightly more bearable. Hats off to you Charlie!

