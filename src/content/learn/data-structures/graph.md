---
title: 'Graph'
date: '2021-02-07'
---

> Graph = 객체의 일부 쌍(pair)들이 **연관되어** 있는 객체 집합 구조

## 관련 용어

- 정점(Vertex)
- 간선(Edge)
- 차수(Degree)

### 그래프를 표현하는 방법

- 인접 행렬(Adjacency Matrix)
- 인접 리스트(Adjacency List)
  - 출발노드를 key로, 도착노드를 value로.
  - 도착노드는 여러 개가 될 수 있음 → List 형태로.

```python
graph = {
  1: [2, 3, 4],
  2: [5],
  3: [5],
  4: [],
  5: [6, 7],
  6: [],
  7: [3],
}
```

## 오일러 경로

- <span>오일러의 정리</span>: 모든 정점이 짝수 개의 차수를 갖는다면, 모든 간선을 한 번씩만 그
- 오일러 회로: 
- 오일러 경로 존재여부 판단?
  - 무향 그래프인 경우, Degree가 홀수인 정점이 2개이면 오일러 경로, 0개면 오일러 회로가 존재.

## 해밀턴 경로 (Hamiltonian Path)

> 각 정점을 한번씩만 방문하는 무향 or 유향 그래프 경로

- 오일러 경로: 간선 기준 / 해밀턴 경로: 정점 기준
- 오일러 경로: 모든 edge를 정확히 1번씩만 방문하는 연속된 경로
  - 오일러 회로: 시작점과 도착점이 같은 경우
- 해밀턴 경로를 찾는 문제는 최적 알고리즘이 없는 NP-완전 문제
- 해밀턴 순환(Hamiltonian Cycle): 정점을 한번씩만 방문하고 원래 출발점으로 돌아오는 경로
- 외판원 문제: 정점을 한번씩만 방문하고 원래 출발점으로 돌아오는 경로 중 가장 짧은 경로
  - = 해밀턴 순환 중 최단거리

## 그래프 순회 (Graph Traversals) - DFS/BFS

> 그래프의 각 정점을 방문하는 과정 (=그래프 탐색)

### 깊이 우선 탐색 (DFS = Depth-First Search)

- BFS보다 널리 쓰임
- 주로 <span>스택 or 재귀</span>로 구현됨
- 백트래킹을 통해 효용 뛰어남

1. 재귀 구조로 구현

```python
def recursive_dfs(v, discovered=[]):
  discovered.append(v)
  for w in graph[v]:
    if not w in discovered:
      discovered = recursive_dfs(w, discovered)
  
  return discovered
```

### 너비 우선 탐색 (BFS = Breadth-First Search)

- 주로 <span>큐</span>로 구현됨
- 최단 경로를 찾는 다익스트라 알고리즘 등에 유용
