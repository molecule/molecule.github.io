---
layout: post
date: 2022-01-05
resources:
    -
        title: Lab 01
        notes: https://docs.google.com/presentation/d/1nzZ2E556JIYPitg9HqjlehrY9A1gkiwmBQuOCgL8E34/edit?usp=sharing
        summary: Control, truthyness, falseyness, how to solve the Parsons problems.
        video: 
    -
        title: Discussion 0
        notes: https://docs.google.com/presentation/d/1INvqbiY6oI3-vc1VoA1sjvi0x2HeZW2YCCTWCuxAvrs/edit?usp=sharing
        summary: Welcome, introductions, logistics. There is NO lab on Jan 18th.  We will be meeting for Discussion 0 on Thursday, 01/20 at 9:30 AM! All classes start Berkeley Time, so we will officially begin at 9:40am. You're welcome to join the link as early as 9:30 to say hello!
        video: https://berkeley.zoom.us/rec/share/fVprHYyxPywlqCVnMnMfRw1kexLcCLEMTc3zondvP3xkMfNarBEls0LewBxH9Dg9.CA1huYQNgMqQHOG1
---

### Molly's 61a page
Hello, and welcome to CS61a! I took this class as an undergrad back in 2011 and really loved it, so I'm very happy to be here.

Please call me by my first name: "Molly". "Ms. Nicholas" is too formal, and I'm not yet a Doctor. :)

### Inclusive Learning Statement
Your success in this class is important to me. We will all need accommodations because we all learn differently. If there are aspects of this course that prevent you from learning or exclude you, please let me know, or [visit this calendar to make an appointment with our Student Support TA, Cooper Bedin.](https://calendar.google.com/calendar/u/0/selfsched?sstoken=UUVzOUpFOXhkMElOfGRlZmF1bHR8MGE2NTQ0NWZiY2E1ZWZhNWYwNzk2YWEwMWU5MzllYWU) You can also reach them via email at at cooper.bedin@berkeley.edu. Together we’ll develop strategies to meet both your needs and the requirements of the course.

I encourage you to visit Berkeley's Disabled Students Program (DSP) to determine how you could improve your learning as well. If you need official accommodations, you have a right to have these met. There are also a range of resources on campus, including the Writing Center, Tutoring Center, and Academic Advising Center.

### Logistics

**Attendance:** Zoom will automatically track who attends each section.

**Lab:** Tuesdays 9:30-11am, Online (Zoom) [Check the schedule on the 61a site for the link](https://sections.cs61a.org/)

**Discussion:** Thursdays 9:30-11am, Online (Zoom) [Check the schedule on the 61a site for the link](https://sections.cs61a.org/)

**Office Hours:** Online. [Check the schedule on the 61a site for the link](https://cs61a.org/office-hours/)

**Email:** molecule@berkeley.edu (I will respond to Piazza much more quickly!)

**Anonymous feedback form:** [Link](https://docs.google.com/forms/d/e/1FAIpQLScyaVvvtFsLy_Zd-V3sdKcIkcd98GLPeitklv-WOue9oJwVHA/viewform) (I will check this approximately once a week)

### Resources
<table class='61a-resources' style="width:100%; border-spacing:1em;">
<tr class="resources">
    <th width="30%"></th>
    <th width="70%"></th>
</tr> <!-- end column def-->

{% for resource in page.resources %}
<tr class="resources">
    <td>Slides: <a href="{{resource.notes}}">{{ resource.title }}</a><br>
    Video: <a href="{{resource.video}}">Link (password is in the slides)</a></td>
    <td>{{ resource.summary }}</td>
</tr><!--end resource-->
{% endfor %}
</table> <!--end resources-->

### Links
- [61a Course Website](https://cs61a.org/)
- [Anonymous Feedback Form](https://docs.google.com/forms/d/e/1FAIpQLScyaVvvtFsLy_Zd-V3sdKcIkcd98GLPeitklv-WOue9oJwVHA/viewform) (I will check this approximately once a week)

### Participation:
There are lots of ways to participate! Find one that works for you.

- Take notes -- If you take great notes, I'd love to share them as part of our "discussion summary"!
- Timekeeper -- help our discussions stay on track and end on time!
- Ask questions -- asking questions during discussion and lab is a great way to participate.

### My background
I'm a PhD student in CS here at Berkeley, and my research is in the sub-field of Human Computer Interaction. This means I like to think about how to design interesting, useful, and compelling user interfaces. Before I came to grad school, I worked on robots at Qualcomm. I didn't discover programming until I was a freshman in college in 2005.


### Land Acknowledgement
I recognize that my teaching and research work is located in the territory of Huichin, the ancestral and unceded lands of Chochenyo speaking Ohlone peoples, specifically, the Confederated Villages of Lisjan. The history of prolific technological development in this region has always depended on this land, and all of our technological infrastructures and activities take place on and in relation to this land. [Through the Berkeley Center for New Media, I commit to supporting the sovereignty and ongoing stewardship of this place by Ohlone peoples through building long-term reciprocity and relationships with tribal leaders and organizations.​](http://bcnm.berkeley.edu/about)