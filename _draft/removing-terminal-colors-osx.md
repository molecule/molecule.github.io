---
layout: post
date: 2014-01-01
---
removing terminal colors osx

On osx, sometimes you want to copy output of a program, but often that output
will be colored. A quick fix is to pip it into sed and remove all of the
terminal color escape sequences.

    alias decolor='sed -E "s/"$E"\[([0-9]{1,3}((;[0-9]{1,3})*)?)?[m|K]//g"'

I notice that sometimes this strips the first letter of a colored match as
well, which is unfortunate, but better than nothing. Also note that this regex
would most likely be a little different if you want to run it on linux/unix
system. Anyway, now you can simply pipe the original output into ‘decolor’
to remove the color codes, and perhaps route it to the system clipboard (w/
pbcopy) for easy pasting later on:

    $ original_cmd | decolor | pbcopy
