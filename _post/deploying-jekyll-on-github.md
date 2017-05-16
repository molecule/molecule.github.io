---
layout: post
date: 2014-06-02
---

I recently made a user page for myself with [jekyll](http://jekyllrb.com/) on
github. There was a lot of things I initially tripped over, so I am writing
this as a reference for my future self, and as an informal, potentially helpful
guide to anyone struggling with similar issues. Jekyll is [not fully
supported](http://jekyllrb.com/docs/windows/#installation) on windows, but this
method got me up and running.

First off, using jekyll requires ruby to be installed, along with a few other
dependencies. This process is a bit more complicated on windows machines, but
after toying around with different versions of the ruby/python requirements
(yes - the [windows guide](https://github.com/juthilo/run-jekyll-on-windows)
asks you to install both), I used
[RailsInstaller](http://railsinstaller.org/en), which worked perfectly with
jekyll on windows, 64bit.

With the individually installed distributions of Ruby and Python, the site
would serve correctly, but it give errors when I tried to auto-regenerate the
site (_jekyll serve -w_). I had to stop and restart the service&nbsp;when I
wanted to check out my changes, and then refresh the page. Very inefficient
when compared with the awesome auto-regeneration feature where it watches for
changes you make and then re-serves the site automatically for you.

Now that I had jekyll up and running successfully, I searched around for some
cool web themes that were out there, and came across this open source theme (
[so-simple](http://mademistakes.com/articles/so-simple-jekyll-theme/)). It had
a nice clean theme, and despite being designed for blog sites, I thought it
would be a good one for my user page. I cloned the repo to my desktop from
github, edited some of the basic information in the config yaml file, and then
uploaded to github, in a repo named (
[jeremywrnr.github.io](https://github.com/jeremywrnr/jeremywrnr.github.io)).

One of the most awesome parts about the using jekyll is that github pages will
automatically recognize and host the user site at username.github.io (which for
me was jeremywrnr.github.io). It is also really good for hosting project sites
with jekyll, you just make a branch called gh-pages, and upload your jekyll
site to it. This is a really cool way to combine the code for a project, and
the information about the project and how/why it works into a single dense
repo. Very nice!

Things were pretty easy here for me since I was doing the user page, so you
don’t need to create a gh-pages branch for the hosting to occur. My site was
live at&nbsp;jeremywrnr.github.io (whew), but I wanted to be able to use a DNS
server to have that actual name people saw when viewing the site to be
jeremywrnr.com, which I had registered with godaddy.com. This led to another
small adventure, and I ended up learning a little about A records, CNAMES, and
how they all relate. I will save that for another post though!

## custom domains w/ github pages

After putting a site with jekyll on github, I set out to use a DNS server to
remap the domain provided by github to the custom one I had registered,
jeremywrnr.com. This involved some tricks such as dealing with the A and CNAME
records. In retrospect, it wasn’t a terribly complex problem to solve, but my
unfamiliarity with the subject led to some trip ups, including infinite
redirect loops. Without further ado, here is the current (seemingly) functional
setup I have configured for my site.

My [site repo](https://github.com/jeremywrnr/jeremywrnr.github.io) has a CNAME
file in it which points to the custom domain I have &nbsp;registered. At first,
I was using the forwarding service that godaddy offers, so that was throwing
the reference right back at my github page location, which resulted in an
inifinite redirect loop. After some confusion, I removed the CNAME, and the
forwarding service to ponder on the issue.

After looking more into the problem ([this stackexchange q
helped](http://stackoverflow.com/questions/18222822/how-do-i-configure-dns-in-godaddy-control-panel-to-point-domain-to-github-page)),
it seemed that I needed to create an A name record with go daddy that pointed
to the github servers, and then the CNAME would link which requests where given
my page. SO, my current understanding:

1. user requests [jeremywrnr.com](http://jeremywrnr.com)
2. my domain points it to githubs servers (from A name)
3. github looks at the incoming domain
4. finds and serves page with matching CNAME

One more thing: even once I got this up and running, the config yaml in my
jekyll site had a url option, which specified a path to tack onto your site’s
root domain (see [here](http://jekyllbootstrap.com/usage/blog-configuration.html#toc_2) for
explanation). I had entered this as jeremywrnr.com, so what was actually being
served on my site was jeremywrnr.com/jeremywrnr.com, which was doing all sorts
of funky stuff. This error was a quick fix, I just commented out my url line in
the config file, synced with github, and all worked as desired.

For a good reference on setting up your page, see [this
link](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages).&nbsp;

