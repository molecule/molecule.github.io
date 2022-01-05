---
layout: post
date: 2022-01-05
resources:
    -
        title: Discussion 0
        link:
        summary: Welcome, introductions, logistics. We will be meeting for Discussion 0 on Thursday, 01/20 at TBD AM! All classes start Berkeley Time, so we will officially begin at TBD+10. You're welcome to join the link as early as TBD to say hello!
    -

---

### Molly's 61a page
Hello, and welcome to CS61a! I took this class as an undergrad back in 2011 and really loved it, so I'm very happy to be here.

### About me
I'm a PhD student in CS here at Berkeley, and my research is in the sub-field of Human Computer Interaction. This means I like to think about how to design interesting, useful, and compelling user interfaces. Before I came to grad school, I worked on robots at Qualcomm down in San Diego. I didn't discover programming until I was a freshman in college in 2005. I took a bunch of classes (CS and others), then dropped out of school to become a professional performer. I eventually came back to finish my undergrad degree at Berkeley in 2011, which is when I took 61a with John DeNero.

### Logistics

**Attendance form:** Link coming soon!

**Lab:** TBD, Online

**Discussion:** TBD, Online

**Office Hours:** Wednesdays 8-9am, Online. [Reserve a slot using this calendar link.](https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUFONGtlVjcxSG05fGRlZmF1bHR8YjZhN2E0YTEwMDBmMjdjZThiM2QwZWViNjQ5N2Y5NTA)

**Email:** molecule@berkeley.edu

### Resources
<table class='61a-resources' style="width:100%; border-spacing:1em;">
<tr class="resources">
    <th width="20%"></th>
    <th width="80%"></th>
</tr> <!-- end column def-->

{% for resource in page.resources %}
<tr class="resources">
    <td> <a href="{{resource.link}}">{{ resource.title }}</a></td>
    <td>{{ resource.summary }}</td>
</tr><!--end resource-->
{% endfor %}
</table> <!--end resources-->

### Links
[61a Course Website](https://cs61a.org/)