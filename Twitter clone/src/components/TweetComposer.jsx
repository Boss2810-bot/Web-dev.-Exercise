import React, { useState } from 'react';
import styles from './TweetComposer.module.css';

const TweetComposer = ({ onTweet }) => {
  const [text, setText] = useState('');

  const handleTweet = () => {
    if (text.trim()) {
      onTweet(text);
      setText('');
    }
  };

  return (
    <div className={styles.composer}>
      <textarea
        className={styles.textarea}
        placeholder="What's happening?"
        value={text}
        onChange={e => setText(e.target.value)}
        maxLength={280}
        aria-label="Compose new Tweet"
      />
      <button
        className={styles.button}
        onClick={handleTweet}
        disabled={!text.trim()}
        aria-label="Tweet"
      >
        Tweet
      </button>
    </div>
  );
};

export default TweetComposer;
