---
title: 'Debugging'
date: '2020-07-12'
---

> Debugging is the process of finding and fixing errors within a script.

## Debugging in Chrome

- Open developer tools (`command` + `option` + `I`)
- Select `Sources` panel
- How to pause the code to debug
  - **Breakpoint** : a point of code where the debugger will automatically pause the JavaScript execution.
      - While the code is paused, we can examine current variables, execute commands in the console etc. = we can **debug** it
  - Insert `debugger;` inside code
      - code editor안에서 breakpoint 설정할때 편함
  - breakpoints 설정한후 페이지를 reload(`command` + `R`)하면 자동으로 debugger가 실행됨
- Paused on breakpoint
  - **Call Stack** : shows the nested calls chain.
  - **Scope** : current variables. (local / global)
- Tracing the execution
  - `Resume` : continue the execution
  - `Step` : run the next command (모든 statement들을 하나하나씩 실행함)
  - `Step over` : run the next command, but don’t go into a function.
  - `Step into` : go into async code, waiting for them if necessary.
  - `Step out` : continue the execution and stop it at the very last line of the current function.
  - `Pause on exceptions` (automatic pause in case of an error) : When enabled, a script error automatically pauses the execution.
