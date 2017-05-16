---
layout: project
title: life of the party
---

<style>
img { max-width: 500px; }
</style>

## life of the party

<center>
<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/YMS4McFrxyE?showinfo=0" frameborder="0" allowfullscreen></iframe>
</center>


###### [source][lotp] -- [poster][poster] -- [slides][slides] -- [demo][dance]

<!--TODO actually insert photo of the team here-->
<img src="/src/img/multi-user.png" alt="dance diagram"/>

###### justin fraumeni / mat johnson / amelia keller / jeremy warner

Light systems for live entertainment applications are traditionally rigid in
design. For dance shows and concerts, light schemes are often pre-programmed
scene by scene to synchronize with the energy of performances, a process that
can be as inflexible as it is time consuming. Lighting for party environments
often reacts to music levels, but can be repetitive and predictable. Through
the creation of “Life of the Party”, we hope to create a system that will
automatically respond to movement in a predefined space and change lighting
levels to correspond with motion, adding a layer of real-time human
interactivity to entertainment events. This software will be novel in its
design and application, and more flexible and interactive than other lighting
systems currently available on the market.


### requirements

It is especially important that we define our requirements with what has been
done in mind, to ensure the novelty of our system. From our research, the
closest technology related to ours changes light scheme in real time based on
music levels.  We have found no experiments have been conducted with systems
that track the movement to determine lighting. Based on group discussion and
the comments made by many of the poll subjects, we were able to formulate a
basic framework of requirements that we can use as a starting point for our
prototype.

Foremost, the accuracy of the system will depend on its ability to quantize the
movements of the individuals in the space into interpretable data. The system
must be able to unobtrusively measure and take averages of movement within a
defined space, and relay that information to the processing algorithms which
will control lights. This input system will ideally also function at different
lighting levels, to adapt to the dim atmosphere at most parties. Initially, we
will be testing it in a controlled light environment, and then adapt some
controls later if there is time to add resilience for subpar lighting
conditions.

The logic of the algorithms must be able to translate measurements of movement
into corresponding and appropriate light sequences in real time. That is, it is
to change lighting ideology when the general motion atmosphere of the room has
changed, with as minimal delay as possible. It must do so in a translatable way
that can be sent to the specially designed lights – ideally wirelessly – in
order to decrease noticeability and  “clunkiness” of the system that might
interfere with the entertainment environment. The lights themselves should be
programmable and have the ability to wirelessly respond to the computer
processing logic and change scheme instantaneously. They should be able to
produce a full spectrum of colors and illuminate a relatively large space.

The success of our system will be dependent on our user feedback. Therefore, we
intend to involve our potential benefactors in every step of the system
planning and design. This includes iterations of polling and interviewing,
before, during and after prototype construction.

##### evaluation plan

Throughout the course of the prototype design, our team plans to conduct user
trials and subsequent prototype revisions in order to fine-tune our system.
These would involve potentially bringing subjects (technicians, dancers and
party goers) into the HCI lab to interact with the system in a controlled
environment, and record their suggestions for improvement. This is especially
crucial with a concept such as ours that has not been implemented in any form
before. We need to be flexible enough to modify our requirements to suit user
feedback, and address these requirements in our prototype. A comprehensive
final evaluation will also be conducted and will compare our prototype’s
abilities up against the requirements we have formulated for the system.

To gauge interest in such a concept, 32 individuals were casually polled on
their interest in interactive lighting. They were all asked the following
question: "Does the idea of an interactive, motion-controlled lighting system
at parties and concerts sound like it could improve your entertainment
experience?” 72% of individuals were receptive to the idea, and were
enthusiastic about the concept, common comments included “I can’t wait to try
it out”, or “That could be awesome!”. Those that expressed disinterest in the
idea thought that their party and entertainment experience was adequate
already, one participant noted “I don’t think i’d notice a difference.”

##### expert interviews

To investigate the subject further, our team plans to query University of
Rochester Event Support Technicians or Supervisors who run lighting systems for
live performances and gather their experiences and suggestions to shape our
final product. Participants will be asked about their experience interacting
with clients in the lighting design process as well as their ideas for our
system. We will attempt to question as many individuals as possible because the
number of individuals that have expertise in live entertainment lighting are
limited.


