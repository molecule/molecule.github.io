---
layout: post
date: 2014-01-01
---
ignoring ARGV from LHS

While updating some tests for a ruby gem I had written, I ran into the odd
problem where I wanted to basically ignore ARGV. Normally, I would just pipe
this into `/dev/null`, as in this example where [gobble, gobble] is ARGV:

    echo gobble gobble >/dev/null

I was overriding a system command call that opened the browser, and wanted to
avoid editing the code I was testing in an awkward way, essentially
conditionally routing to /dev/null on the command’s right hand side. First, I
came up with this workaround:

    grep -v '.*' 2&>/dev/null < gobble gobble

Notice ARGV remains all the way to the right, so this can be substituted
anywhere where you need to mock out system calls for unit testing. `grep -v
‘.*’` matches everything, then inverts with the `-v` flag, so it actually
ignores everything. If a ‘gobble’ is not a file in the cwd, then 2\>/dev/null
ignores it. Then I realized I could just move the STDOUT and STDERR redirection
before ARGV (drr) , and not even use grep, which is by far the simplest
solution:

    echo >/dev/null 2>&1 gobble gobble

I felt silly.

