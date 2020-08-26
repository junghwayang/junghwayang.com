---
title: 'RNN - Word Embedding'
date: '2019-10-15'
---

> 시퀀스 데이터를 처리하는 기본적인 딥러닝 모델 : 순환 신경망 (**RNN** : Recurrent Neural Network), 1D CNN (Convolutional Neural Network)

### RNN을 사용하는 예시
- 문서 분류나 timeseries(시계열) 분류
  - ex) 글의 주제나 책의 저자 식별하기
- 시계열 비교
  - ex) 두 문서나 두 주식가격이 얼마나 밀접하게 관련있는지
- Sequence-to-sequence 학습
  - ex) 영어 문장을 불어로 변환하기
- Sentiment analysis (감성 분석)
  - ex) 트윗,영화리뷰가 긍정적인지 부정적인지
- 시계열 예측
  - ex) 최근 날씨데이터 주어졌을 때 미래 날씨 예측하기

# Text 데이터 다루기

Text - 단어의 시퀀스 or 문자의 시퀀스
: 보통은 단어 수준으로 작업하는 경우가 많음

> 자연어 처리(NLP)를 위한 딥러닝은 모델이 사람처럼 진짜 텍스트를 이해하는 게 아니라, 언어에 대한 통계적 구조를 만들어 처리하는 것. 단어, 문장, 문단에 적용한 패턴 인식임 (컴퓨터 비전이 픽셀에 적용한 패턴 인식인 것처럼)

### **Vectorizing text (텍스트 벡터화)**
: 텍스트를 수치형 텐서로 변환하는 과정 (모든 딥러닝 모델은 입력으로 수치형 텐서만 다룰 수 있으니까)

- 텍스트를 단어로 나누고, 각 단어를 하나의 벡터로 변환
- 텍스트를 문자로 나누고, 각 문자를 하나의 벡터로 변환
- 텍스트에서 단어나 문자의 n-gram을 추출하여 각 n-gram을 하나의 벡터로 변환
  - n-gram은 문장에서 추출한 N개(+그 이하)의 연속된 단어,문자 그룹

Token (토큰)
: 단어, 문자, n-gram처럼 텍스트를 나누는 단위 

Tokenization (토큰화)
: 텍스트를 토큰으로 나누는 작업

> **텍스트 벡터화** = 토큰화를 적용하고 생성된 토큰에 수치형 벡터를 연결하는 것. 이 벡터는 시퀀스 텐서로 묶여져서 딥러닝 모델에 주입됨

![](https://dpzbhybb2pdcj.cloudfront.net/chollet/Figures/06fig01.jpg)

### **토큰과 벡터를 연결하는 방법**
1. One-hot Encoding
  - 대부분 0으로 채워져 sparse 벡터
  - 고차원 (어휘사전 단어 수와 차원이 같음)
  - 수동으로 인코딩
2. Token Embedding (=Word Embedding)
  - 밀집 벡터
  - **저차원**의 실수형 벡터 (보통 256차원, 512차원, 큰 어휘사전 다룰땐 1024차원)
  - 데이터로부터 학습됨

# One-hot Encoding
모든 단어에 고유한 정수 인덱스 i를 부여하고, i를 크기가 N(voca 크기)인 이진벡터로 변환.

이 벡터는 i번째 원소만 1이고 나머지는 모두 0.

```python
from keras.preprocessing.text import Tokenizer

samples = ['The cat sat on the mat.', 'The dog ate my homework.']

# 가장 빈도가 높은 1,000개의 단어만 선택하도록 Tokenizer 객체 생성
tokenizer = Tokenizer(num_words=1000)

# 단어 인덱스 구축
tokenizer.fit_on_texts(samples)

# 문자열을 정수 인덱스의 리스트로 변환
>>> sequences = tokenizer.texts_to_sequences(samples)
[[1, 2, 3, 4, 1, 5], [1, 6, 7, 8, 9]]

# 계산된 단어 인덱스
>>> word_index = tokenizer.word_index
{'the': 1,
 'cat': 2,
 'sat': 3,
 'on': 4,
 'mat': 5,
 'dog': 6,
 'ate': 7,
 'my': 8,
 'homework': 9}

# 고유한 토큰 갯수
>>> len(word_index)
9
```

# Word Embedding
## < 1. Embedding층을 사용하여 학습하기 >
- 랜덤한 단어 벡터로 시작해서 신경망의 가중치 학습하는 것처럼 단어 벡터를 학습
- 임베딩 공간이 구조적이지 않음
  - ex) accurate와 exact 단어는 비슷한 의미이지만, 완전히 다른 임베딩을 가짐
- 단어 벡터 사이에 좀 더 추상적이고 기하학적인 관계를 얻으려면 단어 사이에 있는 의미 관계를 반영해야 함
  - **단어 임베딩** = 언어를 기하학적 공간에 매핑하는 것. 동의어가 비슷한 단어 벡터로 임베딩될 것임
- 두 단어 벡터 사이의 **거리** (L2 거리) = 단어 사이의 의미 거리와 관계있음

