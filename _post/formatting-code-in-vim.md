---
layout: post
date: 2015-10-12
---

I frequently use a vim mapping which formats and indent the entire file I am
editing, and then returns back to where the cursor initially was, centered on
the screen. Here it is, along with a deconstruction of what’s going on:

    nmap FG 1G=G``zz

1. nmap FG - make a normal-mode alias named FG. I sometimes remember this as ‘format good’
2. 1G - go to the first line of the file
3. = - perform code indentation, until…
4. G - going til the last line of the file
5. ```` - uses markers to jump back to the last position (which is whereever
   you were before you jumped to the start of the file to format it)
6. [zz](http://vimdoc.sourceforge.net/htmldoc/scroll.html#zz) - slides the
   visible lines so that your cursor is in the middle of the screen, if possible

Additionally, sometimes I just want to format a single selection of code. I can
do this my either visually selecting a section of text and then using ’`=`’ to
format it, or use ’`={some motion}`’ to format the text between where my cursor
is now, and where that motion would take me. For instance, to format a single
cohesive paragraph of code, I can use ’`=}`. Kinda looks a really smily guy, or
someone with a weird upside down mustache. More good vim formatting tips
[here](http://www.cs.swarthmore.edu/help/vim/reformatting.html).

## format a paragraph to 80 chars in vim

I have doing a lot of LaTeX editing recently, and my choice of text editor is
currently vim. I recently found out that you can make it so that when you hit
the 80th position in the line, vim enters a new line and brings the current
word you are on down to the next line. Awesome! This helps me keeping the
document organized, and can be enabled adding this to your .vimrc:

    set textwidth=79
    set formatoptions+=t

Still, what about if you want to edit one line, and add content to it, making
that line longer than it initially was? Vim will split the current line at 80
characters, but nothing will happen to the rest of the paragraph. Example
below:

![](https://31.media.tumblr.com/7066b3328c7ec2a9a48f89a07272e725/tumblr_inline_ngds06Pmo11s7hh2w.png)

There will be this awkward short line in the middle of your paragraph…
unfortunately not awesome. So I made a mapping to a series of keys that selects
and reformats the current paragraph. so that the shortest line is the last,
just perfect. I mapped it to FP (format paragraph):

    nmap FP {jV}kJgqq{j

So, quick breakdown on what is happening in this mapping:

1. {j - go to first line of paragraph
2. V - enter visual line mode
3. }k - move to last line of the paragraph
4. J - join all lines onto 1 line
5. gqq - format the current line
6. {j - return to first line of paragraph

## vim→man, vim→make

Here are two  cool tips that come in handy when working with vim. The first is
a slick integration with the system documentation for any command, and will
bring up documentation for whatever your cursor is hovering over:

    K (shift-k)

Another cool trick is that you can automatically run your makefile from vim,
just by entering

    :make

You can also just enter :mak, and vim’s command autocomplete will take over.
This can save a lot of time when compared to quitting, running make, and
reopening vim. Yay workflow optimization!

