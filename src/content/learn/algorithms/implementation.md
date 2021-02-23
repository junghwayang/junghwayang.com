---
title: 'Implementation'
date: '2021-02-23'
---

> 구현(Implementation) 유형: 풀이를 떠올리는 것은 쉽지만 소스코드로 옮기기 어려운 문제들.

- 알고리즘 문제에서의 2차원 공간은 <span>행렬(Matrix)</span>의 의미로 사용됨.
- 시뮬레이션 & 완전탐색 문제에서는 2차원 공간에서의 **방향 벡터**가 자주 활용됨.

## 상하좌우 문제

N x N 크기의 정사각형 공간에서 (1, 1)시점에서 시작했을때, 계획서에 따라 움직이면 어디에 도달하는지 출력하기.

(정사각형 공간을 벗어나는 움직임은 무시됨.)

```python
# Input
# 5
# R R R U D D

# Output
# 3 4

n = int(input())
plans = input().split()

x, y = 1, 1

move_types = ['L', 'R', 'U', 'D']
dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]

for plan in plans:
  i = move_types.index(plan)
  nx = x + dx[i]
  ny = y + dy[i]

  if nx < 1 or nx > n or ny < 1 or ny > n:
    continue

  x, y = nx, ny

print(x, y) 
```

## 시각 문제

정수 N이 입력되면 00시 00분 00초부터 N시 59분 59초까지의 모든 시각 중에서 3이 하나라도 포함되는 모든 경우의 수를 구하기

→ 하루는 86,400초이므로 컴퓨터가 충분히 빠르게 계산할 수 있는 범위임. 단순하게 초를 1씩 증가시키면서 3이 포함되어 있는지 확인하면 됨.

→ <span>완전 탐색(Brute force)</span> 유형 (가능한 경우의 수를 모두 검사해보는 탐색방법)

```python
# Input
# 5

# Output
# 11475

h = int(input())

count = 0
for i in range(h + 1):
  for j in range(60):
    for k in range(60):
      if '3' in str(i) + str(j) + str(k):
        count += 1

print(count)
```

## 왕실의 나이트 문제

왕실의 정원은 8 x 8 좌표평면. 나이트는 L자 형태로만 이동할 수 있고, 정원밖으로는 못 나감.

특정 위치에서 2가지 경우로 이동할 수 있음.

- 수평으로 두 칸 이동 후 수직으로 한 칸 이동
- 수직으로 두 칸 이동 후 수평으로 한 칸 이동

나이트의 위치가 주어졌을 때 나이트가 이동할 수 있는 경우의 수를 출력하기.

(행 위치는 위에서부터 1부터 8, 열 위치는 a부터 h)

예) c2에 있을 때 이동할 수 있는 경우의 수는 6가지.

→ 총 가능한 8가지 경로를 하나씩 확인하며 각 위치로 이동이 가능한지 확인하면 됨.

```python
# Input
# a1

# Output
# 2

# 나이트가 이동할 수 있는 8가지 방향 정의하기
steps = [
  (-2, -1),
  (-2, 1),
  (-1, -2),
  (-1, 2),
  (1, -2),
  (1, 2),
  (2, -1),
  (2, 1)
]

input_data = input()
row = int(input_data[1])
column = ord(input_data[0]) - ord('a') + 1

result = 0
for step in steps:
  # 이동하고자 하는 위치 확인
  next_row = row + step[0]
  next_column = column + step[1]

  # 해당 위치로 이동이 가능하다면 카운터 증가
  if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_column <= 8:
    result += 1

print(result)
```

## 문자열 재정렬

알파벳 대문자와 숫자(0~9)로만 구성된 문자열이 주어졌을때, 모든 알파벳을 오름차순으로 정렬하여 이어서 출력한 뒤, 모든 숫자를 더한 값을 이어서 출력하기.

예) K1KA5CB7 → ABCKK13

→ 문자를 하나씩 확인해서 숫자면 따로 합계를 계산하고, 알파벳이면 별도의 리스트에 저장하기.

```python
data = input()

value = 0
result = []

for x in data:
  # 알파벳이면 리스트에 삽입
  if x.isalpha():
    result.append(x)
  # 숫자는 따로 더하기
  else:
    value += int(x)

# 알파벳을 오름차순으로 정렬
result.sort()

# 숫자가 하나라도 존재하는 경우 가장 뒤에 삽입
if value != 0:
  result.append(value)

print(*result, sep='')
```