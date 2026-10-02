import React from 'react';
import styles from './TrendsPanel.module.css';

const trends = [
  { title: 'NFL Top 100 Countdown', description: 'LIVE', promoted: false },
  { title: '70 Years of SBI', description: 'SBI Celebrates Platinum Jubilee', promoted: true },
  { title: 'Apollo Hospitals', description: 'Business & finance · Trending', promoted: false },
  { title: 'bhaiya ji', description: 'Politics · Trending', promoted: false },
  { title: '#GoodBadUgly', description: 'Entertainment · Trending', promoted: false },
];

const TrendsPanel = () => (
  <aside className={styles.trendsPanel} aria-label="What’s happening">
    <h2 className={styles.heading}>What’s happening</h2>
    <ul className={styles.trendsList}>
      {trends.map((trend, i) => (
        <li key={i} className={styles.trend}>
          <span className={styles.trendTitle}>{trend.title}</span>
          <span className={styles.trendDesc}>{trend.description}</span>
          {trend.promoted && <span className={styles.promoted}>Promoted</span>}
        </li>
      ))}
    </ul>
  </aside>
);

export default TrendsPanel;
