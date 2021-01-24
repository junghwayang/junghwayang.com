---
title: 'String'
date: '2019-08-28'
---

> Written in Python.

## 문자열 : `str`

- Strings are arrays of bytes representing unicode characters.
- String vs Character array
  - String
      - one block of memory
      - immutable
  - Character array
      - sequential collection of char data type variables. (Python doesn't have a character data type.)
      - stores n memory blocks continuously in memory
      - mutable

## String Manipulation

```python
# Declaration
word = 'Hello'

# Access
>>> word[0]
H

# Length
>>> len(word)
5

# Find
>>> word.count('l')  # how many 'l'?
2

>>> word.find('l')   # where is 'l'? (return lowest index)
2
>>> word.find('a')   # return -1 if not found
-1
>>> word.rfind('l')   # return highest index
3

>>> word.index('H')   # return lowest index
0
>>> word.index('a')   # raise ValueError if not found
ValueError: substring not found
>>> word.rindex('l')
3

# Check presence
>>> 'H' in word
True
>>> 'H' not in word
False

# Split
word = 'Hello World'
>>> word.split(' ')
['Hello', 'World']

# Strip
stripped = '   abc   '
>>> stripped.strip()
'abc'
>>> stripped.lstrip()
'abc   '
>>> stripped.rstrip()
'   abc'

# Startswith / Endswith
>>> word.startswith('H')
True
>>> word.endswith('H')
False

# Replacing
>>> word.replace('Hello', 'Goodbye')
Goodbye World
>>> word.replace('l', 'L', 1)   # replace max 1 time
HeLlo World
>>> word.replace('l', 'L', 2)   # replace max 2 times
HeLLo World

# Change case
>>> word.upper()
HELLO WORLD
>>> word.lower()
hello world
>>> word.title()
Hello World
>>> word.capitalize()
Hello world
>>> word.swapcase()
hELLO wORLD

# Reversing
>>> word[::-1]
dlroW olleH
>>> ''.join(reversed(word))
dlroW olleH

# Join
>>> '-'.join(word)
H-e-l-l-o- -W-o-r-l-d
>>> 'Hello'.join('123')
1Hello2Hello3

# Partition
>>> 'Hello'.partition('e')   # return 3-tuple
('H', 'e', 'llo')
>>> '12345'.partition('3')
('12', '3', '45')

# Check type - return boolean
s.isalpha()   # is alphabetic?
s.isalnum()   # is alphanumeric?
s.isdigit()   # is digit?
s.isnumeric()   # is numeric?
s.isdecimal()   # is decimal?
```







> 문자열 조작할땐 항상 **슬라이싱**을 우선으로 사용할것!

- `a = b`로 하면 참조형태. 값을 할당하려면 `a = b[:]`

