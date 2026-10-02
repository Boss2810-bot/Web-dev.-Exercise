import React from 'react';
import styles from './Sidebar.module.css';

const navItems = [
  { label: 'Home', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 10.5 12 4l9 6.5" stroke="#1da1f2" strokeWidth="2"/><path d="M5 10.5V19a1 1 0 0 0 1 1h3v-5h4v5h3a1 1 0 0 0 1-1v-8.5" stroke="#1da1f2" strokeWidth="2"/></svg>
  ) },
  { label: 'Explore', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="#1da1f2" strokeWidth="2"/><path d="M8 16l8-8-3 8-8 3 3-8z" fill="#1da1f2"/></svg>
  ) },
  { label: 'Notifications', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M18 16v-5a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z" stroke="#1da1f2" strokeWidth="2"/><circle cx="12" cy="20" r="1" fill="#1da1f2"/></svg>
  ) },
  { label: 'Messages', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" stroke="#1da1f2" strokeWidth="2"/><path d="M3 7l9 6 9-6" stroke="#1da1f2" strokeWidth="2"/></svg>
  ) },
  { label: 'Bookmarks', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M6 4a2 2 0 0 0-2 2v14l8-5 8 5V6a2 2 0 0 0-2-2H6z" stroke="#1da1f2" strokeWidth="2"/></svg>
  ) },
  { label: 'Profile', icon: (
    <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" stroke="#1da1f2" strokeWidth="2"/><path d="M4 20v-1a8 8 0 0 1 16 0v1" stroke="#1da1f2" strokeWidth="2"/></svg>
  ) },
];

const Sidebar = () => (
  <nav className={styles.sidebar} aria-label="Main navigation">
    <ul className={styles.navList}>
      {navItems.map(item => (
        <li key={item.label} className={styles.navItem}>
          <a href="#" aria-label={item.label} className={styles.navLink}>
            <span className={styles.icon}>{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </a>
        </li>
      ))}
    </ul>
    <button className={styles.tweetButton} aria-label="Tweet">Tweet</button>
  </nav>
);

export default Sidebar;
