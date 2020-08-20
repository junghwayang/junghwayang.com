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
          skills={['Node.js', 'Express', 'MongoDB', 'Passport', 'EJS']}
          description='Server-side rendered website for sharing beautiful places from all over the world. Supports user authentication, authorization, photo uploads, and reviews.'
          img='./project-images/bepl.gif'
          demo='https://be-pl.herokuapp.com'
          code='https://github.com/junghwayang/bepl'
        />
        <ProjectCard
          title='Portfolio Website'
          skills={['Gatsby', 'React', 'GraphQL', 'JavaScript', 'Markdown', 'SCSS']}
          description='Responsive personal portfolio & blog website. No theme was used and all components are designed by me.'
          img='./project-images/website.gif'
          demo='https://junghwayang.com'
          code='https://github.com/junghwayang/junghwayang.com'
        />
        <ProjectCard
          title='Byte.ly'
          skills={['Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML', 'CSS']}
          description='Simple URL shortener supporting API and front-end view. Supports to copy the shortened link to the clipboard. Hosted on Heroku.'
          img='./project-images/bytely.gif'
          demo='https://bytely-jh.herokuapp.com'
          code='https://github.com/junghwayang/byte.ly'
        />
        <ProjectCard
          title='Task-manager API'
          skills={['Node.js', 'Express', 'MongoDB', 'Jest']}
          description='RESTful API for task manager. Supports CRUD for task and user, and user authentication. Testing with Jest.'
          img='./project-images/task.jpg'
          demo='https://task-api-jh.herokuapp.com'
          code='https://github.com/junghwayang/task-api'
        />
        <ProjectCard
          title='Chat App'
          skills={['Socket.io', 'Node.js', 'Express', 'JavaScript', 'HTML', 'CSS']}
          description='Realtime web chat application with Socket.io. Supports to join the chat by name of the room, to filter bad words, and to share the current location of the user via Google maps.'
          img='./project-images/chatapp.gif'
          demo='https://chatapp-jh.herokuapp.com'
          code='https://github.com/junghwayang/chat-app'
        />
        <ProjectCard
          title='Weather App'
          skills={['Node.js', 'Express', 'EJS']}
          description='Simple weather app using Dark sky & MapBox APIs. Use MapBox API to get the geocode for the city user enters, and Dark sky API to get weather by a geocode. Server-side rendered by EJS.'
          img='./project-images/weatherapp.gif'
          demo='https://weather-jh.herokuapp.com'
          code='https://github.com/junghwayang/weather-app'
        />
        <ProjectCard
          title='Drum Kit'
          skills={['JavaScript', 'HTML', 'CSS']}
          description='Single page app to play drums using vanilla JavaScript. Make corresponding drum sounds by clicking the button or pressing the keyboard.'
          img='./project-images/drumkit.png'
          demo='https://codepen.io/rosie-junghwa/full/mdPrgXo'
          code='https://codepen.io/rosie-junghwa/pen/mdPrgXo'
        />
      </div>
    </Layout>
  );
}

export default ProjectsPage;