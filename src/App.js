import React from 'react';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Gallery from './pages/Gallery/Gallery';
import Plans from './pages/Plans/Plans';
import Trainers from './pages/Trainers/Trainers';
import MembershipPlans from './components/MembershipPlans/MembershipPlans'; 
import PaymentPage from './components/MembershipPlans/PaymentPage'; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />

        {/* New Routes */}
        <Route path="membership-plans" element={<MembershipPlans />} />
        <Route path="payment/:planId" element={<PaymentPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
