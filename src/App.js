import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RequireAuth from './component/Layout/RequireAuth';
import Home from './Pages/Home/Home';
import MyList from './Pages/MyList/MyList';
import Search from './Pages/Search/SaerchPage';
import SignUp from './Pages/SignUp/SignUp';
import './App.css';
import MyPage from './Pages/MyPage/MyPage';

const App = ({ cardRepo }) => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='/my-page'
          element={
            <RequireAuth>
              <MyPage cardRepo={cardRepo} />
            </RequireAuth>
          }
        />

        <Route path='/login' element={<SignUp />} />

        <Route
          path='/my-list'
          element={
            <RequireAuth>
              <MyList cardRepo={cardRepo} />
            </RequireAuth>
          }
        />

        <Route
          path='/search'
          element={
            <RequireAuth>
              <Search cardRepo={cardRepo} />
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
