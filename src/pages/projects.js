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
          skills={['Node.js', 'Express', 'MongoDB']}
          description='Back-end API for exploring local restaurants. Built with Node.js, Express, MongoDB.'
          img='project-images/bepl.png'
          demo='https://github.com/junghwayang'
          code='https://github.com/junghwayang'
        />
        <ProjectCard
          title='BEPL'
          skills={['Node.js', 'Express', 'Mongoose', 'Passport', 'EJS']}
          description='Server-side rendering page for exploring beautiful places around the world.'
          img='project-images/bepl.png'
          demo='https://be-pl.herokuapp.com'
          code='https://github.com/junghwayang/bepl'
        />
        <ProjectCard
          title='Byte.ly'
          skills={['Node.js', 'Express', 'Mongoose', 'JavaScript']}
          description='A simple URL shortener. Hosted on Heroku.'
          img='https://media.giphy.com/media/XGlrWhNIFnKrILAPHa/giphy.gif'
          demo='https://bytely-jh.herokuapp.com'
          code='https://github.com/junghwayang/byte.ly'
        />
      </div>
    </Layout>
  );
}

export default ProjectsPage;