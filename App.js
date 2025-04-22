import React  from 'react';
import Messagecompany from './pages/Messagecompany';
import Entreprise from './pages/Entreprise';
import Offre from './pages/Offre';
import Freelancersdach from './pages/Freelancersdach';
import About from './pages/Aboutt';
import Freelancers from './pages/Freelancers';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Faq from './pages/Faq';
import Howitwork from './pages/How-it-work';
import Home from './pages/Home';
import Legal from './pages/Legal';
import Privacypolicy from './pages/Privacy-policy';
import Servicedetails from './pages/Service-Details';
import Servicedetails1 from './pages/Service-Details1';
import Servicedetails2 from './pages/Service-Details2';
import Servicedetails3 from './pages/Service-Details3';
import Servicedetails4 from './pages/Service-Details4';
import Servicedetails5 from './pages/Service-Details5';
import Services from './pages/Services';
import Terms from './pages/Terms';
import CF from './pages/CF';
import Login from './pages/Login';
import Register_client from './pages/Register_client';
import Register_freelancer from './pages/Register_freelancer';
import Register_enterprise from './pages/Register_enterprise';
import Team from './pages/Team';
import OurStory from './pages/OurStory';
import Careers from './pages/Careers';
import Benefits from './pages/Benefits';
import Homecompany from './pages/Homecompany';
import Homeclient from './pages/Homeclient';
import Editercompany from './pages/Editercompany';
import Editerclient from './pages/Editerclient';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ImportIcon } from 'lucide-react';

function App() {



  return (



    <BrowserRouter>
      <Routes>
      <Route path='/Messagecompany' element={<Messagecompany/>} />
      <Route path='/Editercompany' element={<Editercompany/>} />
      <Route path='/Editerclient' element={<Editerclient/>} />
      <Route path='/Homecompany' element={<Homecompany/>} />
      <Route path='/Homeclient' element={<Homeclient/>} />
      <Route path='/Offre' element={<Offre/>} />
        <Route path='/register_client' element={<Register_client />} />
        <Route path='/register_freelancer' element={<Register_freelancer />} />
        <Route path='/Register_enterprise' element={<Register_enterprise/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/Freelancersdach' element={< Freelancersdach />} />
        <Route path='/Entreprise' element={<Entreprise />} />
        <Route path='/CF' element={<CF />} />
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/Freelancers' element={<Freelancers />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/How-it-work' element={<Howitwork />} />
        <Route path='/' element={<Home />} />
        <Route path='/legal' element={<Legal />} />
        <Route path='/privacy-policy' element={<Privacypolicy />} />
        <Route path='/service-details' element={<Servicedetails />} />
        <Route path='/service-details1' element={<Servicedetails1 />} />
        <Route path='/service-details2' element={<Servicedetails2 />} />
        <Route path='/service-details3' element={<Servicedetails3 />} />
        <Route path='/service-details4' element={<Servicedetails4 />} />
        <Route path='/service-details5' element={<Servicedetails5 />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/Benefits' element={<Benefits />} />
        <Route path='/Careers' element={<Careers />} />
        <Route path='/OurStory' element={<OurStory />} />
        <Route path='/Team' element={<Team />} />
       
       
     
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;