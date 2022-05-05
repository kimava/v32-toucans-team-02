import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './component/Layout/RequireAuth';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import Search from './Pages/Search/SaerchPage';
import MyList from './Pages/MyList/MyList';
import MyPage from './Pages/MyPage/MyPage';
import './App.css';

const App = ({ cardRepo }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignUp />} />
        <Route
          path='/search'
          element={
            <RequireAuth>
              <Search cardRepo={cardRepo} />
            </RequireAuth>
          }
        />
        <Route
          path='/my-list'
          element={
            <RequireAuth>
              <MyList cardRepo={cardRepo} />
            </RequireAuth>
          }
        />
        <Route
          path='/my-page'
          element={
            <RequireAuth>
              <MyPage cardRepo={cardRepo} />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
