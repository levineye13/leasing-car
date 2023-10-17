import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IButtonProgress {
  readonly progress: number;
  readonly onClick: () => void;
  readonly className?: string;
}

const ButtonProgress: FC<IButtonProgress> = ({
  progress,
  onClick,
  className,
}): ReactElement => {
  const strokeDasharray = 150.7;
  const strokeDashoffset = strokeDasharray * ((100 - progress) / 100);

  return (
    <button
      className={`${styles.button} ${className}`}
      type="button"
      onClick={onClick}
    >
      <svg className={styles.svg}>
        <circle className={styles.track} />
        <circle
          className={styles.indicator}
          strokeDashoffset={strokeDashoffset}
        />
      </svg>
    </button>
  );
};

export default ButtonProgress;
