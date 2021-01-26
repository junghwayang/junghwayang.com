---
title: 'Linked List'
date: '2021-01-25'
---

> Written in Python.

- <span>Linear</span> data structure
- Elements are not stored at contiguous memory locations.
- Each node contains a data field and a reference(link) to the next node in the list.
  
## Types of Linked List

1. Singly linked list: node안에 링크가 1개. 단방향으로 진행.
2. Doubly linked list: node안에 링크가 2개. 양방향으로 진행.
3. Circular linked list: 마지막 노드가 첫번째 노드를 가르켜 계속 회전함.

## Linked List vs Array

> Both store linear data of similar types.

- Array
  - a collection of similar type data elements.
  - elements are stored consecutively.
  - fixed size
      - → memory utilization is inefficient.
  - the elements belong to indexes.
      - → fast access to elements (e.g. `arr[4]`)
  - insertion and deletion: slow (추가/삭제된 지점의 다음 원소들을 한꺼번에 이동시켜야함)
  - memory is assigned during compile time.
- Linked list
  - a collection of unordered linked elements (=nodes)
  - elements are stored randomly.
  - dynamic & flexible size
      - → memory utilization is efficient.
  - random access is not allowed. have to access elements sequentially starting from the first node.
      - → slow access to elements (takes linear O(n) time)
  - insertion and deletion: fast (추가/삭제된 지점의 양쪽 노드의 링크만 바꿔주면 됨)
  - memory is allocated during execution or runtime.
  - need extra memory to store pointers.

## Big O Complexity for Linked List

- Time complexity
  - Insertion/Deletion: O(1)
  - Access/Search: O(n)
- Space complexity: O(n)

## Usage

```python
class Node:
  def __init__(self, data): 
    self.data = data   # Assign data 
    self.next = None   # Initialize next as null 

class LinkedList: 
  def __init__(self):  
    self.head = None
```