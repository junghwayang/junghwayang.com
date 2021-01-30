import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import SkillCard from '../components/SkillCard';
import ContactForm from '../components/ContactForm';

const IndexPage = () => {
  function Skill(name) {
    this.name = name;
    this.img = `./icons/${name.toLowerCase().replace(/[\.\/]/g, '')}.png`;
  }

  const skills = ['Node.js', 'Express', 'JavaScript', 'TypeScript', 'NestJS', 'MongoDB', 'MySQL', 'AWS', 'API', 'GraphQL', 'Apollo', 'Vue', 'React', 'Gatsby', 'EJS', 'Pug', 'Jest', 'Chai', 'Mocha', 'Git', 'CI/CD', 'CircleCI', 'HTML5', 'CSS3', 'Sass/SCSS'];

  return (
    <Layout
      title='Home'
      page='index'
    >
      <div className='text-box'>
        <h2>Hey, there 👋</h2>

        <p>I'm a <span className='emphasized'>Full-stack Developer focused on Back-end</span> using <b>MERN, MEVN</b> stack living in beautiful Sydney. 🏝 I love building software that makes our lives better and solving problems that challenge me.</p>

        <p>This site is my <span className='emphasized'>digital garden</span> 🌱, a collection of the things I have learned during my journey to become a developer from scratch without a CS degree. I learn new things every single day to keep myself up-to-date and improve to be a better developer. I usually take digital notes in my words while learning, and whenever I need them, I look up those notes and learn again from past me. You can find notes in the 'Learn in public' category.</p>

        <p>If you want to explore the projects I've made, please check <Link to='projects'>here. <img src='./icons/link.svg' /></Link></p>
      </div>

      <section className='skills-section'>
        <h1>Technical Skills</h1>
        <p>Primary focus on Node.js + Express</p>

        <div className='skill-list'>
          {skills
            .map(name => new Skill(name))
            .map(({ name, img }) => <SkillCard name={name} img={img} />)}
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
