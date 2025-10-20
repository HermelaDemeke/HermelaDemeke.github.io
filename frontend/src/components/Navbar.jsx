import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="brand-logo">
                        <span className="brand-circle">HD</span>
                        <span className="brand-text">Hermela Demeke</span>
                    </Link>
                </div>
                <button
                    className="navbar-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" className="active-link">Home</Link>
                    </li>

                    <li>
                        <a
                            href="#myservices"
                            onClick={e => {
                                e.preventDefault();
                                window.dispatchEvent(new Event('scrollToServices'));
                            }}
                        >
                            Services
                        </a>
                    </li>

                    <li>
                        <a
                            href="#portfolio"
                            onClick={e => {
                                e.preventDefault();
                                window.dispatchEvent(new Event('scrollToPortfolio'));
                            }}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#aboutme"
                            onClick={e => {
                                e.preventDefault();
                                window.dispatchEvent(new Event('scrollToAbout'));
                            }}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            onClick={e => {
                                e.preventDefault();
                                window.dispatchEvent(new Event('scrollToContact'));
                            }}
                        >
                            Contact
                        </a>
                    </li>

                </ul>
                <Link
                    to="#contact"
                    className="lets-talk-btn"
                    onClick={e => {
                        e.preventDefault();
                        window.dispatchEvent(new Event('scrollToContact'));
                    }}
                >
                    Let's Talk <span className="arrow">↗</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;