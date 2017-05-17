---
title: about
layout: default
projects:
    -
        name: 'CodePilot'
        link: /project/codepilot
        imag: /src/img/gitlogo2.gif
        tags: [res, app]
        desc: collaborative IDE with GitHub integration
    -
        name: mewsician
        link: /project/mewsician
        imag: /src/img/mewsician.png
        tags: [em, app, iot]
        desc: your friendly musical education companion
    -
        name: copernicium
        link: https://jeremywrnr.com/copernicium/html/
        imag: /src/img/cn.png
        tags: [cli]
        desc: distributed version control system (ruby)
    -
        name: tv.rb
        link: http://github.com/jeremywrnr/tv.rb
        desc: a fuzzy retro tv emulator in your shell
        tags: [cli]
        bkup: /src/img/tv.jpg
        imag: https://camo.githubusercontent.com/4710696a4de77540e0532b2513476ef0dbc2b52d/687474703a2f2f692e696d6775722e636f6d2f69325a557059682e676966
    -
        name: mr. coffi
        link: /mrcoffi
        imag: /src/img/mrcoffi.png
        tags: [em, iot]
        desc: wirelessly controlled smart coffee maker
    -
        name: booker
        link: https://github.com/jeremywrnr/booker
        desc: tab complete + open chrome bookmarks
        imag: https://camo.githubusercontent.com/d5bcff9b2f68f340f445fd1e24df4fc4cb9bcd62/687474703a2f2f692e696d6775722e636f6d2f7979647162336d2e676966
        tags: [cli]
        bkup: /src/img/booker.jpg
    -
        name: wampum
        link: /project/wampum
        imag: /src/img/wampum-hand.jpg
        tags: [em, iot]
        desc: adhoc network of heart-rate monitors
    -
        name: life of the party
        link: /project/lotp
        desc: motion-controlled dance party led arrays
        tags: [em, iot]
        imag: /src/img/lotp.png
    -
        name: unrobot
        link: http://challengepost.com/software/oh-my-myo
        imag: /src/img/unrobot.png
        tags: [em]
        desc: robot arm controlled by myo armband
    -
        name: myo-cart
        link: http://challengepost.com/software/m-aah-yo-kart
        imag: /src/img/myocart.jpg
        tags: [iot]
        desc: arm driving racing, uses oculus rift/myo
    -
        name: tictactoe.r
        link: https://github.com/jeremywrnr/tictactoe.r
        desc: tictactoe AI in R
        tags: [cli]
        imag: /src/img/tictactoe.jpg
    -
        name: tarr
        link: https://github.com/jeremywrnr/util/blob/master/tarr
        desc: simple, easy-to-use wrapper for tar
        tags: [cli]
        imag: /src/img/mind-cat.jpg
    -
        name: GitHub
        link: https://github.com/jeremywrnr
        imag: /src/img/github.png
        tags: []
        desc: fresh open-source repos of code
    -
        name: Ruby Gems
        link: https://rubygems.org/profiles/jeremywrnr
        imag: /src/img/rubygem.png
        tags: []
        desc: all hosted on rubygems.org
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


# jeremy b. warner

<div class="clearfix">
<img id="prof" alt="Look on my Face, ye mighty, and despair. " src="/src/img/hills.jpg">

<h3>
<a href="/cv">resume</a> —
<a href="/papers">papers</a> —
<a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#106;&#101;&#114;&#101;&#109;&#121;&#046;&#119;&#097;&#114;&#110;&#101;&#114;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;">email</a>
</h3>

<p> Molly Nicholas is a PhD student studying Human Computer Interaction 
  with <a href="http://www.paulos.net/">Eric Paulos</a> in the <a href="http://www.cs.berkeley.edu" target="_blank">Computer Science department</a> at UC Berkeley. She is particularly interested in exploring how issues of identity, expression, and experience intersect with new media studies and performance studies.  Previously, she worked for two years as a Software Engineer at Qualcomm, where she developed FIRST Robotics’ new robotics platform. She is also a dancer, <a href="http://www.lunfan.com/">Hired Hand with Liebe Wetzel's Lunatique Fantastique</a>, <a href="http://circuscenter.org/clown">Clown Conservatory-trained clown</a>, singer, and casual contortionist living in Berkeley, CA.  Molly received her B.A. from the University of California, Berkeley with a double major in Computer Science and Cognitive Science in 2014.

</div><!--clearfix-->

<div id="tags">
  <span class="tag res">research</span>
  <span class="tag cli">cli tool</span>
  <span class="tag iot">iot / wireless</span>
  <span class="tag em">embedded</span>
  <span class="tag app">webapp</span>
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
