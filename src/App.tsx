import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from './pages/home';
import { About } from './pages/about';
import { AnimatePresence } from "framer-motion";
import { Cursor } from './components/Cursor';


import './App.css';
import { GlobalStyles } from './styles/globalStyles';
import { Articles } from './pages/articles';
import { Project } from './pages/projects';
import { NotFound } from './pages/not_found';
import { ParticlesContainer } from './components/ParticlesContainer';

const App = () => {
  const location = useLocation();
  const width = window.innerWidth;
  const root = document.documentElement;

  window.addEventListener("resize", () => {
    const newWidth = window.innerWidth;
    if (newWidth < 500) {
      if (newWidth !== width) {
        window.location.reload();
      }
    } else {
      window.location.reload();
    }
  });

  useEffect(() => {
    root.style.setProperty('--VH', `${window.innerHeight * 0.01}px`);
    root.style.setProperty('--VW', `${window.innerWidth * 0.01}px`);
  }, [root.style]);

  return (
    <div className="App">
      <GlobalStyles />
      <Cursor />
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />}>
                {/* <Home/> */}
              </Route>
              <Route path="/articles" element={<Articles />}>
                {/* <Works/> */}
              </Route>
              <Route path="/projects/:pid?" element={<Project />} >
                {/* <Project/> */}
              </Route>
              <Route path="/about" element={<About />}>
                {/* <About/> */}
              </Route>
              <Route path="*" element={<NotFound />}>
                {/* <NotFound/> */}
              </Route>
            </Routes>
          </AnimatePresence>

    </div>
  );
}

export default App;
