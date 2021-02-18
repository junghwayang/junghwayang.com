---
title: 'Gatsby'
date: '2020-07-12'
---

- use React + GraphQL
- `src/pages` 폴더 = Page components
- `src/components` 폴더 = Sub-components

## Installation

- Gatsby CLI : `npm i -g gatsby-cli`
- Create a Gatsby site : `gatsby new new-project https://github.com/gatsbyjs/gatsby-starter-hello-world`
- Start server : `gatsby develop`

## Components

- A building block for your site
- Self-contained / Reusable piece of code that describes a section of UI.
- `Props` : properties supplied to React components

## Link between pages

```js
import { Link } from "gatsby"

<Link to="/contact/">Contact</Link>
```

URL링크할땐 보통 HTML처럼 `<a>`

## Styling

- SCSS/Sass 사용하기 : `npm i node-sass gatsby-plugin-sass`
- Config 추가

```js
// gatsby-config.js
plugins: [
  `gatsby-plugin-sass`,
],
```

- src > styles 폴더에 각 components에 관한 SCSS파일들 만들어서,
- components에서 각각 import해서 쓰기

## react-helmet으로 Head 작성하기

- `npm i gatsby-plugin-react-helmet react-helmet`

```js
// gatsby-config.js
plugins: [`gatsby-plugin-react-helmet`]
```

- src > components > head.js에 HTML `<head>` 작성

```js
// head.js
import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
  return (
    <Helmet title="title" />
  )
}

export default Head
```

- pages > `index.js`에서 import해주기

```js
// index.js
import Head from '../components/head'

const IndexPage = () => {
  return (
    <Head />
    <h1>Index Page</h1>
  )
}
```

## Use GraphQL

`gatsby-config.js` 파일에서 `siteMetadata` object를 바꿔주기

## Plugins

- `gatsby-source-filesystem`
  - query data about files
  - always scanning for new files to be added and when they are, re-runs your queries.
- `gatsby-transformer-remark`
  - Markdown파일 불러옴
  - `allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })`로 sorting하기
- `gatsby-plugin-sass`
  - Sass/Scss 사용

## Styling - by CSS Modules

- 각 component에 `layout.css`처럼 기본 css파일을 만들 경우
  - 모든 component가 `title`처럼 specific하지 않은 똑같은 classname으로 css styling을 하면 모든 파일에서 `title`에 접근가능해 서로 충돌
  - 그래서 header에 있는 title에는 `.header-title`, hero에 있는 title에는 `.hero-title`처럼 길고 복잡한 이름을 detail하게 정해줘야 했는데, 이러한 불편함 때문에 `.module.css`를 쓰게 됨

> `layout.js`에서만 `layout.css`를 import해오고 다른 component파일들에선 다른 CSS파일을 import해온다 해도 모든 component들에서 `layout.css`를 똑같이 읽어들이고 적용이 됨.. 이게 문제.

- `layout.module.css`
  - `.nav-list`에 styling하고, js파일에서 `<nav className={layoutStyles.navList}>`처럼 쓰면
  - layoutStyles 안에 있는 nav-list를 콕 찝어서 불러오게 됨. 다른 파일과 겹치지 않음.

## Gatsby Data with GraphQL

```js
// <components/header.js>

import { graphql, useStaticQuery } from "gatsby"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <h1>{data.site.siteMetadata.title}</h1>
  )
}

export default Header
```

## Markdown Posts

1. `npm i gatsby-source-filesystem gatsby-transformer-remark`
2. Configuration

```js
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `src`,
      path: `${__dirname}/src/`,
    },
  },
  `gatsby-transformer-remark`,
]
```

## Create Slugs for Posts

```js
// gatsby-node.js
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts/` })

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
```

GraphQL에서 edges > node > fields > slug에 markdown파일의 slug가 `/first-post`, `/second-post`처럼 자동으로 생성됨

```js
allMarkdownRemark {
    edges {
      node {
        fields {
          slug
        }
      }
    }
  }
}
```

## Slug로 Blog post만들어 링크 연결하기

```js
// gatsby-node.js
const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('./src/templates/blog-post.js')

  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)


  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog${node.fields.slug}`,
      component: blogPostTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  })
}
```

- slug가 `/first-post`인 경우, `/blog/first-post`로 post 접근
- `blog.js`에서 각 list에 ``<Link to={`/blog${node.fields.slug}`}>``

## Markdown 파일로 Blog post 만들기

```js
// src > templates > blog-post.js

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const Blog = props => {
  const post = props.data.markdownRemark

  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`
```

## Add images to Blog posts

- `npm i gatsby-plugin-sharp gatsby-remark-images gatsby-remark-relative-images`
- config 설정하면 post에 추가한 local 이미지가 보여짐

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-sharp`,
  options: {
    useMozJpeg: false,
    stripMetadata: true,
    defaultQuality: 75,
  },
},
{
  resolve: `gatsby-transformer-remark`,
  options: {
    plugins: [
      `gatsby-remark-relative-images`,
      {
        resolve: `gatsby-remark-images`,
        options: {
          maxWidth: 750,
        },
      },
    ],
  },
},
```
