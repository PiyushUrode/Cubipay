import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headroom from 'react-headroom';
import Navbar from "./MainComponent/Navbar";
import Footer from "./MainComponent/Footer";
import ScrollToTop from './MainComponent/ScrollToTop';
import Loader from './MainComponent/Loader';

const Homepage = lazy(() => import('./MainComponent/Homepage'));
const Presale = lazy(() => import('./MainComponent/Presale'));

const App = () => {
  return (
<Router>
  <Headroom>
    <Navbar className="sticky top-0 z-50 " />
  </Headroom>

  <ScrollToTop />


    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/presale" element={<Presale />} />
      </Routes>
    </Suspense>
 
  <Footer />
</Router>

  );
};

export default App;
