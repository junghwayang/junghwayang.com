---
title: 'NumPy'
date: '2019-10-01'
---

**Why is NumPy important in Machine Learning?**

많은 ML 알고리즘이 NumPy 기반으로 작성돼 있고, 이들 알고리즘의 입력 데이터와 출력 데이터를 NumPy 배열 타입으로 사용.

```python
import numpy as np
```

# 1. ndarray

- NumPy의 기반 데이터 타입
- 다차원 배열을 쉽게 생성하고 다양한 연산을 수행

### np.array( )

ndarray로 변환을 원하는 객체를 인자로 입력해 ndarray로 반환하기

- 리스트 [ ]는 1차원
- 리스트의 리스트 [[ ]]는 2차원

### ndarray.shape

차원과 크기를 tuple 형태로 나타내기

### ndarray.ndim

차원 확인하기

```python
arr1 = np.array([1, 2, 3])

>>> arr1.shape
(3, )   # 1차원 array. 3개의 데이터를 가지고 있음
>>> arr1.ndim
1

arr2 = np.array([[1, 2, 3],
                 [2, 3, 4]])

>>> arr2.shape
(2, 3)   # 2차원 array. 2개의 행과 3개의 열로 구성되어 총 6개의 데이터를 가지고 있음
>>> arr2.ndim
2

arr3 = np.array([[1, 2, 3]])

>>> arr3.shape
(1, 3)   # 2차원 array. 1개의 행과 3개의 열로 구성되어 총 3개의 데이터를 가지고 있음
>>> arr3.ndim
2
```

### ndarray.dtype

데이터 타입 확인하기

- ndarray내에선 같은 데이터 타입만 가능
  - 즉, 한 개의 ndarray 객체에 int와 float가 함께 있을 수 없음
  - 만약 다른 데이터 유형이 섞여있는 리스트를 ndarray로 변경하면 데이터 크기가 더 큰 데이터 타입으로 형 변환을 일괄 적용함

```python
>>> arr1.dtype
int32
```

### ndarray.astype(‘dtype’)

데이터 타입 변경하기

```python
>>> arr1.astype('float64')
[1., 2., 3.]
 
arr4 = np.array([1.1, 2.1, 3.1])
 
>>> arr4.astype('int32')
[1, 2, 3]
```

## < ndarray 편리하게 생성하기 >

### np.arange(start, stop, step)

array를 range로 표현 (Python의 `range( )`와 유사한 기능)

```python
>>> np.arange(10)
[0, 1, 2, 3, 4, 5, 6, 7, 8 ,9]
>>> np.arange(1, 5)
[1, 2, 3, 4]
>>> np.arange(1, 10, 2)
[1, 3, 5, 7, 9]
```

### np.zeros(튜플 형태의 shape값)

모든 값을 0으로 채운 ndarray 반환하기

```python
>>> np.zeros((3, 2))   # dtype 정해주지 않으면 기본값인 float64형의 데이터로 채워짐
[[0., 0.],
 [0., 0.],
 [0., 0.]]
>>> np.zeros((3, 2), dtype='int32')
[[0, 0],
 [0, 0],
 [0, 0]]
```

### np.ones(튜플 형태의 shape값)

모든 값을 1으로 채운 ndarray 반환하기

```python
>>> np.ones((3, 2))
[[1., 1.],
 [1., 1.],
 [1., 1.]]
```

## < ndarray의 차원과 크기 변경하기 >

### ndarray.reshape(튜플 형태의 shape값)

특정 차원, 크기로 변환. `-1`을 인자로 사용하면 알아서 맞춰줌.

```python
arr = np.arange(10)

>>> arr.reshape(2, 5)
[[0, 1, 2, 3, 4],
 [5, 6, 7, 8, 9]]
>>> arr.reshape(5, 2)
[[0, 1],
 [2, 3],
 [4, 5],
 [6, 7],
 [8, 9]]
>>> arr.reshape(-1, 5)   # 열이 5개가 되도록 알아서 행을 2개로 맞춰줌
[[0, 1, 2, 3, 4],
 [5, 6, 7, 8, 9]]
>>> arr.reshape(-1, 1)   # 원본 array가 어떤 형태더라도, 반드시 1개의 열을 가진 2차원 ndarray로 변환됨
[[0],
 [1],
 [2],
 [3],
 [4],
 [5],
 [6],
 [7],
 [8],
 [9]]
```

