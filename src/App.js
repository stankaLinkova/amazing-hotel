import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { trips, restaurant } from "./assets/data.js";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Rooms from "./components/Rooms";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import WhatToDo from "./components/WhatToDo";


function App() {

  return (
    <>
      <div className="root">
        <BrowserRouter>
         <NavBar />

         <div className="main-components">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<WhatToDo items={restaurant} />} />
            <Route path="/trips" element={<WhatToDo items={trips} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
         </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
