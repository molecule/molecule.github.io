I recorded several audio files while interviewing research subjects. I wanted a
way to more easily search the content of each interview and withdraw quotes, so
I looked into speech-to-text (dictation) tools. You can find these pretty much
in all mobile devices or on major websites (google features one on its
homepage, allowing you to search with your voice). I first tried using CMU's
sphinx to convert audio files into text, but this was REALLY innaccurate.
Pretty much to the point where it was comical at times, and totally useless.
There were all sorts of ways to improve the accuracy by specifying a specific
training set or other tweaks, but I really didn't want to mess around with
that, especially since their server that hosted the wiki/tutorial kept dieing
with 503 errors.

I searched the web again, finding this post on using google's
web api to convert speech to textL
http://codeabitwiser.com/2014/09/python-google-speech-api/
