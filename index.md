---
title: about
layout: default
projects:
    
    -
        name: Illumination Aesthetics
        desc: Light as a Creative Material within Computational Design. CHI 2017
        tags: [res, win]
        imag: /src/img/ia-thumbnail.jpg
    -
        name: Qbadge
        desc: Personal project
        tags: [per, win, wear]
        imag: /src/img/qbadge.jpg
    -
        name: Lightning Cloud
        link: https://mollynicholas.wordpress.com/projects/
        desc: Personal project
        tags: [per, win]
        imag: /src/img/lightning-cloud.jpg
    -
        name: Wearable Neopixel Sparkle
        link: https://mollynicholas.wordpress.com/projects/
        desc: Personal project
        tags: [per, wear]
        imag: /src/img/wearable-sparkle.jpg
    -
        name: InfraRed Receiver
        link: https://mollynicholas.wordpress.com/projects/
        desc: Personal project
        tags: [per]
        imag: /src/img/ir-receiver.jpg
    -
        name: Photo Wall
        link: https://mollynicholas.wordpress.com/projects/
        desc: Personal project
        tags: [per]
        imag: /src/img/photo-wall.jpg
    -
        name: sketchboard
        link: https://mollynicholas.wordpress.com/projects/
        desc: Class project
        tags: [cla]
        imag: /src/img/sketchboard-underbelly.jpg
    -
        name: adVenture
        link: https://mollynicholas.wordpress.com/projects/
        desc: Class project
        tags: [cla]
        imag: /src/img/adventure.jpg
    -
        name: 24 Second Food + Fitness
        link: https://mollynicholas.wordpress.com/projects/
        desc: Class project
        tags: [cla]
        imag: /src/img/24-second-food-and-fitness.jpg
    -
        name: GitHub
        link: https://github.com/molecule
        imag: /src/img/github.png
        tags: []
        desc: fresh open-source repos of code
    -
        name: Demo Videos
        link: https://www.youtube.com/playlist?list=PL3iSl6720Vm7j3O9ex-FjVuZ9ZaiL4ph0
        imag: /src/img/youtube.png
        tags: []
        desc: (mostly) working video demos

hidden:
    -
        name: bb
        link: https://github.com/RocHack/bb
        desc: cli for a blackboard learn installation
        tags: [hello, there]
        imag: /src/img/blackboard.png
    -
        name: open-remote
        link: https://github.com/jeremywrnr/open-remote
        imag: /src/img/rubygem.png
        tags: [hello, there]
        desc: open a git repo's remote host website from your shell
    -
        name: connect4.pl
        link: https://github.com/jeremywrnr/connect4.pl
        desc: connect 4 AI in perl <i>(forgive me)</i>
        tags: [hello, there]
        imag: /src/img/connect4.jpg
---


# molly jane nicholas
[//]: # ( m: &#109 o: &#111 l: &#108 e: &#101 c: &#99 u: &#117 @: &#64 y: &#121 )
[//]: # ( molecule: &#109;&#111;&#108;&#101;&#99;&#117;&#108;&#101)
[//]: # ( @berkeley.edu: &#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117; )


<div class="clearfix">
<img id="prof" alt="Gaze upon my Face, ye mighty, and despair. " src="/src/img/general-molly.jpg">



<h3>
<a href="/cv">resume</a> —
<a href="/papers">papers</a> —
<a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#109;&#111;&#108;&#101;&#99;&#117;&#108;&#101;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;">email</a>
</h3>

<p> Molly Jane Nicholas is a PhD student studying Human Computer Interaction 
  with <a href="http://www.paulos.net/">Eric Paulos</a> in the <a href="http://www.cs.berkeley.edu" target="_blank">Computer Science department</a> at UC Berkeley. She is particularly interested in exploring how issues of identity, expression, and experience intersect with new media studies and performance studies.  Previously, she worked for two years as a Software Engineer at Qualcomm, where she developed FIRST Robotics’ new robotics platform. She is also a dancer, <a href="http://www.lunfan.com/">Hired Hand with Liebe Wetzel's Lunatique Fantastique</a>, <a href="http://circuscenter.org/clown">Clown Conservatory-trained clown</a>, singer, and casual contortionist living in Berkeley, CA.  Molly Jane received her B.A. from the University of California, Berkeley with a double major in Computer Science and Cognitive Science in 2014. </p>

</div><!--clearfix-->

<div id="tags">
  <span class="tag res">research</span>
  <span class="tag cla">class project</span>
  <span class="tag per">personal projects</span>
  <span class="tag wear">wearable</span>
  <span class="tag win">award-winning</span>
</div>

<div id='projects'>
{% for project in page.projects %}
<div class="project">
  <a href="{{ project.link }}">
  <img src="{{ project.imag }}" class="project-image"/>
  <div class="project-info">
  <h3>{{ project.name }} </h3>
  <small>{{ project.desc }}</small>
  </div>
  </a>
  <div class="project-tags">
  {% for tag in project.tags %} <div class="tag {{tag}}">{{tag}}</div>
  {% endfor %}</div>
</div>
{% endfor %}
</div>


<p style="margin: 0.5em 0em 10em 0em;">
<small><i>
<!--<a href="/mit-license">license</a> --->
updated {{ site.time | date: "%b %-d, %Y"}} </i></small>
</p>

<footer>
<script src="/src/js/project.js" async>
</footer>
