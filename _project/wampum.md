---
layout: project
title: WAMPUM
---

<style>
img { max-width: 500px; }
</style>

## w. a. m. p. u. m.

<img src="http://eddiesamuels.com/projects/wampum/images/5.glove2.jpg" alt="wampum glove"/>

###### [report][rept] -- [source][wamp] -- [media][ewmp]

**w**ireless **a**ggregating **m**ultinode **pu**lse **m**onitor: a wireless
network of heart rate monitors. *wampum* is a monitorable, semi-decentralized
wireless network of low-power, low-cost heart rate monitoring nodes. It has a
bracelet form factor, with a finger sensor, and uses photoplethysmography to
detect pulses. Our targeted use case was medical emergency response teams that
are looking to easily deploy a system to quickly monitor the condition of
causalities of an emergency such as a natural disaster. Our senior capstone
design project to was completed to achieve a *BS* in electrical and computer
engineering from the University of Rochester, and was advised by [Prof.
Heinzelman][wend].

<img src="/src/img/wampum.jpg" alt="team7"/>

###### jae choi / [eddie samuels][edsm] / jeremy warner / ivy awuor


### dependencies

  * [NodeJS](https://nodejs.org/)
  * [Arduino](http://arduino.cc/en/main/software)

### cli setup

Getting the port of the base station:

     $ make port >> ino.ini

Uploading code to the board:

     $ make up

Opening up a serial port:

     $ ino serial


###  related work

  * [Implementation of a Wireless Sensor Network for Heart Rate Monitoring in a Senior Center](http://ieeexplore.ieee.org/xpl/articleDetails.jsp?arnumber=6211562)
  * [Centralized heart rate monitoring telemetry system using ZigBee wireless sensor network](http://www.ncbi.nlm.nih.gov/pubmed/25734335)

<small> &copy; {{ site.time | date: '%Y' }} / {{ site.author.name }} / [email][mail]</small>

[edsm]:http://eddiesamuels.com/
[ewmp]:http://eddiesamuels.com/projects/wampum/
[rept]:http://eddiesamuels.com/projects/wampum/attachments/user%20manual.pdf
[wend]:http://www.ece.rochester.edu/~wheinzel
[wamp]:https://github.com/jeremywrnr/wampum
[wsrc]:https://github.com/jeremywrnr/wampum/zipball/master
[mail]:mailto:jeremy.warner@berkeley.edu

