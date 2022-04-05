import React from 'react';
import Layout from '../../component/Layout/Layout';
import Header from '../../component/Navigator/Header/Header';
import Intro from '../../component/Intro/Intro';
import TestiomnialContainer from '../../component/testimonial/testimonial-container/testimonial-container';

class Home extends React.Component {
  render() {
    return (
      <Layout>
        <Header
          logedIn={this.props.loggedIn}
          authService={this.props.authService}
        />
        <Intro />
        <TestiomnialContainer />
      </Layout>
    );
  }
}
export default Home;
