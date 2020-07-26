import React from 'react';

import Layout from '../components/Layout';
import LearnCard from '../components/LearnCard';

const LearnPage = () => {
  return (
    <Layout
      title='Learn'
      headerTitle='Learn In Public'
    >
      <div className='text-box'>
        <p>A collection of short notes about what I learn day to day across a variety of technologies. Notes are usually taken while learning and summarized in my words. I look up these notes whenever I need them.</p>
      </div>
      
      {/* To manually order each note */}
      <div className='note-grid'>
        <div className='note-category'>
          <h1>JavaScript</h1>
          <ul>
            <LearnCard to='/learn/javascript/' title='JS' />
            <LearnCard to='/learn/javascript/' title='JS' />
          </ul>
        </div>

        <div className='note-category'>
          <h1>Back-End</h1>
          <ul>
            <LearnCard to='/learn/backend/' title='Node' />
            <LearnCard to='/learn/backend/' title='Node' />
          </ul>
        </div>

        <div className='note-category'>
          <h1>General</h1>
          <ul>
            <LearnCard to='/learn/general/' title='General' />
            <LearnCard to='/learn/general/' title='General' />
          </ul>
        </div>
      </div>
    </Layout>
  );
}

export default LearnPage;