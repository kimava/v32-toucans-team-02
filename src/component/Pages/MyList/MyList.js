import React from 'react';
import Layout from '../../Layout/Layout';
import Header from '../../Navigator/Header/Header';
import { useLocation } from 'react-router';

const MyList = ({ cardRepo }) => {
  const location = useLocation();
  const info = location.state.info;
  console.log(info);
  return (
    <div>
      {/* <Header /> */}
      <h2>My List</h2>
      {info && info.map((item) => <p>{item.title}</p>)}
    </div>
  );
};

export default MyList;
