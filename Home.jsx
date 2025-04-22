 

import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'
import Faq from './Faq';
 
import {
 Search
} from 'lucide-react';

const ServiceCard = ({ title, subtitle, imageUrl }) => {
  return (
    <div className="service-card">
      <img src={imageUrl} alt={title} />
      <div className="service-content">
        <div className="service-subtitle">{subtitle}</div>
        <h3 className="service-title">{title}</h3>
      </div>
    </div>
  );
};

const services = [
  {
    id: 1,
    title: 'Graphic design',
    subtitle: "",
    imageUrl: 'assets/images/gra.png'
  },
  {
    id: 2,
    title: 'Web devlopment',
    subtitle: '',
    imageUrl: 'assets/images/images.png'
  },
  {
    id: 3,
    title: 'Writing and translation',
    subtitle: '',
    imageUrl: 'assets/images/A.png'
  },
  {
    id: 4,
    title: 'Digital marketing',
    subtitle: '',
    imageUrl: 'assets/images/E.png'
  },
  {
    id: 5,
    title: 'Editing',
    subtitle: '',
    imageUrl: 'assets/images/F.png'
  },

  {
    id: 6,
    title: 'Legal',
    subtitle: "",
    imageUrl: 'assets/images/G.png'
  },
  {
    id: 7,
    title: 'Music and audio',
    subtitle: "",
    imageUrl: 'assets/images/C.png'
  },
  {
    id: 8,
    title: 'Video and animation',
    subtitle: "",
    imageUrl: 'assets/images/J.png'
  },
  {
    id: 9,
    title: 'Data and analytics',
    subtitle: "",
    imageUrl: 'assets/images/x.png'
  },
  {
    id: 10,
    title: 'Mobile development',
    subtitle: "",
    imageUrl: 'assets/images/l.png'
  },
  {
    id: 11,
    title: 'Cybersecurity',
    subtitle: "",
    imageUrl: 'assets/images/T.png'
  },
];


 function Home() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const carouselRef = useRef(null);
  const Services = useRef(null); // <- si tu veux référencer la section

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  const maxPosition = Math.max(0, services.length - cardsPerView);

  const handlePrev = () => {
    setCurrentPosition(prev => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPosition(prev => Math.min(maxPosition, prev + 1));
  };

  useEffect(() => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.service-card')?.clientWidth || 0;
      const marginRight = 16;
      carouselRef.current.style.transform = `translateX(-${currentPosition * (cardWidth + marginRight)}px)`;
    }
  }, [currentPosition, cardsPerView]);
  const Contact = useRef(null);
 
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    })}
    return (
        <div>
<>

 {/* navigation */}
 
      {/* Header */}
      <header  className="header1">
        <div className="container header-container" style={{ maxWidth: "1500px", margin: "0 auto" }}>
          <div className="header-content">
            {/* Logo */}
            <img
  loading="lazy"
  decoding="async"
  className="img-fluid float-left"
  width={160}
  src="assets/images/FreeHands3.png"
  alt="Wallet"
/>

<nav className="nav-menu">
              <a href="#" className="nav-link">Home</a>
              <a href="/about" className="nav-link"> About</a>
              <a href="/How-it-work" className="nav-link"> How It Works</a>
              <a onClick={() => scrollToSection(Services)} className="nav-link">Services</a>
             <a onClick={() => scrollToSection(Contact)} className="nav-link">Contact</a>
             <a  className="nav-link"></a>
             <a className="nav-link"></a>
             <a className="nav-link"></a>
             
             </nav>
            
         
          {/* account btn */}{" "}
          <a href="/Login" className="button button-outline">
            Log In
          </a>
          {/* account btn */}{" "}
          <a href="/CF" className="profile-section">
          <button className="try-button">Sign up</button>
          </a>
        </div>
      </div>
      
   
  </header>



 
  <section className="banner bg-tertiary position-relative overflow-hidden">
    <div className="container hero-container" style={{ maxWidth: "1400px", margin: "0 auto" }}>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="block text-center text-lg-start pe-0 pe-xl-5">
            <h1 className="text-capitalize mb-4">
            Get high-quality solutions to grow your business fast
            </h1>
          
          

            
 
           <div className="search-bar-container1">
             <div className="search-bar1">
               <Search size={18} className="search-icon1" />
               <input type="text" placeholder="Search..." className="search-input1" />
             </div>
           </div>






            
          </div>
        </div>
        <div className="col-lg-6">
          <div className="ps-lg-5 text-center">
            <img
              loading="lazy"
              decoding="async"
              src="assets/images/banner/banner.png"
              alt="banner image"
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="has-shapes">
      <svg
        className="shape shape-left text-light"
        viewBox="0 0 192 752"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-30.883 0C-41.3436 36.4248 -22.7145 75.8085 4.29154 102.398C31.2976 128.987 65.8677 146.199 97.6457 166.87C129.424 187.542 160.139 213.902 172.162 249.847C193.542 313.799 149.886 378.897 129.069 443.036C97.5623 540.079 122.109 653.229 191 728.495"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-55.5959 7.52271C-66.0565 43.9475 -47.4274 83.3312 -20.4214 109.92C6.58466 136.51 41.1549 153.722 72.9328 174.393C104.711 195.064 135.426 221.425 147.449 257.37C168.829 321.322 125.174 386.42 104.356 450.559C72.8494 547.601 97.3965 660.752 166.287 736.018"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-80.3302 15.0449C-90.7909 51.4697 -72.1617 90.8535 -45.1557 117.443C-18.1497 144.032 16.4205 161.244 48.1984 181.915C79.9763 202.587 110.691 228.947 122.715 264.892C144.095 328.844 100.439 393.942 79.622 458.081C48.115 555.123 72.6622 668.274 141.552 743.54"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-105.045 22.5676C-115.506 58.9924 -96.8766 98.3762 -69.8706 124.965C-42.8646 151.555 -8.29436 168.767 23.4835 189.438C55.2615 210.109 85.9766 236.469 98.0001 272.415C119.38 336.367 75.7243 401.464 54.9072 465.604C23.4002 562.646 47.9473 675.796 116.838 751.063"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
      <svg
        className="shape shape-right text-light"
        viewBox="0 0 731 746"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1794 745.14C1.80036 707.275 -5.75764 666.015 8.73984 629.537C27.748 581.745 80.4729 554.968 131.538 548.843C182.604 542.703 234.032 552.841 285.323 556.748C336.615 560.64 391.543 557.276 433.828 527.964C492.452 487.323 511.701 408.123 564.607 360.255C608.718 320.353 675.307 307.183 731.29 327.323"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M51.0253 745.14C41.2045 709.326 34.0538 670.284 47.7668 635.783C65.7491 590.571 115.623 565.242 163.928 559.449C212.248 553.641 260.884 563.235 309.4 566.931C357.916 570.627 409.887 567.429 449.879 539.701C505.35 501.247 523.543 426.331 573.598 381.059C615.326 343.314 678.324 330.853 731.275 349.906"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M89.8715 745.14C80.6239 711.363 73.8654 674.568 86.8091 642.028C103.766 599.396 150.788 575.515 196.347 570.054C241.906 564.578 287.767 573.629 333.523 577.099C379.278 580.584 428.277 577.567 465.976 551.423C518.279 515.172 535.431 444.525 582.62 401.832C621.964 366.229 681.356 354.493 731.291 372.46"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M128.718 745.14C120.029 713.414 113.678 678.838 125.837 648.274C141.768 608.221 185.939 585.788 228.737 580.659C271.536 575.515 314.621 584.008 357.6 587.282C400.58 590.556 446.607 587.719 482.028 563.16C531.163 529.111 547.275 462.733 591.612 422.635C628.572 389.19 684.375 378.162 731.276 395.043"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M167.564 745.14C159.432 715.451 153.504 683.107 164.863 654.519C179.753 617.046 221.088 596.062 261.126 591.265C301.164 586.452 341.473 594.402 381.677 597.465C421.88 600.527 464.95 597.872 498.094 574.896C544.061 543.035 559.146 480.942 600.617 443.423C635.194 412.135 687.406 401.817 731.276 417.612"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M817.266 289.466C813.108 259.989 787.151 237.697 759.261 227.271C731.372 216.846 701.077 215.553 671.666 210.904C642.254 206.24 611.795 197.156 591.664 175.224C555.853 136.189 566.345 75.5336 560.763 22.8649C552.302 -56.8256 498.487 -130.133 425 -162.081"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M832.584 276.159C828.427 246.683 802.469 224.391 774.58 213.965C746.69 203.539 716.395 202.246 686.984 197.598C657.573 192.934 627.114 183.85 606.982 161.918C571.172 122.883 581.663 62.2275 576.082 9.55873C567.62 -70.1318 513.806 -143.439 440.318 -175.387"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M847.904 262.853C843.747 233.376 817.789 211.084 789.9 200.659C762.011 190.233 731.716 188.94 702.304 184.292C672.893 179.627 642.434 170.544 622.303 148.612C586.492 109.577 596.983 48.9211 591.402 -3.74766C582.94 -83.4382 529.126 -156.746 455.638 -188.694"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M863.24 249.547C859.083 220.07 833.125 197.778 805.236 187.353C777.347 176.927 747.051 175.634 717.64 170.986C688.229 166.321 657.77 157.237 637.639 135.306C601.828 96.2707 612.319 35.6149 606.738 -17.0538C598.276 -96.7443 544.462 -170.052 470.974 -202"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
    </div>
  </section>
 


  
    

  <section   style={{ maxWidth: "2200px", margin: "0 auto", padding: "40px 20px" }} ref={Services}>
  <div style={{ maxWidth: "2200px", margin: "0 auto", padding: "40px 20px" }}>
        <div className="services-section">
          <h2 className="services-title">Services populaires</h2>
          <div className="carousel-container">
            <div 
              className="nav-arrow prev" 
              onClick={handlePrev}
              style={{ display: currentPosition === 0 ? 'none' : 'flex' }}
            >
              <ChevronLeft size={24} />
            </div>
            
            <div className="carousel" ref={carouselRef}>
              {services.map(service => (
                <ServiceCard
                  key={service.id}
                  title={service.title}
                  subtitle={service.subtitle}
                  imageUrl={service.imageUrl}
                />
              ))}
            </div>
            
            <div 
              className="nav-arrow next" 
              onClick={handleNext}
              style={{ display: currentPosition >= maxPosition ? 'none' : 'flex' }}
            >
              <ChevronRight size={24} />
            </div>
          </div>
        </div>
      </div>
   
  </section>
 
  <section className="hero">
      <div style={{ maxWidth: "600px", margin: "0 auto" }} className="container">
        <h1 className="hero-title">
   
          Find a <span>freelancer</span> for any type of work
          Qualified experts for projects of all types and sizes.
        </h1>
       
       
         
        <a href="/Login" className="btn btn-primary ms-2 ms-lg-3">
           
start now
          </a>
          </div>
          </section>
    
          {/* ==========================================================================
   #faq
   ========================================================================== */  }  
      
      <div >
  {/* ...autres sections de ta page Home */}
  <Faq />
</div>


   


  <section className="section testimonials overflow-hidden bg-tertiary" >
  <div className="container" style={{ maxWidth: "1600px", margin: "0 auto" }}>
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="section-title text-center">
            <p className="text-primary text-uppercase fw-bold mb-3">
              User Testimonials
            </p>
            <h1 className="mb-4">Trusted By 1.2K+ People - Thousands of Satisfied Freelancers and Clients</h1>
            <p className="lead mb-0">
              Join our community of freelancers and businesses who collaborate daily to bring their projects to life.
            </p>
          </div>
        </div>
      </div>
      <div className="row position-relative">
        {[
          { name: "Alex Dupont", role: "Web Developer", text: "Thanks to this platform, I found multiple projects as a freelance developer. It's simple and efficient!" },
          { name: "Sophie Martin", role: "Writer & Translator", text: "I was able to connect with companies worldwide and offer my writing and translation services. An amazing experience!" },
          { name: "Thomas Berger", role: "Entrepreneur", text: "I needed a graphic designer for my startup and found an amazing talent in just a few hours. Highly recommend!" },
          { name: "Emily Johnson", role: "Marketing Specialist", text: "This platform helped me scale my business and find amazing clients globally." },
          { name: "Michael Lee", role: "Graphic Designer", text: "Freelancing has never been easier! I landed my first project within a day of signing up." },
          { name: "Laura Smith", role: "SEO Expert", text: "Great platform to find clients and grow professionally in the digital marketing industry!" }
        ].map((user, index) => (
          <div key={index} className="col-lg-4 col-md-6 pt-1">
            <div className="shadow rounded bg-white p-4 mt-4">
              <div className="d-block d-sm-flex align-items-center mb-3">
                <img
                  loading="lazy"
                  decoding="async"
                  src="assets/images/icon123.jpg"
                  alt={user.name}
                  className="img-fluid rounded-circle"
                  width={65}
                  height={66}
                />
                <div className="mt-3 mt-sm-0 ms-0 ms-sm-3">
                  <h4 className="h5 mb-1">{user.name}</h4>
                  <p className="mb-0">{user.role}</p>
                </div>
              </div>
              <div className="content">
                "{user.text}"
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="has-shapes">
      <svg
        className="shape shape-left text-light"
        width={290}
        height={709}
        viewBox="0 0 290 709"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-119.511 58.4275C-120.188 96.3185 -92.0001 129.539 -59.0325 148.232C-26.0649 166.926 11.7821 174.604 47.8274 186.346C83.8726 198.088 120.364 215.601 141.281 247.209C178.484 303.449 153.165 377.627 149.657 444.969C144.34 546.859 197.336 649.801 283.36 704.673"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-141.434 72.0899C-142.111 109.981 -113.923 143.201 -80.9554 161.895C-47.9878 180.588 -10.1407 188.267 25.9045 200.009C61.9497 211.751 98.4408 229.263 119.358 260.872C156.561 317.111 131.242 391.29 127.734 458.631C122.417 560.522 175.414 663.463 261.437 718.335"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-163.379 85.7578C-164.056 123.649 -135.868 156.869 -102.901 175.563C-69.9331 194.256 -32.086 201.934 3.9592 213.677C40.0044 225.419 76.4955 242.931 97.4127 274.54C134.616 330.779 109.296 404.957 105.789 472.299C100.472 574.19 153.468 677.131 239.492 732.003"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M-185.305 99.4208C-185.982 137.312 -157.794 170.532 -124.826 189.226C-91.8589 207.919 -54.0118 215.597 -17.9666 227.34C18.0787 239.082 54.5697 256.594 75.4869 288.203C112.69 344.442 87.3706 418.62 83.8633 485.962C78.5463 587.852 131.542 690.794 217.566 745.666"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
      <svg
        className="shape shape-right text-light"
        width={731}
        height={429}
        viewBox="0 0 731 429"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.1794 428.14C1.80036 390.275 -5.75764 349.015 8.73984 312.537C27.748 264.745 80.4729 237.968 131.538 231.843C182.604 225.703 234.032 235.841 285.323 239.748C336.615 243.64 391.543 240.276 433.828 210.964C492.452 170.323 511.701 91.1227 564.607 43.2553C608.718 3.35334 675.307 -9.81661 731.29 10.323"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M51.0253 428.14C41.2045 392.326 34.0538 353.284 47.7668 318.783C65.7491 273.571 115.623 248.242 163.928 242.449C212.248 236.641 260.884 246.235 309.4 249.931C357.916 253.627 409.887 250.429 449.879 222.701C505.35 184.248 523.543 109.331 573.598 64.0588C615.326 26.3141 678.324 13.8532 731.275 32.9066"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M89.8715 428.14C80.6239 394.363 73.8654 357.568 86.8091 325.028C103.766 282.396 150.788 258.515 196.347 253.054C241.906 247.578 287.767 256.629 333.523 260.099C379.278 263.584 428.277 260.567 465.976 234.423C518.279 198.172 535.431 127.525 582.62 84.8317C621.964 49.2292 681.356 37.4924 731.291 55.4596"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M128.718 428.14C120.029 396.414 113.678 361.838 125.837 331.274C141.768 291.221 185.939 268.788 228.737 263.659C271.536 258.515 314.621 267.008 357.6 270.282C400.58 273.556 446.607 270.719 482.028 246.16C531.163 212.111 547.275 145.733 591.612 105.635C628.572 72.19 684.375 61.1622 731.276 78.0432"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
        <path
          d="M167.564 428.14C159.432 398.451 153.504 366.107 164.863 337.519C179.753 300.046 221.088 279.062 261.126 274.265C301.164 269.452 341.473 277.402 381.677 280.465C421.88 283.527 464.95 280.872 498.094 257.896C544.061 226.035 559.146 163.942 600.617 126.423C635.194 95.1355 687.406 84.8167 731.276 100.612"
          stroke="currentColor"
          strokeMiterlimit={10}
        />
      </svg>
    </div>

  </section>

  <div><section className="section" ref={Contact}>
 
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team. We're here to help you with any questions about our platform.
          </p>
        </div>

        {/* Conteneur en ligne */}
        <div className="flex flex-wrap justify-center items-center gap-12 text-center">
          {/* Email */}
          <div className="flex flex-col items-center">
            <FiMail className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-sm font-semibold text-gray-500">EMAIL</h3>
            <a href="mailto:contact@freehands.dz" className="text-gray-800 hover:text-blue-600">
              freehands@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            <FiPhone className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-sm font-semibold text-gray-500">PHONE</h3>
            <a href="tel:+21321234567" className="text-gray-800 hover:text-blue-600">
              +213 21 23 45 67
            </a>
          </div>

          {/* Working Hours */}
          <div className="flex flex-col items-center">
            <FiClock className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-sm font-semibold text-gray-500">WORKING HOURS</h3>
            <p className="text-gray-800">Sunday - Thursday</p>
            <p className="text-gray-800">8:00 AM - 5:00 PM (Algeria Time)</p>
          </div>

          {/* Headquarters */}
          <div className="flex flex-col items-center">
            <FiMapPin className="text-blue-600 text-3xl mb-2" />
            <h3 className="text-sm font-semibold text-gray-500">LOCATION</h3>
            <p className="text-gray-800">123 Innovation Street</p>
            <p className="text-gray-800">Tlemcen, Algeria 13000</p>
          </div>
        </div>
      </div>
  </section></div>
  
</>


<footer className="section-sm bg-tertiary">
  <div className="container">
    <div className="row justify-content-between">
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">Service</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/service-details1">Graphic Design</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Web Development</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Content Writing</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">Digital Marketing</a>
            </li>
            <li className="mb-2">
              <a href="/service-details">SEO Optimization</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">About</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/Benefits">Benefits</a>
            </li>
            <li className="mb-2">
              <a href="/Careers">Careers</a>
            </li>
            <li className="mb-2">
              <a href="/OurStory">Our Story</a>
            </li>
            <li className="mb-2">
              <a href="/Team">Team</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-2 col-md-4 col-6 mb-4">
        <div className="footer-widget">
          <h5 className="mb-4 text-primary font-secondary">Help</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="mb-2">
              <a href="/faq">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      {/*<div className="col-lg-4 col-md-12 newsletter-form">
        <div style={{ backgroundColor: "#F4F4F4", padding: 35 }}>
          <h5 className="mb-4 text-primary font-secondary">Subscribe</h5>
          <div className="pe-0 pe-xl-5">
            <form
              action="#!"
              method="post"
              name="mc-embedded-subscribe-form"
              target="_blank"
            >
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control shadow-none bg-white border-end-0"
                  placeholder="Email address"
                />{" "}
                <span className="input-group-text border-0 p-0">
                  <button
                    className="input-group-text border-0 bg-primary"
                    type="submit"
                    name="subscribe"
                    aria-label="Subscribe for Newsletter"
                  >
                    <i className="fas fa-arrow-right" />
                  </button>
                </span>
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_463ee871f45d2d93748e77cad_a0a2c6d074"
                  tabIndex={-1}
                />
              </div>
            </form>
          </div>
          <p className="mb-0">
            Lorem 
          </p>
        </div>
      </div>*/}
    </div>
    <div className="row align-items-center mt-5 text-center text-md-start">
      <div className="col-lg-4">
        <a href="index">
          <img
            loading="prelaod"
            decoding="async"
            className="img-fluid"
            width={160}
            src="assets/images/Freehands3.png"
            alt="Wallet"
          />
        </a>
      </div>
      <div className="col-lg-4 col-md-6 mt-4 mt-lg-0">
        <ul className="list-unstyled list-inline mb-0 text-lg-center">
          <li className="list-inline-item me-4">
           
          </li>
          <li className="list-inline-item me-4">
           
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-6 text-md-end mt-4 mt-md-0">
        <ul className="list-unstyled list-inline mb-0 social-icons">
          <li className="list-inline-item me-3">
            <a
              title="Explorer Facebook Profile"
              className="text-black"
              href="https://facebook.com/"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a
              title="Explorer Twitter Profile"
              className="text-black"
              href="https://twitter.com/"
            >
              <i className="fab fa-twitter" />
            </a>
          </li>
          <li className="list-inline-item me-3">
            <a
              title="Explorer Instagram Profile"
              className="text-black"
              href="https://instagram.com/"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
 




        </div>
    )
    
 }

 export default Home