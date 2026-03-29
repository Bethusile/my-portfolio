import React, { useState, useEffect } from 'react';
import '../App.css';

// Import images
import fkImg from '../assets/images/fk-pic.png';
import marketingImg from '../assets/images/bbd-marketing.png';
import tuckshopImg from '../assets/images/tuckshop3.png';
import lasertagImg from '../assets/images/lasertag.png';
import shellhubImg from '../assets/images/shellhub2.png';

const Projects = ({ id }) => {
  const [activeTab, setActiveTab] = useState('Custom Web Application');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const projectData = {
    'Basic Website': [
      {
        title: "ShellHub",
        desc: "A clean, modern static website built to showcase a brand or service with a polished UI, smooth navigation, and responsive layout across all devices.",
        role: "Frontend Developer",
        tech: [
          { name: "Html, CSS", icon: "fab fa-react" },
          { name: "Vercel", icon: "fas fa-cloud" }
        ],
        image: shellhubImg,
        link: "https://github.com/Bethusile/ShellHub",
        demo: "https://shell-hub.vercel.app/"
      }
    ],
    'Portfolio Website': [
      {
        title: "Psychology Website",
        desc: "A clean, professional portfolio website built for a psychologist, featuring service listings, an about section, and a contact form. Designed for a strong personal brand presence.",
        role: "Full Stack Developer",
        tech: [
          { name: "React", icon: "fab fa-react" },
          { name: "Netlify", icon: "fas fa-cloud" }
        ],
        image: fkImg,
        link: "https://github.com/Bethusile/fihliweklaas-psychology-website",
        demo: "https://fihliweklaas.netlify.app/"
      }
    ],
    'Custom Web Application': [      
      {
        title: "Tuckshop Stock Manager",
        desc: "An automated inventory solution featuring financial tracking, real-time stock levels, and PDF reporting for small-scale retail operations.",
        role: "Backend Lead",
        tech: [
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "PostgreSQL", icon: "fas fa-database" },
          { name: "Express.js", icon: "fas fa-server" },
          { name: "MUI", icon: "fas fa-code" },
          { name: "React", icon: "fab fa-react" }
        ],
        image: tuckshopImg,
        link: "https://github.com/Bethusile/TuckShop",
        demo: "https://tuck-shop-nu.vercel.app/"
      },
      {
        title: "Lasertag Web Game",
        desc: "A real-time multiplayer web game utilizing Socket.IO for low-latency communication and a React-based frontend for dynamic UI updates.",
        role: "Frontend Developer",
        tech: [
          { name: "Socket.IO", icon: "fas fa-network-wired" },
          { name: "React", icon: "fab fa-react" },
          { name: "TypeScript", icon: "fas fa-code" }
        ],
        image: lasertagImg,
        link: "https://github.com/Bethusile/BBD-Laser-Tag-Game",
        demo: "https://bbd-laser-tag-game.vercel.app/"
      },
      {
        title: "BBD Marketing Campaign Manager",
        desc: "A web-based Augmented Reality marketing platform that allows users to scan print ads to reveal hidden content. Built with React, Node.js, and MindAR for interactive AR experiences.",
        role: "Full Stack Developer",
        tech: [
          { name: "React", icon: "fab fa-react" },
          { name: "Node.js", icon: "fab fa-node-js" },
          { name: "MindAR", icon: "fas fa-eye" },
          { name: "Express.js", icon: "fas fa-server" },
          { name: "PostgreSQL", icon: "fas fa-database" },
          { name: "TypeScript", icon: "fas fa-code" },
          { name: "MUI", icon: "fas fa-code" }
        ],
        image: marketingImg,
        link: "https://github.com/Bethusile/Marketing-Campaign-Manager",
        demo: "https://github.com/Bethusile/Marketing-Campaign-Manager"
      }
    ]
  };

  const currentProjects = projectData[activeTab] || [];

  useEffect(() => {
    if (currentProjects.length <= 1 || isHovering) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentProjects.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [activeTab, currentProjects.length, isHovering]);

  const handleNext = () => setCurrentIndex((currentIndex + 1) % currentProjects.length);
  const handlePrev = () => setCurrentIndex((currentIndex - 1 + currentProjects.length) % currentProjects.length);

  return (
    <section id={id} className="projects-section">
      <div className="section-container full-width-container">
        <h2 className="section-title text-center">Featured Projects</h2>

        <div className="tabs-container">
          {Object.keys(projectData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
              onClick={() => { setActiveTab(tab); setCurrentIndex(0); }}
            >
              {tab}
            </button>
          ))}
        </div>

        <div
          className="slider-view-viewport full-width-viewport"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className="projects-slider-track">
            {currentProjects.map((proj, index) => (
              <div key={index} className={`project-card-full ${index === currentIndex ? 'active-card' : 'inactive-card'}`}>
                <div className="image-header-full">
                  <a href={proj.demo} target="_blank" rel="noreferrer">
                    <img src={proj.image} alt={proj.title} />
                  </a>
                </div>

                <div className="project-content-full text-center">
                  <h3>{proj.title}</h3>
                  <p className="project-description">{proj.desc}</p>

                  <div className="tech-icon-grid">
                    {proj.tech.map((t, i) => (
                      <span key={i} className="tech-item">
                        <i className={t.icon}></i> {t.name}
                      </span>
                    ))}
                  </div>

                  <p className="project-role"><strong>Role:</strong> {proj.role}</p>

                  <div className="github-box-container">
                    <a href={proj.link} target="_blank" rel="noreferrer" className="github-text-box">
                      Github
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="slider-nav-tools">
          <button className="nav-circle-btn" onClick={handlePrev}>
            <i className="fas fa-chevron-left"></i>
          </button>

          <div className="pagination-dots">
            {currentProjects.map((_, i) => (
              <div
                key={i}
                className={`dot ${i === currentIndex ? 'active-dot' : ''}`}
                onClick={() => setCurrentIndex(i)}
              />
            ))}
          </div>

          <button className="nav-circle-btn" onClick={handleNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;