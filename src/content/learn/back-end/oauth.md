---
title: 'OAuth'
date: '2020-07-19'
---

> OAuth = Open Authorization

- Login with Facebook / Google / Github 등등
- Facebook, Google과 같은 대기업들은 이미 그들이 구축해놓은 보안이 철저함.
- 이 대기업들의 authentication을 사용하면 내가 직접 보안을 신경쓸 필요가 없음!
- 유저가 Facebook으로 로그인 요청시, 페이스북이 알아서 authenticate해주고 보안에 신경써줌.
- 이렇게 내웹사이트와 Facebook 사이에서 인증절차를 해주는게 OAuth!

## Why OAuth?

- Granular access levels
  - Facebook으로 로그인에 수락할때, 어떤 정보를 공유할것인지 설정가능
- Read only / Read + write access
  - 페이스북에서 정보만 가져올것인지 / 페이스북에 포스팅도 하게할것인지
- Revoke access (액세스 철회)
  - 유저가 페이스북에서 직접 내웹사이트를 deauthorize할 수도 있음

## OAuth 인증절차

- 유저가 Login with Facebook을 선택하면, Facebook으로 이동해 로그인
- User grants permissions. (내웹사이트에 어떤어떤 권한을 줄건지)
- 로그인되고 퍼미션까지 받고나면, 페북은 나에게 Auth Code(Authorization Code)를 넘겨줌.
  - 이 Auth code로 나는 이 유저가 페북에 정상 로그인했는지 안했는지 알수있음
  - 이젠 유저를 authenticate하고, 로그인시킬수 있게됨
- Auth Code를 다시 보내서 Access Token과 교환할 수도 있음
  - 이 토큰을 내 DB에 저장해 유저의 페북 데이터가 필요할때마다 사용할 수 있음
  - 토큰은 auth code보다 더 오랫동안 유효함

### Auth code vs Access token

- <span>Auth Code</span>
  - = 놀이공원의 1회용 입장권
  - used to authenticate user
- <span>Access Token</span>
  - = 놀이공원의 연간 회원권 + 혜택들 (ex. 언제든지 페북에 유저 데이터를 요청할 수 있는 권한)
  - used to access 페북에 저장된 유저 데이터

## Google-OAuth 사용하기

> [https://www.passportjs.org/packages/passport-google-oauth20/](https://www.passportjs.org/packages/passport-google-oauth20/)

1. `npm i passport-google-oauth20`
2. https://console.developers.google.com/ 에서 project만들고 Credentials - Consent screen 등록후
3. OAuth 2.0 Client ID 만들기
4. Authorised JavaScript origins에 웹사이트 URL,
Authorised redirect URIs에 인증성공후 redirect할 URL 입력하면
5. Client ID, Client secret이 생성됨 -> 이 2개는 `.env`파일에 보관

```js
// Configure Strategy
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  // Google콘솔에서 Authorised redirect URIs로 지정한 URL
  callbackURL: 'http://localhost:3000/auth/google/secrets'
},
(accessToken, refreshToken, profile, cb) => {
  User.findOrCreate({ googleId: profile.id }, (err, user) => {
    return cb(err, user);
  });
}
));
```