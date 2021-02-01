---
title: 'Queue'
date: '2021-01-30'
---

> Written in Python.

- Linear data structure
- <span>FIFO</span> (First-In First-Out)
- Insertion: rear
- Deletion: front
- Example
  - waiting in the queue to enter a restaurant
- Useful in streaming, BFS

## Basic Operations

- <span>enqueue</span> or <span>put</span>: Add an item at the rear.
  - If the queue is full → Overflow condition
  - `append(item)`
- <span>dequeue</span> or <span>get</span>: Remove an item from the front.
  - If the queue is empty → Underflow condition
  - `pop(0)`
- <span>front</span>: Get the front item from queue.
- <span>rear</span>: Get the last item from queue.

## Big-O Complexity for Queue

- Time complexity
  - Insertion/Deletion: O(1)
  - Access/Search: O(n)
- Space complexity: O(n)

## Implementation

```python
# Create queue class
class Queue:
  # Initialize
  def __init__(self):
    self.items = []

  # Add an item to the end
  def enqueue(self, item):
    self.items.append(item)
  
  # Remove an item from the front
  def dequeue(self):
    # Check if stack is not empty
    if not self.isEmpty():
      return self.items.pop(0)
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