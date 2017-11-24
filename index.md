---
title: about
layout: default
projects:
    -
        title: Illumination Aesthetics
        desc: CHI 2017
        description: This is a long description of the Illumination Aesthetics project.
        tags: [res, win]
        imag: /src/img/ia-thumbnail.jpg
        link: /project/illumination-aesthetics
    -
        title: Qbadge
        desc: Qualcomm
        description: This is a longer description of the Qbadge project.
        tags: [per, win, wear]
        imag: /src/img/qbadge.jpg
        link: /project/qbadge
    -
        title: Lightning Cloud
        description: This is a longer description of the cloud project.
        desc: Personal project
        tags: [per, win]
        imag: /src/img/lightning-cloud-crop.gif
        link: /project/lightning-cloud
    -
        title: Wearable Neopixel Sparkle
        desc: Personal project
        tags: [per, wear]
        imag: /src/img/wearable-sparkle.jpg
        link: /project/neopixel-sparkle
    -
        title: InfraRed Receiver
        desc: Personal project
        tags: [per]
        imag: /src/img/ir-receiver.jpg
        link: /project/infrared-receiver
    -
        title: Photo Wall
        desc: Personal project
        tags: [per]
        imag: /src/img/photo-wall.jpg
        link: /project/photo-wall
    -
        title: sketchboard
        desc: Critical Making
        tags: [cla]
        imag: /src/img/sketchboard-underbelly.jpg
        link: /project/sketchboard
    -
        title: adVenture
        desc: Critical Making
        tags: [cla]
        imag: /src/img/adventure.jpg
        link: /project/adventure
    -
        title: 24 Second Food + Fitness
        desc: Critical Making
        tags: [cla]
        imag: /src/img/24-second-food-and-fitness.jpg
        link: /project/food-and-fitness
    -
        title: GitHub
        link: https://github.com/molecule
        imag: /src/img/github.png
        tags: []
        desc: fresh open-source repos of code


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
    -
        title: Demo Videos
        link: https://www.youtube.com/playlist?list=PL3iSl6720Vm7j3O9ex-FjVuZ9ZaiL4ph0
        imag: /src/img/youtube.png
        tags: []
        desc: (mostly) working video demos
---


# molly jane nicholas
[//]: # ( m: &#109 o: &#111 l: &#108 e: &#101 c: &#99 u: &#117 @: &#64 y: &#121 )
[//]: # ( molecule: &#109;&#111;&#108;&#101;&#99;&#117;&#108;&#101)
[//]: # ( @berkeley.edu: &#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117; )


<div class="clearfix">

<div style="float: left; text-align:center; width:240px; padding:10px; font-size:8px; line-height:8px">
<img src="/src/img/general-molly.jpg"/>
<span style="display:block;"> Fig. a) The author, depicted as a great military leader. </span>
</div>

<p> Molly Jane Nicholas is a PhD student studying Human Computer Interaction 
  with <a href="http://www.paulos.net/">Eric Paulos</a> in the <a href="http://www.cs.berkeley.edu" target="_blank">Computer Science department</a> at UC Berkeley. She is particularly interested in exploring how the performing arts and technology can combine in new and interesting ways. Previously, she worked for two years as a Software Engineer at Qualcomm, where she developed FIRST Robotics’ new robotics platform. She has also been a dancer, worked as a puppeteer with <a href="http://www.lunfan.com/">Liebe Wetzel's Lunatique Fantastique</a>, and trained circus arts at the <a href="http://circuscenter.org/clown">Clown Conservatory</a>.  Molly Jane received her B.A. from the University of California, Berkeley with a double major in Computer Science and Cognitive Science in 2014. </p>


<h3>
    news and updates
</h3>

<div style="height:115px; overflow:scroll">
  <table>
  <tr>
    <td>Our latest project was accepted to TEI!</td>
    <td>19 Oct 2017</td>
  </tr>
  <tr>
    <td>Finished up <a href="http://bcnm.berkeley.edu/news-research/1404/summer-research-dispatch-molly-nicholas-wearable-tech-in-hospitals">my summer research</a> working with the wonderful <a href="https://medicalclownproject.org/">Medical Clown Project!</a> </td>
    <td>26 Aug 2017</td>
  </tr>
  <tr>
    <td><a href="https://molecule.github.io/post/prelims%20feedback%20from%20examiners/">Passed prelims!</a> See my blog for <a href="https://molecule.github.io/post/prelims%20from%20my%20perspective/">notes.</a></td>
    <td>22 Aug 2017</td>
  </tr>
  <tr>
    <td>Paper rejected from UIST :(</td>
    <td>22 May 2017</td>
  </tr>
  <tr>
    <td><a href="https://molecule.github.io/project/illumination-aesthetics/">Our paper</a> won a Best Paper Award at CHI!!!</td>
    <td>07 May 2017</td>
  </tr>
  <tr>
    <td>Illumination Aesthetics, work on exposing light as a material, was accepted to CHI 2017!</td>
    <td>16 Jan 2017</td>
  </tr>
</table>
</div>

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
  <div class="project-wrapper">
    
    <img src="{{ project.imag }}" class="project-image"/>
    <div class="project-info">
        <h4>{{ project.title }} </h4>
        <small>{{ project.desc }}</small>
  </div>
  <div class="project-tags">
    {% for tag in project.tags %} <div class="tag {{tag}}">{{tag}}</div>
    {% endfor %}</div>
  </div>
  <div class="project-description"> {{project.description}} </div>
</a>
</div>

<div id="project_details">
    <div id="project_details_title">{{ project.title }}</div>
    <div id="project_details_description">{{ project.description }}</div>
</div>


{% endfor %}
</div>


<p style="margin: 0.5em 0em 10em 0em;">
<small><i>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="/src/js/index.js"> </script>

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105325825-1', 'auto');
  ga('send', 'pageview');

</script>


<!--<a href="/mit-license">license</a> --->
updated {{ site.time | date: "%b %-d, %Y"}} </i></small>
</p>
