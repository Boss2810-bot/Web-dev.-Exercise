import React from 'react';
import styles from './TweetFeed.module.css';
import Tweet from './Tweet';

const dummyTweets = [
  {
    id: 1,
    name: 'Jane Doe',
    username: 'jane_doe',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    content: 'Hello Twitter! This is my first tweet.',
    time: '2m',
  },
  {
    id: 2,
    name: 'John Smith',
    username: 'john_smith',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    content: 'React + Vite is awesome! 🚀',
    time: '5m',
  },
];

const TweetFeed = () => (
  <section className={styles.feed} aria-label="Timeline">
    {dummyTweets.map(tweet => (
      <Tweet key={tweet.id} {...tweet} />
    ))}
  </section>
);

export default TweetFeed;
