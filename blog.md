---
layout: page
title: posts
---

# posts

<ul class="post-list">
{% for post in site.post reversed %}
<li>
<span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
<a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
{{ post.title }}</a>
</li>
{% endfor %}
</ul>

<a href="{{ '/feed.xml' | prepend: site.url }}">rss</a>

<small> &copy; {{ site.time | date: '%Y' }} / {{ site.author.name }} / [email][mail]</small>

[pg]:http://pgbovine.net
[cs]:http://www.cs.rochester.edu
[cal]:http://www.eecs.berkeley.edu/
[rss]:/feed.xml
[mail]:mailto:jeremy.warner@berkeley.edu

