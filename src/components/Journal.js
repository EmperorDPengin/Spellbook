import Link from 'next/link'
import React from 'react';
import styles from './Journal.module.scss';

const Journal = ({ onNavigateBack }) => {
  return (
    <div className={styles.journal}>
      <button onClick={onNavigateBack}>Back to Main</button>
      <h1>INDEX</h1>
      <input type="text" className="search-box" placeholder="Search pages..." />
      <ul>
        <li><Link href="./python/good_python_habits">5 Good Python Habits</Link></li>
      </ul>
    </div>
  );
};

export default Journal;