import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IPointsSlider {
  readonly length: number;
  readonly activeIndex: number;
  readonly className?: string;
}

const PointsSlider: FC<IPointsSlider> = ({
  length,
  activeIndex,
  className,
}): ReactElement => {
  return (
    <div className={`${styles.points} ${className}`}>
      <ul className={styles.list}>
        {new Array(length).fill(null).map((_, index) => (
          <li
            className={`${styles.item} ${
              index === activeIndex ? styles.item_active : ''
            }`}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default PointsSlider;