### system

The system is implemented with three hardware components: The Kinect outputs
its position and depth metrics to a computer hub containing the program files,
scripts, and libraries through a high speed usb connection, at an update rate
equal to the Kinect’s frame rate of 30 fps average. The computer hub then sends
update commands to the SakioLEDs through their self-generated, dedicated
wireless network.

<img src="/src/img/color-select.png" alt="color select"/>

- *SaikoLED:* The custom-built SaikoLED lights provide full spectrum RGB color
  and utilize an integrated arduino microcontroller to generate a wireless
  network, through which color can be manipulated.
- *OpenNI SDK:* OpenNI is an open source C++ image processing library which can used to
  interface Xbox Kinect with Unix-based systems. OpenNI provides access to the
  euclidian coordinates of 15 “joint” data points on up to 6 concurrent users
  within the Kinect’s viewfield.
- *Kinect for Xbox:* Kinect is a motion sensing device originally designed for
  use with the Xbox 360 platform. The Kinect features an RGB camera and depth
  sensor, which it uses to track the full body movement of multiple users in
  three dimensions. Critical to our application, the depth sensor utilizes an
  infrared laser and CMOS sensor allowing it to quantize position points in low
  lighting levels.
- *Python Liblo:* Liblo  is an implementation of the Open Sound Control
  protocol for POSIX systems. Our system utilized pyliblo, an implementation in
  python, to communicate between the laptop hub and the SaikoLED’s specific IP
  address.

<img src="/src/img/dance-diagram.png" alt="dance diagram"/>

### controls - [github][lotp]

Connect to the SaikoLED network:

    sudo ./moodConnect

Change all lights manually (rgb in [0,1]):

    python ./LED-control/varcolor.py r g b

Change one light manually (node in [3,4,5], rgb in [0,1]):

    python ./LED-control/multicolor.py node r g b

Control the lights with the kinect:

    ./OpenNI-Bin-Dev-MacOSX-v1.5.7.10/Programs/Bin/x64-Release/Lifeoftheparty

Control the lights with the kinect (multiple user support):

    ./OpenNI-Bin-Dev-MacOSX-v1.5.7.10/Programs/Bin/x64-Release/MultipleParty

Disconnect from the SaikoLED network:

    sudo ./moodDisconnect

##### user joint position, velocity, and acceleration

OpenNI stores the number of users within its viewfield in an array register
automatically as they appear, and assigns them a corresponding ID. Users can
then be referenced by this ID and euclidian position of skeleton joints and
extremities can then be extracted. Upon every camera frame, euclidian distance
is calculated between the current and prior position of a selected joint of a
dancer. The first implementations of Life of the Party rely on the right hand
as a representation of dance intensity. Average velocity is computed for each
user using a recent history of distance values and time change. This in turn is
used to calculate an acceleration value for each user. These metrics are now
ready to be used in the color selection algorithms to determine the light
control command sent.

##### net positive and net negative assignment

Velocity is interpreted by the program logic as either “net positive” or “net
negative”, depending on its direction in euclidian space. Velocities directed
to the right and upwards from the perspective of the Kinect are considered “net
positive”, and those directed downwards and to the left are considered “net
negative”. This interpretation will be critical to the functionality of the
color selection algorithm.

##### multiple user functionality

When the system is extended to multiple users, the highest average velocity and
acceleration values for a frame are selected as inputs for the color selection
algorithm. Generally, the most active user during each the frame determines the
color selection command sent.

##### color selection algorithm

The color selection algorithm has a base threshold of 1 m/s, average velocities
below this are too slow to be used in color selection and considered noise.
Average velocities greater than 1 m/s contribute to a direct color change
“velocity” around the rgb color wheel, in a direction defined according to the
net direction of the velocity: clockwise for “net positive” and
counterclockwise for “net negative”. This specification is made because of the
fundamental nature of many styles of dance, which feature alternating
directional movements. The ideal end result is alternating color change between
two colors adjacent on the color wheel, in phase with dance moves.

##### complementary color jumping

Abrupt, intense movement by dancers results in immediate color change. These
movements are characterized by high acceleration values. Acceleration values
which exceed a constant threshold result in a color “jump” across the color
wheel to a complementary color. You can check out a video of it in action
([here][dance]).


