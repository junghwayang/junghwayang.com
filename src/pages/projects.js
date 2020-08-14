import React from 'react';

import Layout from '../components/Layout';
import ProjectCard from '../components/ProjectCard';

const ProjectsPage = () => {
  return (
    <Layout
      title='Projects'
      headerTitle='Projects'
    >
      <div className='project-list'>
        <ProjectCard
          title='Jomato API'
          skills={['Node.js', 'Express', 'MongoDB', 'Bcrypt']}
          description='A comprehensive RESTful API for exploring local restaurants. Supports CRUD for restaurants, reviews and users, staff management, photo uploads, advanced filtering, and user authentication. Special queries such as top 5 restaurants by suburb or cuisine, get monthly stats for management, get near restaurants, and get distances to restaurants.'
          img='./project-images/jomato.png'
          demo='https://github.com/junghwayang/jomato'
          code='https://github.com/junghwayang/jomato'
        />
        <ProjectCard
          title='BEPL'
          skills={['Node.js', 'Express', 'MongoDB', 'Passport', 'EJS', 'JavaScript', 'HTML/CSS']}
          description='Server-side rendered website for sharing beautiful places from all over the world.'
          img='./project-images/bepl.gif'
          demo='https://be-pl.herokuapp.com'
          code='https://github.com/junghwayang/bepl'
        />
        <ProjectCard
          title='Portfolio Website'
          skills={['Gatsby', 'React', 'GraphQL', 'JavaScript', 'Markdown', 'SCSS']}
          description='Responsive personal portfolio & blog website'
          img='./project-images/website.gif'
          demo='https://junghwayang.com'
          code='https://github.com/junghwayang/junghwayang.com'
        />
        <ProjectCard
          title='Byte.ly'
          skills={['Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS']}
          description='A simple URL shortener. Hosted on Heroku.'
          img='./project-images/bytely.gif'
          demo='https://bytely-jh.herokuapp.com'
          code='https://github.com/junghwayang/byte.ly'
        />
        <ProjectCard
          title='Task-manager API'
          skills={['Node.js', 'Express', 'MongoDB', 'JavaScript']}
          description='Simple task-manager API'
          img='./project-images/task.jpg'
          demo='https://task-api-jh.herokuapp.com'
          code='https://github.com/junghwayang/task-api'
        />
        <ProjectCard
          title='Chat App'
          skills={['Socket.io', 'Node.js', 'Express']}
          description='Realtime web chat application with Socket.io, Node.js, Express'
          img='./project-images/chatapp.gif'
          demo='https://chatapp-jh.herokuapp.com'
          code='https://github.com/junghwayang/chat-app'
        />
        <ProjectCard
          title='Weather App'
          skills={['Node.js', 'Express']}
          description='Simple weather app using Node.js, Express, and Dark sky & MapBox APIs'
          img='./project-images/weatherapp.gif'
          demo='https://weather-jh.herokuapp.com'
          code='https://github.com/junghwayang/weather-app'
        />
      </div>
    </Layout>
  );
}

export default ProjectsPage;