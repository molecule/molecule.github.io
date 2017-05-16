---
layout: post
date: 2015-3-11
---

In OSX (and probably other OSes), you can use `lpr` to physically print out
documents from the terminal. this is handy if you want to print out several
documents, since you avoid having to open and print each one. for example:

    lpr -P <PRINTER> -# 2 doc1.pdf doc2.pdf

will print out 2 copies of each document listed as arguments. to find the value
you should enter for `<PRINTER>`, you can run <code>lpstat -p</code> to see the
available devices and their statuses. for more options of <code>lpr</code>, run
<code>man lpr</code>.

