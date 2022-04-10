import React from 'react';
import Layout from '../../component/Layout/Layout';
import Intro from '../../component/Intro/Intro';
import TestiomnialContainer from '../../component/testimonial/testimonial-container/testimonial-container';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Intro />
        <TestiomnialContainer />
      </Layout>
    );
  }
}
export default Home;
