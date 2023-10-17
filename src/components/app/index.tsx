import React, { FC, ReactElement, useState } from 'react';

import Header from '../header';
import Menu from '../burger-menu';
import SliderPage from '../../pages/slider';
import Background from '../background';
import styles from './index.module.scss';

const App: FC = (): ReactElement => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <div className={styles.app}>
      <Header onOpenMenu={handleOpenMenu} />
      <main className={styles.main}>
        <SliderPage />
      </main>
      <Background isOpen={menuIsOpen} onClose={handleCloseMenu}>
        <Menu onClose={handleCloseMenu} />
      </Background>
    </div>
  );
};

export default App;
