---
layout: page
title: posts
---

# recipes
A collection of my favourite recipes.
<ul class="recipe-list">
{% for recipe in site.recipes %}
<li>
<a class="recipe-link" href="{{ recipe.url | prepend: site.baseurl }}">
{{ recipe.title }}</a> - {{ recipe.description | truncate: 160 }}
</li>
{% endfor %}
</ul>

# posts

Click below for various blog posts I've written.

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
[cal]:http://www.cs.berkeley.edu/
[rss]:/feed.xml
[mail]:mailto:molecule@berkeley.edu

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105325825-1', 'auto');
  ga('send', 'pageview');

</script>
