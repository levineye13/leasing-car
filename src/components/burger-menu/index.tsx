import React, { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

import Button from '../button';
import styles from './index.module.scss';

interface IBurgerMenu {
  readonly onClose: () => void;
}

const BurgerMenu: FC<IBurgerMenu> = ({ onClose }): ReactElement => {
  const handleMenuClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <nav className={styles.nav} onClick={handleMenuClick}>
      <button className={styles.close} type="button" onClick={onClose}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="none"
        >
          <g
            className={styles.line}
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.75"
          >
            <path d="M22.6 9.4 9.4 22.6M9.4 9.4l13.2 13.2" />
          </g>
        </svg>
      </button>
      <div className={styles.content}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to="">
              Лизинг
            </Link>
            <ul className={styles.sublist}>
              <li className={styles.subitem}>
                <Link className={styles.sublink} to="">
                  Для личного пользования
                </Link>
              </li>
              <li className={styles.subitem}>
                <Link className={styles.sublink} to="">
                  Для юридических лиц
                </Link>
              </li>
              <li className={styles.subitem}>
                <Link className={styles.sublink} to="">
                  Калькулятор
                </Link>
              </li>
            </ul>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="">
              Каталог
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to="">
              О нас
            </Link>
          </li>
        </ul>
        <Button type="button" color="orange">
          Оставить заявку
        </Button>
      </div>
    </nav>
  );
};

export default BurgerMenu;
