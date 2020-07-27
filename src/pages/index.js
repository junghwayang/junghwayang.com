import React from 'react';

import Layout from '../components/Layout';
import SkillCard from '../components/SkillCard';
import ContactForm from '../components/ContactForm';

const IndexPage = () => {
  return (
    <Layout
      title='Home'
      page='index'
    >
      <div className='text-box'>
        <h2>Hey, there 👋</h2>

        <p>I'm a <span className='emphasized'>Full-stack Software Engineer</span> using <b>MERN</b> stack living in beautiful Sydney. 🏝 I enjoy building software that makes our lives better and I love solving problems that challenge me.</p>

        <p>This site is my <span className='emphasized'>digital garden</span> 🌱, a collection of the things I have learned during my journey to become a full-stack developer from scratch without a CS degree. When I learn something, I usually take digital notes that I can summarize in my words, and whenever I need them, I come back to those notes and learn again from past me.</p>

        <p>Personally, I prefer writing in short as much as I can. Sometimes when I read others' blogs, it's too tiring to read rambling explanations and flowery words. I could say I understand well if I can explain in short, and it helps me to go through quickly when I search for some information I need. I've tried to keep it in the way like a well-summarized notes and it will look different than other writings.</p>
      </div>
      
      <section className='skills-section'>
        <h1>Technical Skills</h1>
        <p>Primary focus on Node.js + Express</p>

        <div className='skill-list'>
          <SkillCard name='Node.js' img='icons/node.png' />
          <SkillCard name='Express' img='icons/express.png' />
          <SkillCard name='JavaScript' img='icons/javascript.png' />
          <SkillCard name='MongoDB' img='icons/mongodb.png' />
          <SkillCard name='AWS' img='icons/aws.png' />
          <SkillCard name='GraphQL' img='icons/graphql.png' />
          <SkillCard name='REST API' img='icons/api.png' />
          <SkillCard name='React' img='icons/react.png' />
          <SkillCard name='Gatsby' img='icons/gatsby.png' />
          <SkillCard name='HTML' img='icons/html.png' />
          <SkillCard name='CSS' img='icons/css.png' />
          <SkillCard name='Sass/SCSS' img='icons/sass.png' />
          <SkillCard name='Git' img='icons/git.png' />
          <SkillCard name='GitHub' img='icons/github.png' />
          <SkillCard name='CI/CD' img='icons/cicd.png' />
          <SkillCard name='Jenkins' img='icons/jenkins.png' />
          <SkillCard name='Redis' img='icons/redis.png' />
          <SkillCard name='MySQL' img='icons/mysql.png' />
          <SkillCard name='Testing' img='icons/testing.png' />
        </div>
      </section>

      <section className='contact-section'>
        <h1>Get In Touch <img src='icons/contact.svg' /></h1>
        <p>Love what I've done so far and wanna work with me? I'd love to hear from you!</p>
        <p>Fill out the form below or directly at 💌 <b>rosie.junghwa@gmail.com</b></p>

        <ContactForm />
      </section>
    </Layout>
  );
}

export default IndexPage;