---
layout: page
title: posts
---
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

# trips
Trip reports
<ul class="trip-list">
{% for trip in site.trips reversed %}
<li>
<a class="trip-link" href="{{ trip.url | prepend: site.baseurl }}">
{{ trip.title }}</a> - {{ trip.description | truncate: 160 }}
</li>
{% endfor %}
</ul>


<a href="{{ '/feed.xml' | prepend: site.url }}">rss</a>

[rss]:/feed.xml

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105325825-1', 'auto');
  ga('send', 'pageview');

</script>
