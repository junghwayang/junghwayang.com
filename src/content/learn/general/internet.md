---
title: 'Internet'
date: '2020-07-06'
---

## How does the Internet work?

- Long, giant wire connects different computers to each other
- 인터넷에 연결된 컴퓨터들(=**서버**)은 특별한 작업 수행
  - 24/7 온라인에 연결돼 있어야함
  - ready to serve you all of the data and files that you’re requesting when you try to access websites
- 인터넷에 접근하려는 컴퓨터 = client
- 서버에 모든 웹사이트가 저장되기엔 너무 벅참

### client가 데이터를 요청하면

- **ISP**(Internet service provider(e.g. Telstra, Optus))가 **DNS server**에 요청(like phone book)
- DNS서버는 domain 주소를 IP주소로 변환해서 다시 client의 browser로 send back - 인터넷에 연결된 모든 컴퓨터는 자신만의 own IP주소를 가짐
- IP주소를 갖게 되면, browser-서버 사이에 **TCP/IP** socket 연결이 됨.
- client는 ISP을 통해 IP주소로 HTTP request를 보냄
  - 이 메세지는 Internet backbone을 통해 전송
  - Internet backbone = Submarine cable
  - = client가 보내는 데이터는 `ISP → Internet backbone → server` 를 통해 전송됨
- 서버는 브라우저에 HTTP response로 데이터와 함께 응답 (with HTTP status code)

### TCP/IP

- ***TCP*** = Transmission Control Protocol
- ***IP*** = Internet Protocol
- 둘다 웹에서 데이터가 어떻게 전송돼야 하는지 정하는 communication protocols

## How do Websites work?

- <span>HTML</span> (HyperText Markup Language)
  - = for structure
  - 집을 짓는 건축가, 목수, 등등
- <span>CSS</span> (Cascading Style Sheets)
  - = for styling 
  - 페인터나 데코레이터
- <span>JavaScript</span>
  - = for behavior
  - 전기설치 or 수도가 작동하게, 가스가 들어오게 하는 사람 (집이 제 기능을 하게 함)