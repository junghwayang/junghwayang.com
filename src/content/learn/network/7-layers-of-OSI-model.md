---
title: 'OSI Model (7 Layers)'
date: '2021-03-05'
---

## OSI 7 계층이란?

- <span>OSI</span> = Open Systems Interconnection model
  - 컴퓨터들이 서로 통신하기 위해 사용하는 기준을 제공
- OSI 7 계층: 네트워크에서 통신이 일어나는 과정을 7단계로 나눈 것
- 7계층은 왜 나눌까?
  - useful for troubleshooting network problems.
  - 통신이 일어나는 과정을 단계별로 파악할 수 있음
  - 특정한 곳에 이상이 생기면 다른 단계의 장비/SW를 건들이지 않고도 그 단계만 고칠 수 있음

### How data flows through the OSI model?

사람이 읽을 수 있는 정보가 네트워크를 통해 한 디바이스에서 다른 디바이스로 전송되려면,

데이터는 전송하는 장비에서 OSI 7계층을 **travel down** (7레이어에서 1레이어로)하고,

데이터를 받는 장비에서 **travel up**(1레이어에서 7레이어로) 해야 한다.

![](https://www.cloudflare.com/img/learning/ddos/what-is-a-ddos-attack/osi-model-7-layers.svg)

### 1 layer: Physical (물리 계층)

- 네트워크 **하드웨어**
- 단지 데이터를 전달만 할뿐 전송되는 데이터가 무엇인지, 어떤 에러가 있는지 등은 전혀 신경안씀
- 전송되는 단위: 비트 (1 or 0)
- e.g. 통신 케이블, 리피터, 허브

### 2 layer: Data Link (데이터 링크 계층)

- 물리계층을 통해 송수신되는 정보의 오류와 흐름을 관리하여 **안전한 정보의 전달**을 수행하도록 도와줌
- Point to Point간 신뢰성있는 전송을 보장하기 위한 계층
- Mac 주소를 가지고 통신 (네트워크 카드가 만들어질 때 Mac 주소값을 물리적으로 할당받음)
- 전송되는 단위: 프레임
- e.g. 이더넷, 브리지, 스위치

### 3 layer: Network (네트워크 계층)

- 여러개의 노드를 거칠때마다 경로를 찾아주는 역할
- 데이터를 목적지까지 안전하고 빠르게 전달
- 라우터로 경로를 선택하고 IP 주소를 정하고, 경로에 따라 패킷을 전달해줌
- e.g. 라우터(경로설정), IP(주소부여)

### 4 layer: Transport (전송 계층)

- End-to-end 유저들간에 신뢰성있고 효율적인 데이터를 전송
- TCP 프로토콜(Transmission Control Protocol): 신뢰성, 연결지향적
- UDP 프로토콜(User Datagram Protocol): 비신뢰성, 비연결성, 실시간

### 5 layer: Session (세션 계층)

- 데이터가 통신하기 위한 논리적인 연결
- TCP/IP 세션을 만들고 없애는 책임을 짐
- e.g. API, Socket

### 6 layer: Presentation (표현 계층)

- 데이터 표현이 상이한 응용 프로세스의 독립성을 제공하고 암호화함
- 사용자의 명령어를 포장/압축/암호화
- e.g. ASCII, JPEG, GIF

### 7 layer: Application (응용 계층)

- 응용 프로세스와 직접 관계하여 일반적인 **응용 서비스를 수행**함
- e.g. HTTP, FTP, SMTP, DNS