---
title: 'NPM (Node Package Manager)'
date: '2020-07-23'
---

- A command-line tool to share and control modules (or packages) of JavaScript code written for use with Node.js.
- When starting a new project, npm generates a `package.json` file.
- npm saves packages in a `node_modules` folder.

## package.json

- The center of any Node.js project or npm package.
- Located in root level of project.
- Stores information about your project.
- Consists of a single JSON object where information is stored in key-value pairs.
- Only two required fields - `name` and `version`
  - But it’s good practice to provide additional information about your project.

## Semantic versioning

`"package": "MAJOR.MINOR.PATCH"`

- MAJOR version
  - should increment when you make **incompatible** API changes.
  - add changes that won’t work with earlier versions.
- MINOR version
  - should increment when you **add functionality** in a backwards-compatible manner.
  - add new features but neither of them break what worked before.
- PATCH version
  - should increment when you make backwards-compatible **bug fixes**.

## Allow version upgrade

- To allow the latest **PATCH** updates, prefix it with the tilde (`~`).
- e.g. Allow to update to any 2.10.x version.

```json
"package": "~2.10.4"
```

- To allow the latest **MINOR** updates and **PATCH** updates, prefix it with the caret (`^`).
- e.g. Allow to update to any 2.x.x version.

```json
"package": "^2.10.4"
```

## Remove packages

```bash
npm uninstall package
```
