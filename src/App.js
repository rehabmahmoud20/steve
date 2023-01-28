import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./sass/style.css";
import { FaArrowUp } from "react-icons/fa";

// Components

import Header from './components/Header/Header';
import Browser from './components/Browser/Browser';
import Platform from './components/Platform/Platform';
import Overview from './components/Overview/Overview';
import Bootcamp from './components/Bootcamp/Bootcamp';
import Works from './components/HowItWorks/Works';
import Testemonial from './components/Testimonial/Testemonial';
import Footer from './components/Footer/Footer';

export const DataContext = React.createContext();

const App = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);
  // Toggle Navigate Button
  const scrollIntoView = () => window.scrollY >= 657 ? setToggle(true) : setToggle(false);
  // Navigate To Top
  const navigateToTop = () => window.scrollTo(0, 0);
  useEffect(() => {
    window.onscroll = scrollIntoView
  }, []);
  // Fetch Data From JSON File
  useEffect(() => {
    axios.get("./data.json").then((resp) => {
      setData(resp.data)
    })
  }, []);
  return (
    <>
      <div 
        className="navigate" 
        style={{display: toggle ? "block" : "none"}}
        onClick={navigateToTop}>
        <FaArrowUp />
      </div>
      <DataContext.Provider value={data}>
        <Header />
        <Browser />
        <Platform />
        <Overview />
        <Bootcamp />
        <Works />
        <Testemonial />
        <Footer />
      </DataContext.Provider>
    </>
  )
}

export default App;