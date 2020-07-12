import React from 'react'

import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout
      title='About'
      page='base'
      headerTitle='About Me'
    >
      <div className='text-box'>
        <p>I'm a <span className='emphasized'>Full-stack Developer</span> using MERN stack living in beautiful Sydney 🏝 I enjoy building software that makes our lives better and solving problems challenging me.</p>
        <p>This site is my <span className='emphasized'>digital garden</span>, a collection of the things I have learned during my journey to become a full-stack developer from scratch without a CS degree.</p>
        <p>I'm from Business and accounting background, and while working as an accountant, I learned coding as a hobby at first, and I fell in love with programming. At some point I decided to dive into programming seriously and pursue my passion.</p>
        <p>I studied Data Science first as I love math and number things and worked as a <span className='emphasized'>data scientist</span> for a year. But I found more interest in development, so I started new journey from scratch again to become a full-stack developer.</p>
        <p>I'm 100% self-taught and I have huge eager and thirst for new knowledge and experiences. One lesson I learned through this journey is that I'm confident and aware of that I could learn new things very quickly and I know how to find resources to learn and make them mine.</p>
        <p>While I’m not coding, you can find me dancing in Zumba class 💃🏻 playing Badminton 🏸 working out 🏋🏻‍♀️ trekking in the nature ⛰ drinking beer 🍺 or Somek (mixed with Soju and Beer), or travelling around the world 🌏</p>
        <p>You can find me on
          <a href='https://github.com/junghwayang' target='__blank'>GitHub</a>
          <a href='https://linkedin.com/in/rosiejh' target='__blank'>LinkedIn</a>
          <a href='https://twitter.com/rosie_junghwa' target='__blank'>Twitter</a>
        </p>

        {/* Add my timeline */}
      </div>
    </Layout>
  )
}

export default AboutPage