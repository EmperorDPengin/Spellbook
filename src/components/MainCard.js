import React from 'react';
import styles from './MainCard.module.scss';

const MainCard = ({ onNavigate }) => {
  return (
    <div className={styles.mainCard}>
      <div className={styles.profile}>
        <h1>Digital Penguin</h1>
        <p>LV 2</p>
        <p>A Practitioner of Digital Media and Software Creation.</p>
      </div>
      <div className={styles.navigation}>
        <button onClick={() => onNavigate('journal')}>Journal</button>
        <button onClick={() => onNavigate('items')}>Items</button>
        <button onClick={() => onNavigate('skills')}>Skills</button>
        <button onClick={() => onNavigate('glory')}>Glory</button>
        <button onClick={() => onNavigate('quests')}>Quests</button>
        <button onClick={() => onNavigate('extras')}>Extras</button>
      </div>
    </div>
  );
};

export default MainCard;
