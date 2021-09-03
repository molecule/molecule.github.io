---
layout: post
date: 2021-09-02
image:
submissions: 
    -
        conference: CHI 2022
        notes: Two papers, one significantly reworked from our DIS rejection, the other a new output from both summer internships at Microsoft.
        icon: /src/img/icon-noun_Question_727759.png
        link:
    -
        conference: UIST 2021
        notes: A low-key collaboration with a bunch of researchers from Microsoft. Accepted!
        icon: /src/img/icon-noun_checkmark_364806.png
        link: 
    -
        conference: CnC 2021
        notes: Tis the season for rejected paper revival I guess! Reviving a paper that was rejected from CHI, DIS, then ISWC for CnC. This is definitely the best version of it that has ever existed. REJECTED, mainly because reviewers felt it was a bad fit (which is fair).
        icon: /src/img/icon-noun_X_1890803.png
        link: 
    -
        conference: IMWUT 2021
        notes: Reworked our rejected CHI 2021 submission. It makes more sense for this conference anyway! REJECTED. The feedback was helpful, but I'll probably never submit to IMWUT again. I disliked everything about this process.
        icon: /src/img/icon-noun_X_1890803.png
        link: 
    -
        conference: DIS 2021
        notes: Submitted 4 papers. P1, P2 - Significantly reworked versions of the rejected CHI'21 paper, now split into two papers. We were consistently getting feedback that the story was too messy but we had so much cool stuff to talk about so we wrote two full papers. P3 (Accepted) - I was finally struck by inspiration for how to present work from a project I had completed in Spring of 2019! That's the "Expanding the Design Space of Technology-Mediated Theatre Experiences" paper. P4 - A summer hackathon project we were all super excited about. 
        icon: /src/img/icon-noun_checkmark_364806.png
        link:
    -
        conference: CHI 2021
        notes: Submitted three papers. PAPER 1) One we had written last year, then submitted with the wrong format to IMWUT and got desk-rejected. MetaReviewer (1AC) - 2.5; Reviewer 1 (2AC) - 3;  Reviewer 2 - 3; Reviewer 3 - 2. We're taking it as a hopeful sign that the 2AC gave us a 3... PAPER 2) The rejected DIS 2020 paper, significantly reworked. We completely changed the structure and re-wrote it three times in the week leading up to the deadline. We are SO proud of it and hope the reviewers love it as much as we do! MetaReviewer (1AC) - 2.5; Reviewer 2 (2AC) - 2; Reviewer 1 - 3; Reviewer 3 - 2. PAPER 3) A paper from an amazing summer project lead by a fellow intern at Microsoft. Was asked if I wanted to contribute an hour and a half before the Abstract deadline...uh...yes???? Reviews all 1.5s, so we submitted no rebuttal. All rejected in the end!
        icon: /src/img/icon-noun_X_1890803.png
        link:
    -
        conference: DIS 2020
        notes: Submitted a first draft of a paper. We LOVED this project and I think our love blinded us to the faults in our draft. Rejected!
        icon: /src/img/icon-noun_X_1890803.png
        link:
    - 
        conference: CHI 2019
        notes: Collaborating with another lab, we worked for several weeks to design and construct an extremely elaborate and delicate user study setup for testing something very delicate, then ran 18 participants. Ok, *running* user studies isn't my favourite part (I do like it), *analyzing* user data is my favourite part. In total our lab submitted 6 papers, and all 6 were rejected. Ouch!
        icon: /src/img/icon-noun_X_1890803.png
        link: 
    -
        conference: TEI 2019
        notes: Recycled our paper from UIST 2018 - finally accepted! We did another user study to flesh out the world and expand our framework. I didn't help as much with this second round (mostly helped w the camera-ready and a bit with the video).
        icon: /src/img/icon-noun_checkmark_364806.png
        link:
    -
        conference: DIS 2018
        notes: Resurrected our Fall class project, edited it, and submitted it within 24 hours. We had no user study for this one, but I'm still very very proud of what we made. Honestly this has been the project that has most meta-impacted my research life. Read it and see if you can see why!
        icon: /src/img/icon-noun_checkmark_364806.png
        link: http://www.hybrid-ecologies.org/uploads/project/paper/25/Torres_et_al._-_2018_-_Guardians_of_Practice_A_Contextual_Inquiry_of_Fai.pdf
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
        notes: My first ever paper submission cycle! Worked with the truly inspiring César Torres and his graduate student Jasper O'Leary. Joined the project maybe 3 weeks after moving back to the Bay Area from San Diego. Had NO idea of what was going on, but learned so much. Learned how to run user studies and analyze qualitative data. Also learned that I need to be more explicit about not being able to work past 9pm :)
        icon:  /src/img/icon-noun_779891.svg
        link: https://molecule.github.io/project/illumination-aesthetics/

---
<!-- 
X: /src/img/icon-noun_X_1890803.png>
Question mark: /src/img/icon-noun_Question_727759.png
Award: /src/img/icon-noun_779891.svg
Check mark: /src/img/icon-noun_checkmark_364806.png
-->

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


