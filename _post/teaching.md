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