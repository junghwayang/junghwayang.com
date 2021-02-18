---
title: 'HTTP'
date: '2020-07-01'
---

## What is HTTP?

> <span>HTTP</span> = **H**yper **T**ext **T**ransfer **P**rotocol

- Web상에서 HTML같은 hypermedia documents를 전송하기 위한 protocol(통신 규약)
- Client-server protocol = requests are initiated by the recipient (주로 웹브라우저)
- Textual protocol = 모든 communication이 plain text로 이루어짐
- <span>Stateless</span> protocol
  - 서버가 그 어떤 data/state도 보관하지 않음 (이전에 어떤 communications를 주고 받았는지 모름)
  - = 유저가 한번 로그인했다고 해서 서버가 '로그인됨' 상태를 계속 알고있는게 아니라, 그 후에 request를 보낼때마다 '나 로그인된 유저야'라고 매번 알려줘야함
- For communication between web **clients** and **servers**
  - Client : browsers, or any type of program, device
  - Server : 주로 cloud의 컴퓨터
- `http://` = over unencrypted connections
- `https://` = over a secure TLS channel

> Communication between client computers and web servers is done by **sending HTTP Requests** and **receiving HTTP Responses**

### HTTP Request / Response

1. client(browser)가 Web에 HTTP request를 보냄
2. Web서버가 request를 받음
3. 서버가 request를 처리할 application을 실행함
4. 서버가 client(browser)에 HTTP response를 return함
5. client(browser)가 response를 받음

### XHR (XMLHttpRequest)

- browser와 서버 사이에서 데이터를 transfer하기 위해 사용되는 JavaScript object
- full페이지를 reload하지 않고 data를 불러오고, 페이지의 일부분만 업데이트 할 수 있음
- AJAX와 JSON의 underlying concept
- XML뿐만 아니라 모든 타입의 data를 불러올 수 있음

> browser가 data를 요청하면 서버는 data를 `XML`이나 `JSON`형태로 보내줌

![XHR](https://www.w3schools.com/whatis/img_ajax.gif)

## Proxy Server

![proxy](https://mdn.mozillademos.org/files/13679/Client-server-chain.png)

- <span>HTTP 통신을 중계</span>함 (client가 proxy를 통해서 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해줌)
- Proxy = 서버와 client 사이에 중계기로서 대리로 통신을 수행하는 것
- Proxy server = 그 중계 기능을 하는 것
- 일부는 proxy server에 요청된 내용들을 **cache에 저장**해둠
  - cache에 있는 정보를 요청하면, 원격 서버에 접속해 데이터를 가져올 필요가 없음
  - → 전송 시간을 절약함 + 불필요하게 외부와의 연결을 하지 않아도 됨 + 외부와의 트래픽을 줄여 네트워크 병목 현상을 방지
- Proxy 사용 목적
  - 익명으로 컴퓨터를 유지 (for security)
  - cache를 사용해 리소스로의 접근을 빠르게 하기 위해 (Web proxy는 웹서버로부터 웹페이지를 cache로 저장하는 데 흔히 쓰임)
  - 네트워크를 보호하는 방화벽 역할

## HTTP Messages

### HTTP Request

<img src="https://mdn.mozillademos.org/files/13687/HTTP_Request.png" width="500px">

### HTTP Response

<img src="https://mdn.mozillademos.org/files/13691/HTTP_Response.png" width="500px">
