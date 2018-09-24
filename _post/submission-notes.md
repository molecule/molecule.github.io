---
layout: post
date: 2018-09-23
image:
submissions:
    - 
        conference: CHI 2019
        notes: Collaborating with another lab, we worked for several weeks to design and construct an extremely elaborate and delicate user study setup for testing something very delicate, then ran 18 participants. Ok, *running* user studies isn't my favourite part (I do like it), *analyzing* user data is my favourite part.
        icon: /src/img/icon-noun_Question_727759.png
        link:
    -
        conference: DIS 2018
        notes: Resurrected our Fall class project, edited it, and submitted it within 24 hours. We had no user study for this one, but I'm still very very proud of what we made.
        icon: /src/img/icon-noun_checkmark_364806.png
        link:
    -
        conference: CHI 2018
        notes: Worked with Christie Dierk on her super cool wearable interfaces. Lots of circuit building and another 1-hr user study (quickly becoming my favourite part).
        icon: /src/img/icon-noun_checkmark_364806.png
        link: https://molecule.github.io/project/alterwear/
    - 
        conference: TEI 2018
        notes: Two weeks before the deadline for TEI, Christie Dierk, Sarah Sterman and I decided to resurrect one of Christie's earlier CHI-rejected papers. We worked stupidly hard for two weeks, then got a week-long deadline extension from the organizers of TEI. This filled us with rage and loathing, energy which we redirected to completely restructure our paper and run a full user study.
        icon: /src/img/icon-noun_checkmark_364806.png
        link: https://molecule.github.io/project/hairio/
    -
        conference: UIST 2018
        notes: Collaborated with César Torres again on an amazing project I can't talk about, since it's been resurrected. Ran a user study approximately.....4 days before the deadline? This one was rough.
        icon: /src/img/icon-noun_X_1890803.png
        link:
    -
        conference: CHI 2017
        notes: My first ever paper submission cycle! Worked with the truly inspiring César Torres and his graduate student Jasper O'Leary. Joined the project maybe 3 weeks after moving back to the Bay Area from San Diego. Had NO idea of what was going on, but learned so much. Learned how to run user studies and analyze qualitative data. Also learned that I need to be more explicit about how being able to work past 9pm :)
        icon:  /src/img/icon-noun_779891.svg
        link: https://molecule.github.io/project/illumination-aesthetics/

---

### submission cycle notes through the years

<table class='submissions' style="width:100%">
<tr class="submish">
    <th width="10%">Conference</th>
    <th width="80%">Notes</th>
    <th width="10%">Outcome</th>
</tr> <!-- end column def-->

{% for submish in page.submissions %}
<tr class="submish">
    <td align="center"><a href="{{ submish.link }}">{{ submish.conference }}</a></td>
    <td><small>{{ submish.notes}} </small></td>
    <td> <img src="{{ submish.icon }}" style="width:50px"/> </td>
    
</tr><!--end submish <td><a href="{{ submish.link }}">{{ submish.outcome }} </a></td>-->
{% endfor %}
</table> <!--end submission-->


