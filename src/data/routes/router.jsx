import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../../pages/Index';
import Layout from '../../pages/Layout';

const RouterViews = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Layout component={<Home/>} />
          }
        />
                <Route
          path="/"
          element={
              <Layout component={<Home/>} />
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterViews;
