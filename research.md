---
title: papers
layout: page
submissions:
    -
        title: Guardians of Practice - A Contextual Inquiry of Failure-Mitigation Strategies within Creative Practices
        authors: César Torres, Sarah Sterman, <b>Molly Jane Nicholas</b>, Richard Lin, Eric Pai, Eric Paulos.
        link: http://www.hybrid-ecologies.org/projects
        img: /src/img/dis18-guardians.png
        conf: ACM Conference on Designing Interactive Systems
        conf-short: (DIS '18)
        conf-link: http://dis2018.org/
        award:
        links: <a href="http://www.hybrid-ecologies.org/uploads/project/paper/25/Torres_et_al._-_2018_-_Guardians_of_Practice_A_Contextual_Inquiry_of_Fai.pdf">Paper</a>
        video:
    -
        title: AlterWear - Battery-Free Wearable Displays for Opportunistic Interactions.
        authors: Christine Dierk, <b>Molly Jane Nicholas</b>, Eric Paulos.
        link: http://www.hybrid-ecologies.org/projects
        img: /src/img/alterwear-square-gif.gif
        conf: ACM Conference on Human Factors in Computing Systems
        conf-short: (CHI '18)
        conf-link: https://chi2018.acm.org/
        award:
        links: <a href="http://www.hybrid-ecologies.org/uploads/project/paper/24/18_CHI_AlterWear.pdf">Paper</a> | <a href="https://www.youtube.com/watch?v=J88p4Cf2DSs&t=1s">Video</a>
        video:
    -
        title: Häiriö - Human Hair as an Interactive Material.
        authors: Christine Dierk, Sarah Sterman, <b>Molly Jane Nicholas</b>, Eric Paulos.
        link: https://molecule.github.io/project/hairio/
        img: /src/img/hairio-thumbnail.JPG
        conf: ACM Conference on Tangible, Embedded, and Embodied Interaction
        conf-short: (TEI '18)
        conf-link: https://tei.acm.org/2018/
        award:
        links: <a href="http://www.hybrid-ecologies.org/uploads/project/paper/23/p148-dierk.pdf">Paper</a> | <a href="https://www.youtube.com/watch?v=8JV2D7gJ5HI">Video</a> | <a href="https://www.instructables.com/id/HairIO-Hair-As-Interactive-Material/">Instructable</a>
        video: https://www.youtube.com/watch?v=8JV2D7gJ5HI
    -
        title: Illumination Aesthetics - Light as a Creative Material within Computational Design.
        authors: César Torres, Jasper O’Leary, <b>Molly Jane Nicholas</b>, Eric Paulos.
        link: https://molecule.github.io/project/illumination-aesthetics/
        img: /src/img/ia-thumbnail.jpg
        conf: ACM Conference on Human Factors in Computing Systems
        conf-short: (CHI '17)
        conf-link: https://chi2017.acm.org/
        award: /src/img/icon-noun_779891.svg
        award-desc: Best Paper Award
        links: <a href="http://www.hybrid-ecologies.org/uploads/project/paper/20/p6111-torres.pdf">Paper</a> | <a href="https://www.youtube.com/watch?v=tcaZyJqJElw">Video</a>
        video: https://www.youtube.com/watch?v=tcaZyJqJElw
    -
---

# molly jane nicholas

# research

<table class='submissions' style="width:100%; border-spacing:1em;">
<tr class="submish">
    <th width="10%"></th>
    <th width="80%"></th>
    <th width="10%"></th>
</tr> <!-- end column def-->

{% for submish in page.submissions %}
<tr class="submish">
    <td> <a href="{{submish.video}}"><img src="{{ submish.img }}" style="width:90px"/></a><a href="{{ submish.conf-link }}">{{ submish.conf-short }}</a></td>
    <td><a href="{{ submish.link }}">{{ submish.title }}</a> {{ submish.authors }} {{submish.conf}}<br>{{submish.links}}</td>
    <td> <img src="{{ submish.award }}" style="width:50px"/> <small> {{submish.award-desc}}</small></td>
</tr><!--end submish <td><a href="{{ submish.link }}">{{ submish.outcome }} </a></td>-->
{% endfor %}
</table> <!--end submission-->



[tei18cp]:http://www.hybrid-ecologies.org/uploads/project/paper/23/p148-dierk.pdf
[tei18-site]:https://tei.acm.org/2018/
[tei18-video]:https://www.youtube.com/watch?v=8JV2D7gJ5HI
[hairio-instructable]:https://www.instructables.com/id/HairIO-Hair-As-Interactive-Material/
[hairio-proj]:https://molecule.github.io/project/hairio/



[chi17cp]:/src/papers/IlluminationAesthetics-chi2017.pdf

<small> &copy; {{ site.time | date: '%Y' }} / [{{ site.author.name }}](/) / [license](/mit-license) / [email](mailto:{{ site.author.email }})</small>


