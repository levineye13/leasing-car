import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButton {
  readonly children: string;
  readonly type: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  readonly disabled?: boolean;
  readonly onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  readonly color?: 'white' | 'orange' | 'grey';
}

const Button: FC<IButton> = ({
  children,
  type,
  onClick,
  disabled,
  color = 'white',
}): ReactElement => {
  return (
    <button
      className={`${styles.button} ${styles[color]}`}
      type={type || 'button'}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
