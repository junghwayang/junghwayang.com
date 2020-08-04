---
title: 'Authentication'
date: '2020-07-18'
---

## Why need authentication?

- Protect personal information
  - user가 생성한 username, password 등등으로 각 user마다 계정을 만들고,
  - 유저가 그 계정에서 생성한 모든 데이터들을 database에 저장함
  - 비밀번호나 개인 메세지같은 모든 개인정보들을 외부로부터 보호해야함
- Restrict access
  - 유저의 상태에 따라 웹사이트의 특정 영역에 접근을 제한해야함
  - e.g. Netflix 멤버쉽이 없는 유저는 영상시청 제한 or 로그인을 안한 게스트는 구매를 못함 등등

## Encrypt password

- password를 암호화하기
- 유저를 저장할땐 비밀번호를 encrypt하고, 유저를 불러올땐 decrypt

### Hashing

- encrypt한 비밀번호를 더 강화함. encrypt할땐 encryption key가 필요했음. 근데 그것만 있으면 누구나 decrypt 가능. hashing하면 key가 필요없음
- hash를 하는것은 쉽지만, hash된걸 푸는건(=hash를 decrypt하는건) 불가능.
- 똑같은 string을 hashing하면 항상 같은 hash가 생성됨
- 등록된 비밀번호의 hash를 푸는게 아니라, 반대로 유저가 회원가입할때 등록한 비밀번호를 hash함수를 이용해 hash로 변환해 저장해놓고, 로그인할때 입력하는 비밀번호를 hash로 변환해, 저장된 비밀번호의 hash와 일치하는지 확인
- hash를 푸는게 아니기 때문에 진짜 비밀번호가 plain text로 뭔지 아는건 유저뿐. 보안이 강화됨.

> 아무리 hash로 저장해도 6자리 비밀번호를 빠른 GPU로 hash푸는건 1초도 안걸림. 제일 좋은 보안은 10자리 이상의 긴 비밀번호를 만드는것. 12자리로 비밀번호 설정시 hash푸는건 몇년걸림.

### Hashing & Salting

- salt라는 랜덤 characters를 생성해, 비밀번호랑 결합시켜 hash function 적용
  - e.g. password (password1234) + salt (342342) => hash
- salt는 database에 hash와 함께 저장됨
- 로그인할때 입력하는 비밀번호에 저장된 salt를 합쳐 hash한게, 저장된 hash와 매치하면 로그인 성공
- **Salt rounds**
  - 1st round = 비밀번호 + salt = hash
  - 2nd round = 이 hash를 또다시 salt와 합쳐 hash.
  - Salt rounds가 10이면, 이 round를 10번 반복 후 -> salt + 최종 생성된 hash를 저장함
  - 유저가 로그인시 비밀번호를 입력하면, 저장된 salt로 같은 salting rounds를 똑같이 수행후, 계산된 hash와 저장된 hash를 비교. 매칭되면 로그인.

## Cookies & Sessions

- **Cookies**
  - 유저가 데이터를 생성하면 서버에서 response를 보낼때 cookie도 같이 생성해 유저 브라우저에 저장
  - 다음에 유저가 다시 접속해 request를 보내면 cookie도 같이 보내져서, 서버에서 cookie에 저장된 데이터들로 이 유저가 누군지, 뭘 좋아하는지 등등 정보를 알아냄
  - e.g. 아마존에서 신발을 카트에 넣어놓으면, 그 쿠키가 저장돼서 나중에 다시 접속해도 신발이 카트에 그대로 있음. 그리고 그 정보를 이용해 다른 사이트 광고에서도 내가 찜해놓은 신발이 보임.
- **Sessions**
  - 브라우저가 서버와 통신하는 period of time
  - e.g. 웹사이트에 접속하면 세션이 시작되고, 쿠키가 생성됨.
  - 쿠키에 user credential을 가짐. (= 이 유저는 로그인됐고, 성공적으로 인증됨)
  - 웹사이트를 브라우징하는 동안은(=browsing session) 다시 로그인할 필요없음
  - 로그아웃하면 이 세션이 끝나게 되고, 이 세션의 쿠키는 삭제됨

> **passport**를 사용해 웹사이트에 cookie와 session 심기

## Third Party OAuth 2.0

- **OAuth** = Open Authorization
  - Open standard for token based authorization
  - Login with Facebook / google / Github 등등
  - Tech 대기업들이 잘 만들어놓은 auth툴로 대신 인증 수행.
- When login with Facebook
  - 내 웹사이트가 Facebook에 유저의 friends목록을 받아오는 `GET` request를 요청
  - friends목록과 그들의 email주소를 담은 데이터를 `POST` request로 응답
  - 받아온 친구들의 email목록들을 내웹사이트 유저 DB의 email들과 비교해, 이미 가입한 친구들을 추천해줄수 있음
  - or LinkedIn을 google과 연결하면, gmail의 연락처에 있는 사람들을 추천해주거나 자동 connect요청