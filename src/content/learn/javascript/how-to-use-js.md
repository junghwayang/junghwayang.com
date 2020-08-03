---
title: 'How to use JS in HTML'
date: '2020-04-20'
---

- JavaScript code can be inserted into **any part** of an HTML document with the `<script>` tag.
- Put it into a separate file.
  - `<script src="/path/to/script.js"></script>`
  - The benefit of a separate file : the browser will download it and store it in its *cache*.
    - → reduce traffic and make it faster
  - If `src` is set, the script content is ignored. → choose one or split into two scripts
- Comments
  - Single-line : `// comment`
  - Multi-line : `/* comment */`

### async vs defer

- `<head>`에 script를 선언할때, 둘다 나머지 HTML을 parsing하면서 동시에 js파일을 fetch해옴
- `<script async src="main.js">`
  - fetch가 끝나면 HTML파싱을 멈추고 js파일을 실행
      - → js파일 실행이 끝나면 나머지 HTML파싱 계속함.
  - async를 여러개 쓰면 - 먼저 fetch 끝난 파일부터 순서 상관없이 실행됨
- `<script defer src="main.js">`
  - fetch가 끝나도 계속 HTML파싱하다가
      - → HTML파싱이 끝나면 js파일을 실행
  - defer를 여러개 쓰면 - HTML이 다 파싱되고나서 코드 순서대로 실행됨 = **실행되는 순서가 중요하다면 defer를 써야함!**
- `script defer` 쓰는게 좋음
  - HTML을 파싱해오는 동안에 js파일을 다운받아놓고 HTML파싱이 끝나면 유저에게 페이지를 먼저 보여준 다음에 바로 js파일을 실행하기 때문
  - js파일을 다운받고 실행할때까지 페이지로딩이 지연되는걸 기다릴 필요가 없음
