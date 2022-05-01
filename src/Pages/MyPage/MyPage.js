import React from 'react';
import Layout from '../../component/Layout/Layout';
import Stats from '../../component/UserInfo/Stats';
import UserAccount from '../../component/UserInfo/UserAccount';
import { StyledDiv } from './MyPageStyle';

const MyPage = ({ cardRepo }) => {
  return (
    <Layout>
      <StyledDiv>
        <Stats cardRepo={cardRepo} />
        <UserAccount />
      </StyledDiv>
    </Layout>
  );
};

export default MyPage;
