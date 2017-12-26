---
layout: default
title: Recipes
---

# recipes

{% for recipe in site.recipes %}

<div class="recipe">
    <h2><a href="{{ recipe.url }}">{{ recipe.title }}</a></h2>
</div>

<p class="post-excerpt">{{ recipe.description | truncate: 160 }}</p>

{% endfor %} 
