import React, { FC, ReactElement, useState } from 'react';

import Header from '../header';
import Menu from '../burger-menu';
import SliderPage from '../../pages/slider';
import CalculatorPage from '../../pages/calculator';
import ApplicationPage from '../../pages/online-application';
import Background from '../background';
import styles from './index.module.scss';

const App: FC = (): ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [applicationPageIsOpen, setApplicationPageIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleOpenApplicationPage = () => {
    setApplicationPageIsOpen(true);
  };

  const handleClose = () => {
    setMenuIsOpen(false);
    setApplicationPageIsOpen(false);
  };

  return (
    <div className={styles.app}>
      <Header
        className={styles.header}
        onOpenMenu={handleOpenMenu}
        onOpenApplicationPage={handleOpenApplicationPage}
      />
      <main className={styles.main}>
        <SliderPage className={styles.slider} />
        <CalculatorPage className={styles.calculator} />
      </main>
      <Background isOpen={menuIsOpen} onClose={handleClose}>
        <Menu onClose={handleClose} />
      </Background>
      <Background isOpen={applicationPageIsOpen} onClose={handleClose}>
        <ApplicationPage isOpen={applicationPageIsOpen} onClose={handleClose} />
      </Background>
    </div>
  );
};

export default App;
