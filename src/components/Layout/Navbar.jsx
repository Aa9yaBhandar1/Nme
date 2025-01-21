import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Navbar.module.css';
import logo from "../logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/watched', label: 'Watched' },
    { path: '/watchLater', label: 'WatchLater' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_nav}>
          <img className={styles.navbar_logo} src={logo} alt="logo" />
          
          <button 
            className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className={`${styles.navbar_links} ${isMenuOpen ? styles.active : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${styles.navbar_link} ${
                  location.pathname === item.path ? styles.active : ''
                }`}
                onClick={handleLinkClick}
              >
                {item.label}
                {location.pathname === item.path && (
                  <div className={styles.navbar_underline} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;