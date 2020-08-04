---
title: 'Markdown Syntax'
date: '2020-06-21'
---

## Headers

```
# H1
## H2
### H3
#### H4
##### H5
###### H6
```

## Emphasis

```
*italic*
**bold**
***italic and bold***
~~strikethrough~~
```

## Lists

```
1. Ordered list
- Unordered list
  Indented paragraphs
```

## Links

```
[text](https://link)
[refer to repo file](../blob/master/FILENAME)
http://www.com or <http://www.com> - Automatically turned into links
```

## Images

```
![alt text](img URL)
```

## Code and Syntax highlighting

- inline code: `` ` ` ``
  - inline code안에 `` ` `` 삽입하기 : `` ` `` 두개로 code감싸기
- block code: `` ```js ``

## Tables

at least 3 dashes to separate each header cell.

```
| col 1         | col 2      | col 3         |
| ------------- |:----------:| -------------:|
| left-aligned  | centered   | right-aligned |
```

## Blockquotes

```
> blockquotes
> this line is part of the same quote
```

## Inline HTML

```
<dl>
  <dt>Definition list</dt>
  <dd>Inside inline HTML, use HTML tag for <strong>bold</strong> and <em>italic</em></dd>
</dl>
```

## Divider

```
---
```