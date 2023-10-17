import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IBackground {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly children?: ReactElement;
}

const Background: FC<IBackground> = ({
  isOpen,
  onClose,
  children,
}): ReactElement => {
  return (
    <div
      className={`${styles.background} ${isOpen ? styles.background_open : ''}`}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default Background;
