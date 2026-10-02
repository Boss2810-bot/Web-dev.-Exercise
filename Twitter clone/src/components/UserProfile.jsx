import React from 'react';
import styles from './UserProfile.module.css';

const UserProfile = () => (
  <aside className={styles.profile} aria-label="User profile">
    <img
      src="https://randomuser.me/api/portraits/men/3.jpg"
      alt="User avatar"
      className={styles.avatar}
    />
    <div className={styles.info}>
      <span className={styles.name}>Alex Johnson</span>
      <span className={styles.username}>@alex_johnson</span>
    </div>
  </aside>
);

export default UserProfile;
