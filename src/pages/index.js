import React from 'react'

import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout
      title='Home'
      page='index'
    >
      <div className='text-box'>
        <h2>Hey, there 👋</h2>

        <p>I'm a self-motivated <span className='emphasized'>Full-stack Software Engineer</span> using MERN stack living in beautiful Sydney. 🏝 I enjoy building software that makes our lives better and I love solving problems that challenge me.</p>

        <p>This site is my <span className='emphasized'>digital garden</span> 🌱, a collection of the things I have learned during my journey to become a full-stack developer from scratch without a CS degree. When I learn something, I usually take digital notes that I can summarize in my words, and whenever I need them, I come back to those notes and learn again from past me.</p>

        <p>Personally, I prefer writing in short as much as I can. Sometimes when I read others' blogs, it's too tiring to read rambling explanations and flowery words. I could say I understand well if I can explain in short, and it helps me to go through quickly when I search for some information I need. I've tried to keep it in the way like a well-written summary notes and it will look different than other writings.</p>
      </div>
    </Layout>
  )
}

export default IndexPage