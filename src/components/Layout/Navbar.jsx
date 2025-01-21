
// Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router';
import styles from './Navbar.module.css';
import logo from "../logo.png";
const Navbar = () => {
    const location = useLocation();
    
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/watched', label: 'Watched' },
        { path: '/watchLater', label: 'WatchLater' },
    ];

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_container}>
                <div className={styles.navbar_nav}>
                <img className={styles.navbar_logo} src={logo} alt="logo"></img>

                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`${styles.navbar_link} ${
                                location.pathname === item.path ? styles.active : ''
                            }`}
                        >
                            {item.label}
                            {location.pathname === item.path && (
                                <div className={styles.navbar_underline} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
