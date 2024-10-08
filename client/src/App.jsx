import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import Faqs from './components/Faqs';
import Footer from './components/Footer';
import AboutSpaceApps from './components/AboutSpaceApps';
import Blog from './components/Blog';
import DayOne from './components/DayOne';
import DayTwo from './components/DayTwo';
import DayThree from './components/DayThree';
import SpaceExploration from './components/blogs/SpaceExploration';
import HowToRegister from './components/blogs/HowToRegister';
import SpaceappsChallengesGuide from './components/blogs/SpaceappsChallengesGuide';
import WhySpaceAppsAthlone from './components/blogs/WhySpaceAppsAthlone';
import Teambuilding from './components/blogs/Teambuilding';
import JudgingCriteria from './components/blogs/JudgingCriteria';
import TipsAndTricks from './components/blogs/TipsAndTricks';
import SpaceappsConnect from './components/blogs/SpaceappsConnect';
import Navigation from './components/blogs/Navigation';
import GetReady from './components/blogs/GetReady';
import Preloader from './components/Preloader';
import Challenges from './components/Challenges';
import { tooltip } from 'leaflet';
import Announcements from './components/Announcements';
import FindATeam from './components/FindATeam';

function App() {
  // const [showPreloader, setShowPreloader] = useState(false);
  // const location = useLocation();

  // useEffect(() => {
  //   // Show the preloader only if on the homepage
  //   if (location.pathname === '/') {
  //     setShowPreloader(true);

  //     // Hide the preloader after a delay (e.g., 2 seconds)
  //     const preloaderTimeout = setTimeout(() => {
  //       setShowPreloader(false);
  //     }, 2500);

  //     // Cleanup the timeout if the component unmounts or when preloader is hidden
  //     return () => clearTimeout(preloaderTimeout);
  //   }
  // }, [location.pathname]);

  return (
    <div className="bg-black">
      {/* {showPreloader && <Preloader />}  */}
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path="/faq" element={<Faqs />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/about" element={<AboutSpaceApps />} />
        {/* <Route path="/ambassador" element={<Ambassador />} /> */}
        {/* <Route path="/volunteer" element={<Volunteer />} /> */}
        {/* <Route path="/sponsors" element={<Sponsors />} /> */}
        <Route path="/blogs" element={<Blog />} />
        <Route path="/spaceexploration" element={<SpaceExploration />} />
        <Route path="/howToRegister" element={<HowToRegister />} />
        <Route path="/challenges" element={<SpaceappsChallengesGuide />} />
        <Route path="/whyAthlone" element={<WhySpaceAppsAthlone />} />
        <Route path="/teamBuilding" element={<Teambuilding />} />
        <Route path="/judgingCriteria" element={<JudgingCriteria />} />
        <Route path="/tipsandtricks" element={<TipsAndTricks />} />
        <Route path="/spaceappsconnect" element={<SpaceappsConnect />} />
        <Route path="/navigating" element={<Navigation />} />
        <Route path="/getready" element={<GetReady />} />
        <Route path="/day-one" element={<DayOne />} />
        <Route path="/day-two" element={<DayTwo />} />
        <Route path="/day-three" element={<DayThree />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/findateam" element={<FindATeam />} />
        <Route path="/spaceappsChallenges" element={<Challenges />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
