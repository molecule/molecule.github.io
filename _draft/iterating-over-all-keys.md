<!--iterating over each key in JSON-->

#### convert - to :

```ruby
def mod_keys(h, fn)
  elsif s.is_a?(Hash)
    Hash[ s.collect {|k, v| [k, timestamp(v)]} ]
  elsif s.is_a?(Array)
    s.map {|v| modkeys v, fn }
  else
    fn s
  end
end
```



