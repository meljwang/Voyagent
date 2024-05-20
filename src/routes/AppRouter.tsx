import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "../pages/Home.tsx";
import Navbar from "../components/Navbar.tsx";
import React from 'react'
import Explore from "../pages/Explore.tsx";
import MyTrips from "../pages/MyTrips.tsx";
import TripGPT from "../pages/TripGPT.tsx";
import TravelBlogs from "../pages/TravelBlogs.tsx";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Explore" element={<Explore />} />
          <Route path="/MyTrips" element={<MyTrips />} />
          <Route path="/TripGPT" element={<TripGPT />} />
          <Route path="/TravelBlogs" element={<TravelBlogs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter


