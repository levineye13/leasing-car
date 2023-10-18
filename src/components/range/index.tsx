import React, { FC, ReactElement, useEffect, useState } from 'react';

import { images } from '../../images';
import { TRange } from '../../utils/types';
import styles from './index.module.scss';

interface IRange {
  readonly title: string;
  readonly value: string | number;
  readonly name: string;
  readonly min: string | number;
  readonly max: string | number;
  readonly disabled?: boolean;
  readonly icon: TRange;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  readonly percentSum?: string | number;
}

const Range: FC<IRange> = ({
  title,
  value,
  name,
  min,
  max,
  disabled,
  icon,
  onChange,
  onBlur,
  percentSum,
}): ReactElement => {
  const sum = Math.floor((Number(value) * Number(percentSum)) / 100);

  return (
    <div className={`${styles.div} ${disabled ? styles.div_disabled : ''}`}>
      <p className={styles.title}>{title}</p>
      <label className={styles.label}>
        <input
          className={styles.input}
          type="text"
          value={icon === 'percent' ? sum : value}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          disabled={disabled}
        />
        {icon === 'sum' ? (
          <img src={images.sum} alt="Стоимость" title="Стоимость" />
        ) : icon === 'percent' ? (
          <span className={styles.percent}>{`${value}%`}</span>
        ) : (
          <span className={styles.month}>мес.</span>
        )}
      </label>
      <input
        className={styles.range}
        type="range"
        name={name}
        min={min}
        max={max}
        value={value || 0}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default Range;
