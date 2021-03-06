import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Home Page</p>
      <p>
         <Link to="/viewer">View stock holdings</Link><br></br>
        <Link to="/dynamic">Navigate to Dynamic Page</Link> 
      </p>
    </Layout>
  );
};

export default Home;