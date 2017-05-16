---
layout: post
date: 2014-01-01
---

I recently found out a way to execute a command in each folder and subfolder
relative to `pwd`. Here is the command:

    find . -type d -exec sh -c '(cd {} && clean-names " ")' \;

`find` generates a tree of folders, and then the -exec option is given a
command to run, which is to start a subshell, cd into the current folder or
subfolder, and then execute the command `clean-names`, with a blank space given
as it’s argument.

[`clean-names`][cn] is a script I wrote in Perl that searches for a regex
pattern (given as the argument to the command) in all files in the current
directory, and then removes the first instance of that regex in each file’s
title where it was found. It also show’s the user a preview of what the output
of the command will be should they choose to confirm it.

[cn]:https://github.com/jeremywrnr/util/blob/7c994db3bb37c107772bb57a757049c90caa1449/clean_filenames

