import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// import page
import Home from '../page/Home';
import Tour from '../page/Tour';
import TourDetails from '../page/TourDetails';
import Login from '../page/Login';
import Register from '../page/Register';
import SearchResultList from '../page/SearchResultList';
import ThankYou from '../page/ThankYou';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/tour" element={<Tour />} />
      <Route path="/tour/:id" element={<TourDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/tours/search" element={<SearchResultList />} />
    </Routes>
  );
};

export default Routers;
