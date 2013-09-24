---
layout: page
title: Ruby Operator Nicknames
# from http://parley.rubyrogues.com/t/operator-nicknames/704
---
{% include JB/setup %}

|_. operator |_. nicknames |
| `=>` |  hashrocket, fat arrow, heavy arrow |
| `<=>` | spaceship |
| `===` | threequals |
| rubygems: `~>` | twiddlewalka, pessimistic match, approximately greater, roughly equals, harpoon, spermy operator, tadpole, semver|
| `->` |  stabby lambda |
| `*` | splat, twinkle|
| `#` | octothorpe, hash, pound |
| `||=` | pipe bomb operator, top hat, birthday cake, hammer, or equals|
|  empty`?` |  empty, `eh?` |
| erb tag: `<%=` | skull tag |
| `{}` |  Curly (or Curly Brace) |
| `(`,`)` |  Paren |
| `[`,`]` | Bracket |
| `~`  |  Tilde |
| `<<` | shovel (back shovel), chevron, exxon |
| bool `?` iftrue `:` iffalse | The Elvis operator, conditional operator, ternary if |
| `#{}` |  crab claws |
| `**` | double splat, constellation, binary star |
| {foo`:` 'bar'} | hash eyes, almost json. only works for symbols. space saver. unnecessary decision to make. ruby 1.9 hash syntax but really only affects symbols and makes code churn so much more likely.| |
| `/` |  whack, solidus |
| `&` | pretzel |
| `^` | hat, caret, sharkfin |


Also

- see http://ergoemacs.org/emacs/using_voice_to_code.html
- Avdi: "naked splat" in def foo(*) as "the Lone Star" at LSRC.
- re `~>` here's some discussion in rubygems
  - [Replace usage of the term "spermy" with "approximate".
](https://github.com/rubygems/rubygems/pull/124)
  - [Change references to 'spermy' to 'twiddle wakka'](https://github.com/rubygems/rubygems/pull/123)


Nameless operators

- `=~` (matches), kind of equals, is like, cigarette
- `!~` (doesn't match)
- `&&=` (assign unless falsy)
- `||=`  (assign unless truthy)
- `&&` vs. `and`  (high binding/precedence vs. low-binding)
- `||` vs. `or`
- `|`'s name depends on context (bitwise, pipe)
- `&`foo proc operator
- `&:`foo symbol to proc operator
- `<<` (back shovel) `>>` (forward shovel?)
- `^` as carat or hat or exor
- `$\w` (something you need to look up)
- `@` strudle vs. 'at sign' for ivars
- `==` equals
- `!=` not equals
- `<=` less than or equals
- `>=` greater than or equals
