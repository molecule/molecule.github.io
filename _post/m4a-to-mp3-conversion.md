---
layout: post
date: 2016-04-19
---

Sometimes I record audio with my iphone. The format that it saves the recording
in is m4a, which is a wrapper for AAC/MP4, and there is no way to easily change
what format the audio recorder uses. While this format features more advanced
compression, it still can yield some compatibility issues for windows users. No
one likes explaining how to install VLC player to Grandpa for the third time -
transcoding from m4a to mp3 before sharing makes things easier. On OSX, it is
not too hard to convert a bunch of audio files (though it may take some time
while transcoding larger files). First, we need ffmpeg to convert files at the
command line. Install it with brew:

    brew install ffmpeg

Then, we can convert a single file like this:

    ffmpeg -i "filename.m4a" -acodec libmp3lame -ab 320k "filename.mp3"

This is still inefficient, since we would have to specify each file that we
want to change. We can use streams and filename placeholders as generalizations
to handle this issue:

    find . -type f -name "*m4a" |\
        sed -e "s/.m4a$//" |\
        xargs -I % ffmpeg -i "%.m4a" -acodec libmp3lame -ab 320k "%.mp3"

Here, `find` is locating all files that end in m4a in and below the current
directory. It passes them through `sed` to strip off the file extension. Then
each base name is passed into xargs to run the converter command on each
matched base name, going where 'filename' was in the example command above. To
add this converter as an alias in your shell's config file for ease of use:

    alias m4a2mp3='find . -name "*m4a" -type f | sed -e "s/.m4a$//" | xargs -I % ffmpeg -i "%.m4a" -acodec libmp3lame -ab 320k "%.mp3"'

Note that these commands were written to work with OSX (a BSD-based OS), so
some command line utilities (particularly xargs) may have different syntax with
other operating systems.

