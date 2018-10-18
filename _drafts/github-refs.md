---
layout: post
share: true
comments: true
tags: [Documentation]
date: 2018-10-14
description: A collection of frequently-used github commands.
image: https://github.com/molecule/molecule.github.io/blob/master/src/img/map-image.svg
---

(Written by Molly)

# Intro to Github
Github is probably the most useful tool I know of. It's also a total mind melt the first time you use it! There are lots of tutorials out there...and now there's one more :)

## Git vs Github
**Git** is a version control system. This means that it saves a history of your code changes, allows you to revert to older versions, have multiple branches with different versions, and merge different versions of code together without a major headache. You can use git only on a single computer, only by yourself, and still have a wonderful time.

**Github** is the distributed version of git. At a high level, the only difference between git and github is that with github, your code is in "the cloud" instead of only on your computer. This (plus the merge features in git) allows you to easily collaborate with other people. But you can also use github by yourself - it's still wonderful and useful. For example, I keep all my academic programming 

## A note
Git and github can both be confusing when you're first introduced to them. Here's my timeline for learning git:

- 2013 (Summer): I had a very patient friend walk me through it for an hour. I didn't get it (hehe). 
- 2013 (Fall): A few months later I attended an "intro to git" workshop where they walked us through how it worked. I didn't get it after that either. 
- 2014 (Spring): The next semester, we had to use git in class as a requirement. I was able to go through the motions usually but I didn't have any idea of what was really happening and I would panic if anything went wrong. 
- 2014 (Fall): Then I started working full-time as an engineer and had to use git and github every single day. Finally, one of my coworkers spent an hour with me, telling me a few more details about git. *Finally* I started to get it. 

That was a full year from start to finish. So don't worry if it takes some time for things to fully click.

## Tutorial
We're going to walk through [the official github intro tutorial](https://guides.github.com/activities/hello-world/) together. They teach you about branches right away. I suspect this is because branches are excellent and everyone should use branches: but they're *very* confusing when you first start. So we're going to jump around a bit and leave branches to the end. We'll do things in this order:

- Step 0: Install and setup git. [This](https://lifehacker.com/5983680/how-the-heck-do-i-use-github) has a nice walk-through.
- Step 1: Create a Repository without a README. (For a more in-depth discussion of repos, staging, and commits, check out [this tutorial](https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners)).
- Step 3: Make and commit changes.
- Push to the remote repo.
- Make changes on the remote repo.
- More changes on local, try to push. 
- Pull from remote repo.

## Post notes
0. ~~Mental model~~
1. basic flow (git status, git diff, git add, git commit, git push)
2. Variations (commit chunks of a file: https://stackoverflow.com/questions/1085162/commit-only-part-of-a-file-in-git)
3. Troubleshooting
4. Danger zone
