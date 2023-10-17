import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButtonBack {
  readonly onClick: () => void;
  readonly className?: string;
}

const ButtonProgress: FC<IButtonBack> = ({
  onClick,
  className,
}): ReactElement => {
  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
    />
  );
};

export default ButtonProgress;
