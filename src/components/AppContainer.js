import React, { useState } from 'react';
import MainCard from './MainCard';
import Journal from './Journal';
import styles from './AppContainer.module.scss';

const AppContainer = () => {
  const [currentPage, setCurrentPage] = useState('main');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.appContainer}>
      {currentPage === 'main' && <MainCard onNavigate={handleNavigate} />}
      {currentPage === 'journal' && <Journal onNavigateBack={() => handleNavigate('main')} />}
    </div>
  );
};

export default AppContainer;