< 2D 평면에 임베딩된 4개의 단어 >

![](https://dpzbhybb2pdcj.cloudfront.net/chollet/Figures/06fig03.jpg)

임베딩 공간의 **특정 방향**도 의미를 가질 수 있음

- `cat` → `tiger`로 이동하는 것, `dog` → `wolf`로 이동하는 것
  - = 애완동물 → 야생동물로 이동하는 벡터로 해석할 수 있음
- `dog` → `cat`로 이동하는 것, `wolf` → `tiger`로 이동하는 것
  - = 개과 → 고양이과로 이동하는 벡터로 해석할 수 있음

- `king` 벡터에
  - `female` 벡터를 더하면 = `queen`
  - `plural` (복수) 벡터를 더하면 = `kings`

좋은 단어 임베딩 공간을 만드는건 문제에 따라 달라짐. 새로운 작업에는 새로운 임베딩을 학습해야함 → Embedding 층의 가중치를 학습하기

```python
from keras.layers import Embedding

# Embedding(가능한 토큰의 개수, 임베딩 차원)
embedding_layer = Embedding(1000, 64)
```

### **Embedding 층**
- 정수 인덱스를 밀집 벡터로 매핑하는 딕셔너리와 같음
- 정수(단어 인덱스)를 입력으로 받아 내부 딕셔너리에서 이 정수에 연관된 벡터를 찾아 반환
- Embedding층의 객체 생성시 가중치는 랜덤하게 초기화됨

입력

- 크기가 `(samples, sequence_length)`인 **2D 정수 텐서**
- (32, 10)크기의 배치 = 길이가 10인 시퀀스 32개로 이루어진 배치
- 배치에 있는 모든 시퀀스는 길이가 같아야 하므로, 작은 길이의 시퀀스는 0으로 패딩되고 길이가 더 긴 시퀀스는 잘림

출력

- 크기가 `(samples, sequence_length, embedding_dimensionality)`인 **3D 실수형 텐서**
- 반환된 3D 텐서는 RNN층이나 1D 합성곱 층에서 처리됨

### **IMDB 영화리뷰 감성 예측문제에 Embedding층과 분류기 사용하기**

영화리뷰에서 가장 빈도가 높은 1만개의 단어를 추출하고, 리뷰에서 20개 단어 이후는 버림. 1만개의 단어에 대해 8차원의 임베딩을 학습해 정수 시퀀스 입력을 임베딩 시퀀스로 바꾸기

```python
from keras.datasets import imdb
from keras.preprocessing.sequence import pad_sequences
from keras.models import Sequential
from keras.layers import Flatten, Embedding

# 특성으로 사용할 단어의 수
max_features = 10000

# 사용할 텍스트의 길이
maxlen = 20

# 정수 리스트로 데이터 로드
(x_train, y_train), (x_test, y_test) = imdb.load_data(num_words=max_features)

# 리스트를 (samples, maxlen) 크기의 2D 정수 텐서로 변환
x_train = pad_sequences(x_train, maxlen=maxlen)
x_test = pad_sequences(x_test, maxlen=maxlen)

model = Sequential()

# Embedding층의 출력크기는 (samples, maxlen, 8)
# 나중에 Flatten층에서 펼치기 위해 input_length를 지정해줘야 함
model.add(Embedding(10000, 8, input_length=maxlen))

# 3D 임베딩 텐서를 (samples, maxlen * 8) 크기의 2D 텐서로 펼치기
model.add(Flatten())
```

## < 2. 사전 훈련된 Word Embedding 사용하기 >
Keras의 Embedding database
- Word2vec
- GloVe

### **GloVe 단어 임베딩 사용하기**
Download pre-trained word vectors [here](https://nlp.stanford.edu/projects/glove/).

< 임베딩 전처리 >

```python
glove_dir = './datasets/'

embeddings_index = {}
f = open(os.path.join(glove_dir, 'glove.6B.100d.txt'), encoding="utf8")
for line in f:
  values = line.split()
  word = values[0]
  coefs = np.asarray(values[1:], dtype='float32')
  embeddings_index[word] = coefs
f.close()

# Embedding 층에 주입할 수 있도록 임베딩 행렬 만들기
# 행렬 크기 = (max_words, embedding_dim)이어야 함
embedding_dim = 100

embedding_matrix = np.zeros((max_words, embedding_dim))
for word, i in word_index.items():
  if i < max_words:
    embedding_vector = embeddings_index.get(word)

    # 임베딩 인덱스에 없는 단어는 그대로 0
    if embedding_vector:
      embedding_matrix[i] = embedding_vector   
```

< 모델 정의하기 >

```python
from keras.models import Sequential
from keras.layers import Embedding, Flatten, Dense

model = Sequential()
model.add(Embedding(max_words, embedding_dim, input_length=maxlen))
model.add(Flatten())
model.add(Dense(32, activation='relu'))
model.add(Dense(1, activation='sigmoid'))
model.summary()
```

< 모델에 GloVe 임베딩 로드하기 >

```python
model.layers[0].set_weights([embedding_matrix])
model.layers[0].trainable = False
```