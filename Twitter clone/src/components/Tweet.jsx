import React from 'react';
import styles from './Tweet.module.css';

const Tweet = ({ name, username, avatar, content, time }) => (
  <article className={styles.tweet} tabIndex={0} aria-label={`Tweet by ${name}`}>
    <img src={avatar} alt={name + "'s avatar"} className={styles.avatar} />
    <div className={styles.body}>
      <div className={styles.header}>
        <span className={styles.name}>{name}</span>
        <span className={styles.username}>@{username}</span>
        <span className={styles.time}>· {time}</span>
      </div>
      <p className={styles.content}>{content}</p>
    </div>
  </article>
);

export default Tweet;
