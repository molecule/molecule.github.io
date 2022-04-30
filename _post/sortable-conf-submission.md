---
layout: post
date: 2020-04-28
image:
submissions:
    -
        submissionNum: 28
        conference: CnC'22
        conf-link: https://cc.acm.org/2022/
        title: Creative and Motivational Strategies Used by Expert Creative Practitioners
        secretTitle: Heuristics
        authors: <b>Molly Jane Nicholas</b>, Sarah Sterman, Eric Paulos
        img: /src/img/2022-cnc-heuristics.png
        notes: I may have finally figured out what it is I'm trying to say. It also turns out that what I'm trying to say is something that's interesting to the folks at CnC, so I have fairly high hopes for this one. UPDATE - accepted AND won a Best Paper award!! This is absolutely the best version of this paper that has existed, and sending it to the right conference really matters.
        journey: Started life in 2019 (submission 10), then heavily reworked for CHI'20 (submission 13). Split into two papers with a different focus (submission 15 and 16), which went through revisions rounds at CSCW'21 where one was accepted (submission 21) and the other rejected (submission 23). CnC'22 will probably be the last attempt (submission 28). FINALLY accepted!! 5th time's the charm.
        finalResult: C&C'22, Best Paper award | PDF Forthcoming
        parent:
    -
        submissionNum: 31
        conference: DIS'22
        title: Secret Interaction Design Tool Paper (Title redacted until work is published)
        notes: Another MSR project :)
        icon: /src/img/icon-noun_X_1890803.png
        finalResult: Work is ongoing...
    -
        submissionNum: 23
        conference: CSCW'22
        title: Creative Strategies and Heuristics in Creative Professionals 
        notes: I honestly knew in my heart that CSCW wasn't the right place for this paper, but submitted it anyway knowing it would probably get rejected. However, we got super lucky with the reviewers and one gave us absolutely incredible, thoughtful, detailed feedback. The reviewer feedback from this draft absolutely directly resulted in the last version being so good.
        icon: /src/img/icon-noun_X_1890803.png
        journey: Started life in 2019 (submission 10), then heavily reworked for CHI'20 (submission 13). Split into two papers with a different focus (submission 15 and 16), which went through revisions rounds at CSCW'21 where one was accepted (submission 21) and the other rejected (submission 23). CnC'22 will probably be the last attempt (submission 28). FINALLY accepted!! 5th time's the charm.
        finalResult: C&C'22, Best Paper award | PDF Forthcoming
        parent: 28
    -
        submissionNum: 21
        conference: CSCW'21
        title: Towards Creative Version Control
        notes: The reviewers asked us to do additional interviews, which we did. It was a great suggestion - those interviews really helped clarify our claims. 
        icon: /src/img/icon-noun_checkmark_364806.png
        journey: Started life in 2019 (submission 10), then heavily reworked for CHI'20 (submission 13). Split into two papers with a different focus (submission 15 and 16), which went through revisions rounds at CSCW'21 where one was accepted (this submission) and the other rejected (submission 23). CnC'22 will probably be the last attempt (submission 28). Total rejections before acceptance - 3. 
        finalResult: CSCW'21
    -
        submissionNum: 16
        conference: DIS'21
        title: Towards Creative Version Control
        notes: Significantly reworked versions of the rejected CHI'21 paper (submission x), now split into two papers. We were consistently getting feedback that the story was too messy but we had so much cool stuff to talk about so we wrote two full papers each with an entirely separate focus. R4 - 2.5, R3 - 2.5, R1 - 4, R2 - 2.
        icon: /src/img/icon-noun_X_1890803.png
        journey: Started life in 2019 (submission 10), then heavily reworked for CHI'20 (submission 13). Split into two papers with a different focus (submission 15 and this submission), which went through revisions rounds at CSCW'21 where one was accepted (submission 21) and the other rejected (submission 23). CnC'22 will probably be the last attempt (submission 28).
        finalResult: CSCW'21
    -
        submissionNum: 15
        conference: DIS'21
        title: Creative Heuristics in the Wild
        notes: Significantly reworked versions of the rejected CHI'21 paper (submission x), now split into two papers. We were consistently getting feedback that the story was too messy but we had so much cool stuff to talk about so we wrote two full papers each with an entirely separate focus. R4 - 2, R3 - 1.5, R1 - 3, R2 - 2.5.
        icon: /src/img/icon-noun_X_1890803.png
        journey: Started life in 2019 (submission 10), then heavily reworked for CHI'20 (submission 13). Split into two papers with a different focus (submission 15 and 16), which went through revisions rounds at CSCW'21 where one was accepted (submission 21) and the other rejected (submission 23). CnC'22 will probably be the last attempt (submission 28). FINALLY accepted!! 5th time's the charm.
        finalResult: C&C'22, Best Paper award | PDF Forthcoming
---

<table class='submissions' style="width:100%; border-spacing:1em;">
<tr class="submish">
    <th width="20%"></th>
    <th width="80%"></th>
</tr> <!-- end column def-->

{% for submish in page.submissions %}
<tr class="submish">
    <tr>
    <td>{% if submish.img %}<a href="{{submish.link}}"><img src="{{ submish.img }}" style="width:150px"/></a>{% endif %}
        {% if submish.icon %}<img src="{{ submish.icon }}" style="width:100px"/>{% endif %}
    </td>
    <td colspan="3" style="font size=+2; ">
        <large>{{ submish.title }}</large> <br>
        <medium>{{ submish.authors }}</medium> <br>
        <medium>{{submish.notes}}</medium> <br>
        <medium>{{submish.links}}</medium> <br>
        <medium>Final Result: {{ submish.conference }}</medium> <br>
        <medium>{{submish.award-desc}}<img src="{{ submish.award }}" style="width:20px; border:0; margin:0"/></medium><br>
    </td>
    </tr>
</tr><!--end submish <td><a href="{{ submish.link }}">{{ submish.outcome }} </a></td>-->
{% endfor %}
</table> <!--end submission-->