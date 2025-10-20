import React, { useRef, useState } from 'react';
import myPhoto from '../assets/images/myphoto.jpg';
import myPhoto1 from '../assets/images/admin dark.PNG';
import myPhoto2 from '../assets/images/student dashboard.PNG';
import myPhoto3 from '../assets/images/pho.jpg';
import myPhoto4 from '../assets/images/pho1.jpg';
import myPhoto5 from '../assets/images/pho2.jpg';
import myPhoto6 from '../assets/images/pho3.jpg';
import myPhoto7 from '../assets/images/pho4.jpg';
import myPhoto8 from '../assets/images/pho5.jpg';
import myPhoto9 from '../assets/images/pho6.jpg';
import myPhoto10 from '../assets/images/pho7.PNG';
import myPhoto11 from '../assets/images/pho8.PNG';
import myPhoto12 from '../assets/images/pho9.PNG';
import myPhoto13 from '../assets/images/pho10.PNG';
import myPhoto14 from '../assets/images/pho11.PNG';
import myPhoto15 from '../assets/images/pho12.PNG';
import myPhoto16 from '../assets/images/pho13.PNG';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/main.css';

const Home = () => {
    const aboutRef = useRef(null);
    const myservicesRef = useRef(null);
    const whyhiremeRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    const handleInputChange = e => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const handleSubmit = async e => {
        e.preventDefault();
        setSending(true);
        setSent(false);
        {/*
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });
            if (res.ok) setSent(true);
        } catch (err) {
            alert('Failed to send message.');
        }
           */ }
        setSending(false);
    };

    const portfolioImages = [
        myPhoto3,
        myPhoto4,
        myPhoto5,
        myPhoto6,
        myPhoto7,
        myPhoto8,
        myPhoto9,
        myPhoto10,
        myPhoto11,
        myPhoto12,
        myPhoto13,
        myPhoto14,
        myPhoto15,
        myPhoto16,
    ];


    const scrollToPortfolio = () => {
        if (portfolioRef.current) {
            portfolioRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll to Why Hire Me section when called
    const scrollToWhyHireMe = () => {
        if (whyhiremeRef.current) {
            whyhiremeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    // Scroll to My Services section when called
    const scrollToServices = () => {
        if (myservicesRef.current) {
            myservicesRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Scroll to About Me section when called
    const scrollToAbout = () => {
        if (aboutRef.current) {
            aboutRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToContact = () => {
        if (contactRef.current) {
            contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    React.useEffect(() => {
        const handler = () => scrollToServices();
        window.addEventListener('scrollToServices', handler);
        return () => window.removeEventListener('scrollToServices', handler);
    }, []);
    React.useEffect(() => {
        const handler = () => scrollToPortfolio();
        window.addEventListener('scrollToPortfolio', handler);
        return () => window.removeEventListener('scrollToPortfolio', handler);
    }, []);

    // Listen for custom event from Navbar
    React.useEffect(() => {
        const handler = () => scrollToAbout();
        window.addEventListener('scrollToAbout', handler);
        return () => window.removeEventListener('scrollToAbout', handler);
    }, []);
    React.useEffect(() => {
        const handler = () => scrollToWhyHireMe();
        window.addEventListener('scrollToWhyHireMe', handler);
        return () => window.removeEventListener('scrollToWhyHireMe', handler);
    }, []);
    React.useEffect(() => {
        const handler = () => scrollToContact();
        window.addEventListener('scrollToContact', handler);
        return () => window.removeEventListener('scrollToContact', handler);
    }, []);



    return (
        <>
            {showModal && (
                <div className="portfolio-modal-overlay" onClick={() => setShowModal(false)}>
                    <div className="portfolio-modal" onClick={e => e.stopPropagation()}>
                        <button className="portfolio-modal-close" onClick={() => setShowModal(false)}>✕</button>
                        <h2 className="portfolio-modal-title">All Projects</h2>
                        <div className="portfolio-modal-grid">
                            {portfolioImages.map((img, idx) => (
                                <div className="portfolio-modal-card" key={idx}>
                                    <img src={img} alt={`Project ${idx + 1}`} className="portfolio-modal-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            <div className="home gradient-bg">
                {/* Hero Section */}
                <div className="hero-section">
                    <div className="hero-content">
                        <button className="hello-btn">Hello!</button>
                        <h1>
                            I'm <span className="highlight">Hermela Demeke,</span>
                            <br /> a Website Developer
                        </h1>
                        <p className="hero-desc">
                            Welcome to my creative space! I’m thrilled you stopped by. Whether you’re a potential client, collaborator, or just browsing—thank you for taking the time to explore my work.
                        </p>
                        <div className="hero-actions">
                            <button className="portfolio-btn" onClick={() => window.dispatchEvent(new Event('scrollToPortfolio'))}>Portfolio ↗</button>
                            <button className="hire-btn" onClick={() => window.dispatchEvent(new Event('scrollToWhyHireMe'))}>Hire Me</button>
                        </div>
                    </div>
                    <div className="hero-image-container">
                        <img
                            src={myPhoto}
                            alt="Hermela Demeke"
                            className="hero-image"
                        />

                    </div>
                </div>

                {/* About Me Section */}
                <section className="aboutme-section" ref={aboutRef} id="aboutme">

                    <div className="aboutme-content">

                        <div className="aboutme-info">
                            <button className="aboutme-btn">About Me</button>
                            <h2 className="aboutme-title">
                                Get a website that will make a lasting impression on your audience!!!
                            </h2>
                            <p className="aboutme-desc">
                                Hello! I'm Hermela Demeke, a passionate and dedicated Computer Science student at Wolkite University, on the verge of graduation. Throughout my four years at the university, I have maintained strong academic performance and cultivated a deep interest in several areas of technology, including web development, mobile application development, UI/UX design, and logo design.

                                I have hands-on experience building diverse software projects, which include:
                                <ul>
                                    <li>A Hospital Management System developed with Advanced Java</li>
                                    <li>A Student Registration Form built using C++</li>
                                    <li>An e-commerce platform named "MHD Electronics Shopping" using HTML5, CSS, PHP</li>
                                    <li>A Student Facility Complaint Management System (my final year project, designed to address real needs at my university) using MERN Stack (MongoDB, Express.js, React.js, Node.js)</li>
                                </ul>

                                These projects reflect my ability to apply technical skills to solve practical problems. As I transition from academia to the professional world, I am eager to leverage my skills in creating user-friendly and efficient digital solutions. I am actively seeking opportunities to contribute to innovative projects and continue growing as a developer.
                            </p>
                            <p className="aboutme-desc">
                                Let's connect and create something amazing together!
                            </p>

                            <div className="aboutme-actions">
                                <button
                                    className="aboutme-contact-btn"
                                    onClick={() => window.dispatchEvent(new Event('scrollToContact'))}
                                >
                                    Contact me <span className="arrow">↗</span>
                                </button>
                                <a
                                    href="/resume.pdf"
                                    className="aboutme-resume-btn"
                                    download
                                >
                                    Download my resume <span className="download-icon">📥</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* My Services Section */}
                <section className="myservices-section" ref={myservicesRef} id="myservices">
                    <h2 className="myservices-title">
                        My <span className="highlight">Services</span>
                    </h2>
                    <p className="myservices-desc">
                        AS a ComputerScience Student I can provide u services like web development, logo design, mobile app development,UI/UX design...
                    </p>
                    <div className="myservices-cards">
                        <div className="service-card">
                            <h3>UI/ UX Design</h3>
                            <div className="service-img-wrap">
                                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="UI/UX Design" />
                                {/* <button className="service-arrow-btn">↗</button> */}
                            </div>
                        </div>
                        <div className="service-card">
                            <h3>Web Design</h3>
                            <div className="service-img-wrap">
                                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6" alt="Web Design" />
                                {/* <button className="service-arrow-btn">↗</button> */}
                            </div>
                        </div>
                        <div className="service-card">
                            <h3>Web Development</h3>
                            <div className="service-img-wrap">
                                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308" alt="Web Development" />
                                {/* <button className="service-arrow-btn">↗</button> */}
                            </div>
                        </div>
                    </div>
                    {/*<button className="seeall-btn">See All ↗</button>*/}
                </section>

                <section className="whyhireme-section" ref={whyhiremeRef} id="whyhireme">
                    <div className="whyhireme-container">
                        <div className="whyhireme-left">
                            <h2 className="whyhireme-title">
                                Why Hire <span className="highlight"> Hermela Demeke?</span>
                            </h2>
                            <p className="whyhireme-desc">
                                I specialize in creating impactful digital solutions across multiple domains: Web Development, Logo Design, Mobile App Development, and UI/UX Design. My academic rigor, combined with hands-on project experience, makes me a valuable asset for innovative tech teams.
                            </p>
                            <div className="whyhireme-stats">

                                <div>
                                    <span className="whyhireme-stat-number highlight">10</span>
                                    <div className="whyhireme-stat-label">Project Completed</div>
                                </div>

                            </div>
                            <button className="whyhireme-btn" onClick={() => window.dispatchEvent(new Event('scrollToContact'))}>
                                Hire Me <span className="arrow">↗</span>
                            </button>
                        </div>
                        <div className="whyhireme-right">
                            <div className="whyhireme-img-bg">
                                <div className="whyhireme-circle whyhireme-circle1"></div>
                                <div className="whyhireme-circle whyhireme-circle2"></div>
                                <img
                                    src={myPhoto}
                                    alt="Why Hire Me"
                                    className="whyhireme-img"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                {/* My Work Skills Section */}
                <section className="workskills-section" id="workskills">
                    <h2 className="workskills-title">
                        My Work <span className="highlight">Skills</span>
                    </h2>
                    <p className="workskills-desc">
                        this section showcases my technical skills and expertise in various areas of web development and design. Each skill is represented with a proficiency percentage, reflecting my commitment to quality and continuous improvement.
                    </p>
                    <div className="workskills-grid">
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="workskill-icon" />
                            <div className="workskill-name">Figma</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '99%' }}>99%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="workskill-icon" />
                            <div className="workskill-name">MySQL</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '95%' }}>95%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="workskill-icon" />
                            <div className="workskill-name">MongoDB</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '93%' }}>93%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="workskill-icon" />
                            <div className="workskill-name">HTML</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '97%' }}>97%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="workskill-icon" />
                            <div className="workskill-name">CSS</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '99%' }}>99%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="workskill-icon" />
                            <div className="workskill-name">PHP</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '94%' }}>94%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="Logo Design" className="workskill-icon" />
                            <div className="workskill-name">Logo Design</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '90%' }}>90%</div>
                            </div>
                        </div>
                        <div className="workskill-card">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="MERN Stack" className="workskill-icon" />
                            <div className="workskill-name">MERN Stack</div>
                            <div className="workskill-bar">
                                <div className="workskill-bar-fill" style={{ width: '96%' }}>96%</div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Look at My Portfolio Section */}
                <section className="portfolio-section" ref={portfolioRef} id="portfolio">
                    <h2 className="portfolio-title">
                        Look at My <span className="highlight"> Sample Projects</span>
                    </h2>
                    <p className="portfolio-desc">
                        sample project  interface images that I have worked on, showcasing my skills in web development and design. Each project reflects my commitment to quality and user experience.
                    </p>
                    <div className="portfolio-grid">
                        <div className="portfolio-card">
                            <img src={myPhoto9} alt="Admin Dashboard" className="portfolio-img" />
                        </div>
                        <div className="portfolio-card">
                            <img src={myPhoto3} alt="Student Dashboard" className="portfolio-img" />
                        </div>

                    </div>

                    <button className="portfolio-seeall-btn" onClick={() => setShowModal(true)}>See All ↗</button>

                </section>
                {/*Contact us Section*/}
                <section className="contact-section" ref={contactRef} id="contact">
                    <h2 className="contact-title">Let's make your brand brilliant!</h2>
                    <div className="contact-email">bhmd0595@gmail.com</div>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="What’s your name?"
                            className="contact-input"
                            value={form.name}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            className="contact-input"
                            value={form.email}
                            onChange={handleInputChange}
                            required
                        />
                        <textarea
                            name="message"
                            placeholder="Tell me about your project"
                            className="contact-textarea"
                            value={form.message}
                            onChange={handleInputChange}
                            required
                        ></textarea>
                        <div className="contact-actions">
                            <button type="submit" className="contact-submit-btn" disabled={sending}>
                                {sending ? 'Sending...' : 'Get a Quote'} <span className="arrow">↗</span>
                            </button>
                            <label className="contact-file-label">
                                <input type="file" style={{ display: 'none' }} />
                                <span className="contact-file-btn">Choose a file</span>
                                <span className="contact-file-chosen">No file chosen.</span>
                            </label>
                        </div>
                        {sent && <div style={{ color: 'green', marginTop: 10 }}>Message sent!</div>}
                    </form>
                </section>
                <footer className="footer-section">
                    <div className="footer-container">
                        <div className="footer-brand">
                            <div className="footer-logo">
                                <span className="brand-circle">HD</span>
                                <span className="brand-text">Hermela</span>
                            </div>
                            <p>little by little we go far, Never settle for less than your best</p>
                        </div>
                        <div className="footer-nav">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="#" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</a></li>
                                <li><a href="#myservices" onClick={e => { e.preventDefault(); window.dispatchEvent(new Event('scrollToServices')); }}>Services</a></li>
                                <li><a href="#portfolio" onClick={e => { e.preventDefault(); window.dispatchEvent(new Event('scrollToPortfolio')); }}>Portfolio</a></li>
                                <li><a href="#aboutme" onClick={e => { e.preventDefault(); window.dispatchEvent(new Event('scrollToAbout')); }}>About</a></li>
                                <li><a href="#contact" onClick={e => { e.preventDefault(); window.dispatchEvent(new Event('scrollToContact')); }}>Contact</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h4>Contact</h4>
                            <ul>
                                <li>📞 +(251) 988747881</li>
                                <li>✉️ bhmd0595@gmail.com</li>
                                <li>📍 Ethiopia, AddisAbaba, cmc</li>
                            </ul>
                        </div>
                        <div className="footer-newsletter">
                            <h4> To get the latest information</h4>
                            <p>contact hermela demeke through email.</p>
                            <form className="footer-newsletter-form" onSubmit={e => e.preventDefault()}>
                                <input type="email" placeholder="Your email" />
                                <button type="submit" className="newsletter-btn">↗</button>
                            </form>
                            <div className="footer-socials">
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                    <span className="footer-social-icon">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                                    </span>
                                </a>
                                <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                    <span className="footer-social-icon">
                                        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/telegram.svg" alt="Telegram" />
                                    </span>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <span>Copyright © 2025 All Rights Reserved.</span>

                    </div>
                </footer>
            </div >
        </>

    );
};

export default Home;