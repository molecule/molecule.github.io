---
layout: post
date: 2016-02-21
---

I wrote a simple implementation of Ruby's
[Enumerable#all?](http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-all-3F) and
[Enumerable#any?](http://ruby-doc.org/core-2.3.0/Enumerable.html#method-i-any-3F)
in Javascript, using [Array.prototype.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).
They are a nice way to check if a condition holds for all or any elements in an
array, respectively. In Ruby, you would call the method on the object (e.g.
`[0,1].any? {|x| x == 1}`), but my first JS implementation required that you
pass the array and testing function as arguments to either function.
`Array.prototype.reduce` takes 2 arguments:

1. a function to be applied to each element
2. an optional initial value for the array

The arguments to the reducing function are the stored value (the return value
of the last iteration, or the initialization value), and the current element.
Here is my first all implementation:


```js
function any(ary, fn) {
  return ary.reduce(function(o, n) {
    return o || fn(n)
  }, false);
}

function all(ary, fn) {
  return ary.reduce(function(o, n) {
    return o && fn(n)
  }, true);
}
```


An example usage: `any([0,1], function(x){ return x == 1 })`

`any` is initialized with false, and will only return true if any of the
elements caused the test function to return truthy. This is from the logical OR
function, which returns true when any of operands are true (eg true OR false ==
true). `all` is initialized with true, and conversely uses AND to ensure the
final value is true only when it returns truthy for every value in the array.

You can add these functions to the Array.prototype so that they are even more
similar to the Ruby implementation (a method that belongs to a
object/prototype, rather than a method that accepts one as arguments):

```js
Array.prototype.any = function(fn) {
  return this.reduce(function(o, n) {
    return o || fn(n)
  }, false);
}

Array.prototype.all = function(fn) {
  return this.reduce(function(o, n) {
    return o && fn(n)
  }, true);
}
```

Prototyped example: `[0,1].any(function(x){ return x == 1 })`