### results

Before design of the prototype was began, the group conducted an interview with
Mark Romano, University of Rochester's Event Support Technical Coordinator, to
get an idea for the applicability of a motion controlled entertainment light
system. He was asked the following:

- What technology does Event support use to program light schemes for live performances?
- Could you think of any limitations of that technology?
- What are the steps taken when working with clients to design light schemes?
- What are some of the challenges that you face during that process?
- What do you think can be done to make the process easier?
- Do you see potential in automated light schemes that change in real time based on motion parameters of a dance performance?

During the interview, Mark described a need for a plug-and-play system that
could be implemented in a short period of time, when a rehearsal would be
impractical or impossible. He also stated that oftentimes the challenge coming
into rehearsal is that dancers won't know what they want when it comes to light
design, a statement that was reiterated when our group interviewed members of
Louvre later in the semester. Two iterations of user demo and evaluation took
place, in between prototype versions of the system. The first of these involved
11 individuals. The volunteers were debriefed on the functionality of the
system and allowed to interact with it freely. They were then queried on their
reaction and suggestions as follows:

- What is your past experience with live dance performance and light schemes? (if applicable)
- How would you rate the responsiveness of the system? Could you see a high correlation between your movements and the lights?
- What were some of the problems you encountered while using the system?
- Could you see yourself using the system at a party or dance event in place of sound controlled lighting?
- What was your overall opinion of the system?
- What features could be added to improve the system?

Feedback received during the first iteration was mixed. All users expressed
potential for the system enthusiastically: 100% responded that they saw
themselves using the system at a party in place of sound controlled lighting,
however many were confused about the correlation between their movements and
the color change, in the words of one user “sometimes the color change was too
unpredictable.” The first round of user demos led to several key changes in the
system, including the positive/negative color shifting concept, implemented in
order to increase the correspondence and predictability of the color change to
motion. The second iteration of user study recruited members of Louvre, the
University of Rochester ballet dance group to perform with the system. The
performance, along with the interview that followed Dance Interview,
highlighted the improvements, along with several key remaining weaknesses of
the system that are revealed when the system is scaled to multiple concurrent
users:

- *Delay:* The time delay that openNI implements between dropping and adding users to its
  register can prove problematic to a performance where dancers are entering and
  leaving the viewfield.
- *Occlusion:* While the kinect has rich 3D image processing abilities,
  recognition failure still occurs when users are superimposed.
- *Overreactivity:* Depending on the style and intensity of dance, sensitivity
  must be tuned to avoid erratic light change.


### conclusion

Our prototype meets the expectations we set for it back in the planning stage,
namely that it could vary a lighting scheme dynamically based on a user's
motion. We also extended this but allowing for multiple user support, in a sort
of multiplexing fashion, where the lights would respond to whoever is fastest
moving, based on the feedback from an interview with Louvre dancers after they
used an early version of system that only supported one user.  We also received
nearly ubiquitous feedback that people would like to use our lighting system in
a party scenario to enhance the experience with interactivity. In sum, while
our system has faults that can be expected with the application of the Kinect
itself, the enthusiasm and excitement of the people that demoed it speaks for
itself. The system achieves the goals that we had at the beginning of the
project, and while it is a long way from being practically applicable,
represents a novel frontier for Human Computer Interaction.

*Acknowledgements to Event Support, Louvre Dance Group, ROC HCI, Alex Wilson,
Prof. Hoque, Michelle Fung, Computer Science Department, Open Source Software
and Firmware (Arduino, SaikoLED, OpenNI). Thank you!*

<small> &copy; {{ site.time | date: '%Y' }} / {{ site.author.name }} /
[email][mail]</small>

[mail]:mailto:jeremy.warner@berkeley.edu
[lotp]:https://github.com/jeremywrnr/life-of-the-party
[dance]:https://vimeo.com/113805998
[poster]:https://drive.google.com/file/d/0B6j44ieAlJ6OZUNPcks4TkpXMDg/view
[slides]:https://docs.google.com/presentation/d/1Su3JwJhMAzzb24spRo4x_bkyJ7tx4rXkES_GlY7vLgY/edit#slide=id.p3
[interview]:https://www.dropbox.com/s/e16pv17s89lma18/LOFP2.mov

