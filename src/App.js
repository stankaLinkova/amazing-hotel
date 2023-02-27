import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Rooms from "./components/Rooms";
import Restaurant from "./components/Restaurant";
import Trips from "./components/Trips";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <div className="root">
        <BrowserRouter>
         <NavBar />

         <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/restaurant" element={<Restaurant />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
         </div>

         <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