---

# 2. Indexing

## < 단일 값 추출 >

```python
arr1 = np.arange(1, 10)
value = arr1[2]

>>> value
3
```

```python
arr2 = arr1.reshape(3, 3)

>>> arr2
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
>>> arr2[0, 1]
2
>>> arr2[1, 2]
6
>>> arr2[2, 2]
9
```

## < Slicing >

```python
>>> arr1
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> arr1[0:3]
[1, 2, 3]
>>> arr1[:4]
[1, 2, 3, 4]
>>> arr1[4:]
[5, 6, 7, 8, 9]
>>> arr1[:]
[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```python
>>> arr2
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
>>> arr2[0:2, 0:2]
[[1, 2],
 [4, 5]]
>>> arr2[1:3, :]
[[4, 5, 6],
 [7, 8, 9]]
>>> arr2[:2, 1:]
[[2, 3],
 [5, 6]]
>>> arr2[:3, 0]
[1, 4, 7]
>>> arr2[0]
[1, 2, 3]
```

## < Fancy Indexing >

```python
>>> arr2
[[1, 2, 3],
 [4, 5, 6],
 [7, 8, 9]]
>>> arr2[[0, 1], 2]
[3, 6]
>>> arr2[[0, 1], 0:2]
[[1, 2],
 [4, 5]]
>>> arr2[2, [1, 2]]
[8, 9]
>>> arr2[[0, 2]]
[[1, 2, 3],
 [7, 8, 9]]
```

## < Boolean Indexing >

```python
>>> arr1
[1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> arr1[arr1 > 5]   # [ ]내에 조건문을 그대로 기재
[6, 7, 8, 9]
>>> arr1[arr1 != 2]
[1, 3, 4, 5, 6, 7, 8, 9]
```

---

# 3. Sorting

### np.sort( )

NumPy에서 sort( ) 호출. 원본 행렬은 그대로 유지한 채 정렬된 행렬을 반환

### ndarray.sort( )

행렬 자체에서 sort( ) 호출. 원본 행렬 자체를 정렬한 형태로 변환. 반환 값은 None.

- 기본값은 오름차순. 내림차순 정렬시 `[::-1]`

```python
arr = np.array([3, 1, 9, 5])
sort1 = np.sort(arr)

>>> arr
[3, 1, 9, 5]
>>> sort1
[1, 3, 5, 9]
>>> np.sort(arr)[::-1]   # 내림차순 정렬
[9, 5, 3, 1]

sort2 = arr.sort()

>>> arr
[1, 3, 5, 9]
>>> sort2
None
```

행렬이 2차원 이상일 경우 : axis 값으로 방향 정함

- `axis=0` : 행 방향으로 정렬
- `axis=1` : 열 방향으로 정렬

```python
arr = np.array([[8, 12],
                [7, 1 ]])

>>> np.sort(arr, axis=0)
[[7,  1],
 [8, 12]]
>>> np.sort(arr, axis=1)
[[8, 12],
 [1,  7]]
```

### np.argsort( )

정렬된 행렬의 원본 행렬 인덱스를 ndarray형으로 반환. 원본 행렬의 인덱스가 필요할 때 사용.

```python
arr = np.array([3, 1, 9, 5])

>>> np.sort(arr)
[1, 3, 5, 9]
# 정렬된 행렬에서 순서대로
# 1의 원래 인덱스값은 1, 3의 원래 인덱스값은 0, 5의 원래 인덱스값은 3, 9의 원래 인덱스값은 2였음

>>> np.argsort(arr)
[1, 0, 3, 2]
>>> np.argsort(arr)[::-1]
[2, 3, 0, 1]
```

---

# 4. Linear Algebra

### 행렬 곱 – np.dot( )

왼쪽 행렬의 **열** 개수와 오른쪽 행렬의 **행** 개수가 동일해야 행렬 내적연산이 가능함

```python
A = np.array([[1, 2, 3],
              [4, 5, 6]])
B = np.array([[7, 8],
              [9, 10],
              [11, 12]])

>>> np.dot(A, B)
[[ 58,  64],
 [139, 154]]
```

### 전치 행렬 – np.transpose( )

행과 열 위치를 교환한 행렬

```python
A = np.array([[1, 2],
              [3, 4]])

>>> np.transpose(A)
[[1, 3],
 [2, 4]]
```