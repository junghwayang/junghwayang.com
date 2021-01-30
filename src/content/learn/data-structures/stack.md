---
title: 'Stack'
date: '2021-01-27'
---

> Written in Python.

- Linear data structure
- <span>LIFO</span> (Last In First Out)
- Insertion/Deletion: only on same end
- Example
  - stacked plates
  - undo (Ctrl + z)

## Basic Operations

- <span>push</span>: Add an item.
  - If the stack is full → Overflow condition
  - `append(item)`
- <span>pop</span>: Remove an item.
  - If the stack is empty → Underflow condition
  - `pop()`
- <span>peek</span> or <span>top</span>: Return top element of stack.
- <span>isEmpty</span>: Return true if stack is empty, else false.
- <span>size</span>: Return the size of the stack

## Big-O Complexity for Stack

- Time complexity
  - Insertion/Deletion: O(1)
  - Access/Search: O(n)
- Space complexity: O(n)

## Implementation

```python
# Create stack class
class Stack:
  # Initialize
  def __init__(self):
    self.items = []

  # Push an item to the end
  def push(self, item):
    self.items.append(item)

  # Pop an item from the end
  def pop(self):
    # Check if stack is not empty
    if not self.isEmpty():
      return self.items.pop()
    else:
      print('Stack underflow')
      exit()
  
  # Return top element of stack
  def peek(self):
    # Check if stack is not empty
    if not self.isEmpty():
      return self.items[-1]
    else:
      print('Stack underflow')
      exit()

  # Check if stack is empty
  def isEmpty(self):
    return len(self.items) == 0

  # Return size of stack
  def size(self):
    return len(self.items)
```