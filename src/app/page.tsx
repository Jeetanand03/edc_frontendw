'use client';

import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import './portfolio.css';

const Home = () => {
  const [theme, setTheme] = useState('theme-light');
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null);

  const toggleTheme = () => {
    const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';
    setTheme(newTheme);
  };

  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'know about black hole',
      imageUrl: 'https://cdn.mos.cms.futurecdn.net/HsDtpFEHbDpae6wBuW5wQo-970-80.jpg.webp',
      imageCls : "proj1"
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'facts about humming bird!!',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdNcmfpuTqhi4zeF_DFthrTVIn56m5mxOWvIOyxf0SeZ1YHNSX',
      imageCls : "proj2"
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'eiffel towar for tourist',
      imageUrl: 'https://www.toureiffel.paris/sites/default/files/styles/mobile_x1_560/public/decouvrir-la-tour-eiffel-landing.jpg?itok=LMAT0gV3',
      imageCls : "proj3"
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    if (slideRef.current) {
      gsap.fromTo(slideRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 });
    }
  }, [currentSlide]);

  return (
    <div className={theme}>
      <header className={`my-header ${theme}`}>
        <nav>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </nav>
        <button className={`theme-toggle`} onClick={toggleTheme}>
          Toggle {theme === 'theme-light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>

      <main>
        <section className={`section`} id="hero">
          <div>
            <h1>Welcome to My Portfolio</h1>
            <pre>
            <p>For my first web development project, I created a personal portfolio website to showcase my skills,projects, 
              and professional background. <br></br>This project involved designing and developing a responsive, visually appealing, and user-friendly website from scratch. <br />

            <br />Key Features: <br />
<br />Responsive Design: Implemented a mobile-first approach to ensure the website looks great on all devices, including desktops, tablets, <br></br>and smartphones.<br />

<br />Interactive Elements: Used modern CSS animations and JavaScript to add interactive elements like a hamburger menu, smooth scrolling, and <br></br>hover  effects to enhance user experience.
<br />   <br></br>
Clean Layout: Designed a clean and professional layout using HTML5 and CSS3 to present information clearly and effectively.<br />
<br />Project Showcase: Created a dedicated section to display my projects with descriptions, technologies used, and links to live demos <br></br>and source code on GitHub.
Contact Form: Integrated a contact form using HTML, CSS, and JavaScript, allowing visitors to get in touch <br></br> with me easily.<br />
<br />Performance Optimization: Optimized images and implemented lazy loading to improve the website's performance and loading speed.</p></pre>

          </div>
        </section>

        <section className={`section`} id="projects">
          <h2>Projects</h2>
          <div className="carousel">
            <div className="slide" ref={slideRef}>
              <img className={projects[currentSlide].imageCls} src={projects[currentSlide].imageUrl} alt={projects[currentSlide].title} />
              <div className="project-info">
                <h3>{projects[currentSlide].title}</h3>
                <h4>{projects[currentSlide].description}</h4>
              </div>
            </div>
            <button className="nav-button prev" onClick={prevSlide}>
              Prev
            </button>
            <button className="nav-button next" onClick={nextSlide}>
              Next
            </button>
          </div>
        </section>
      </main>

      <footer className={`footer`} id="footer">
        <p>&copy; contact @ J.anand.com</p>
      </footer>
    </div>
  );
};

export default Home;
