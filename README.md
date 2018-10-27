[![Build Status](https://travis-ci.org/molecule/molecule.github.io.svg?branch=master)](https://travis-ci.org/molecule/molecule.github.io)

about
=====

[![MIT](https://img.shields.io/npm/l/alt.svg?style=flat)](http://jeremywrnr.com/mit-license)

Here is the code for my website, released under MIT License.

It uses the jekyll templating engine. Some notes:

- only h2 and h6 are centered
- class img.prof is left aligned

#### How to start a server:
jekyll serve -w

Browse to this address to test the local version:
http://127.0.0.1:4013/


#### Edit masthead
in _layouts/default.html under the "responsive masthead" comment.

#### What is _site?
_site is created when you run a server locally (see above).
It's ignored by git and not saved anywhere. 
Don't edit files there, they will be overwritten.

#### Update gems
- [long-winded explanation](https://bundler.io/v1.16/guides/updating_gems.html)
```
$ bundle update <gem name>
```



(c) 2018 Molly Nicholas




