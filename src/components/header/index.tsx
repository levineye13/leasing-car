import React, { FC, ReactElement } from 'react';

import Button from '../button';
import { images } from '../../images';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

interface IHeader {
  readonly onOpenMenu: () => void;
}

const Header: FC<IHeader> = ({ onOpenMenu }): ReactElement => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src={images.headerLogo}
        alt="Логотип"
        title="Логотип"
      />
      <p className={styles.description}>лизинговая компания</p>
      <nav className={styles.nav}>
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
        <Button type="button">Оставить заявку</Button>
      </nav>
      <button className={styles.burger} type="button" onClick={onOpenMenu}>
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
            clipPath="url(#a)"
          >
            <path d="M5.333 8h21.334M5.333 16h21.334M5.333 24h16" />
          </g>
          <defs>
            <clipPath id="a">
              <path fill="#fff" d="M0 0h32v32H0z" />
            </clipPath>
          </defs>
        </svg>
      </button>
    </header>
  );
};

export default Header;
