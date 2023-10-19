import React, { FC, ReactElement } from 'react';

import ApplicationForm from '../../components/application-form';
import { images } from '../../images';
import styles from './index.module.scss';

interface IOnlineApplication {
  readonly isOpen: boolean;
  readonly onClose: () => void;
}

const OnlineApplication: FC<IOnlineApplication> = ({
  isOpen,
  onClose,
}): ReactElement => {
  const handleClickSection = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };

  return (
    <section
      className={`${styles.section} ${isOpen ? styles.section_open : ''}`}
      onClick={handleClickSection}
    >
      <button className={styles.close} type="button" onClick={onClose} />
      <div className={styles.content}>
        <p className={styles.title}>Онлайн-заявка</p>
        <p className={styles.description}>
          Заполните форму, и мы вскоре свяжемся с вами, чтобы ответить на все
          вопросы
        </p>
        <ApplicationForm />
        <address className={styles.socials}>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images.whatsapp} alt="Whatsapp" title="Whatsapp" />
          </a>
          <a
            className={styles.link}
            href="/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images.telegram} alt="Telegram" title="Telegram" />
          </a>
        </address>
      </div>
    </section>
  );
};

export default OnlineApplication;
