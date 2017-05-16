---
layout: project
title: Code Pilot
---

## codepilot

<style>
img { display: inline; }
img#gitsync { width: 7em; }
img.proj { display: block; margin: auto; }
</style>

<a href="http://git-sync.com" target="_blank">
<img id="gitsync" class="proj" src="http://www.git-sync.com/images/gitlogo2.gif">
</a>

a project-wide synchronous editor: eliminate merge conflicts. for programmers
unfamiliar with the nuance of using version control while working
collaboratively.


### features

- synchronous, project-wide realtime editing on any git repo
- github API integration: edit, test, diff, branch, and commit
- import, create, document, and close github issues

<center>
<iframe width="640" height="360" src="https://www.youtube.com/embed/dYJjDUW5uEU" frameborder="0" allowfullscreen></iframe>
</center>

### synchronous editing
<center><a href="http://git-sync.com" target="_blank">
<img alt="editing" class="proj" src="http://www.git-sync.com/images/editor.png">
</a></center>

### interactive testing
<center><a href="http://git-sync.com" target="_blank">
<img alt="testing" class="proj" src="http://www.git-sync.com/images/visualize.png">
</a></center>

### github integration
<center><a href="http://git-sync.com" target="_blank">
<img alt="gitting" class="proj" src="http://www.git-sync.com/images/commit.png">
</a></center>


### background - [thesis](/ms-thesis)

This work was presented at [CHI 2016][chi].

This was the project I worked on for my MS thesis from the University of
Rochester, and was the first version of the site now hosted at [git-sync.com]
[gsync]. CodePilot is a tool meant to help people collaborate on code more
seamlessly. The model is based on that of a pilot and a co-pilot, where the
pilot does most of the actual programming, and the co-pilot performs background
coding tasks. This could include version control management, system testing,
online reference lookup, and commenting or documenting source code. This
project is open source, and the source code can be found on [GitHub][gh].


[![GitHub stars](https://img.shields.io/github/stars/jeremywrnr/git-sync.svg?style=social&label=Star&style=plastic)](https://github.com/jeremywrnr/git-sync)
[![MIT License](https://img.shields.io/npm/l/alt.svg?style=flat)](http://jeremywrnr.com/mit-license)
[![Build Status](https://travis-ci.org/jeremywrnr/git-sync.svg?branch=dev)](https://travis-ci.org/jeremywrnr/git-sync)
[![bitHound Score](https://www.bithound.io/github/jeremywrnr/git-sync/badges/score.svg)](https://www.bithound.io/github/jeremywrnr/git-sync)

<small> &copy; {{ site.time | date: '%Y' }} / {{ site.author.name }} / [email][mail]</small>

[thesis]:/ms-thesis
[gsync]:http://git-sync.com
[gh]:http://github.com/jeremywrnr/git-sync
[mail]:mailto:jeremy.warner@berkeley.edu
[chi]:https://dl.acm.org/citation.cfm?id=3025453.3025876
