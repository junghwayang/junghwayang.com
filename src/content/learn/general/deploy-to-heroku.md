---
title: 'Deploy to Heroku'
date: '2020-03-19'
---

개인적으로 personal app을 deploy하는 가장 좋은 플랫폼은 heroku라고 생각한다.

일단 한 계정당 5개 app까지 무료이고, deploy도 너무 쉬움.

App에 `.env` config 파일을 사용하지 않는다면 그냥 heroku에서 github repo를 연결해서 자동 deploy하게 하는 것이 제일 간단하지만,

`.env` 파일을 따로 config 설정해줘야 할 경우가 있다.

## Heroku deploy

1. heroku create

```bash
heroku create appname
```

2. heroku config set

> 둘 중 하나로

- Heroku 사이트에서 `App` - `Settings` - `Config Vars` 에서 추가
- `set` 다음에 `.env` 파일에 있는 config들의 key=value값 쌍들을 하나씩 입력한다.

```bash
heroku config:set JWT_SECRET=secretpassword
```

3. 입력된 config들의 리스트 확인하기

```bash
heroku config
```

4. heroku app으로 push하기

```bash
git push heroku master
```

5. `https://appname.herokuapp.com`에 deploy됨