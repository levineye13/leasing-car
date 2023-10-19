import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IInput {
  readonly type: HTMLInputElement['type'];
  readonly title: string;
  readonly name: string;
  readonly value: string | number;
  readonly onChange: () => void;
  readonly error?: string;
  readonly required?: boolean;
  readonly placeholder?: string;
  readonly disabled?: boolean;
  readonly className?: string;
}

const Input: FC<IInput> = ({
  type,
  title,
  name,
  value,
  error,
  required,
  placeholder,
  disabled,
  className,
}): ReactElement => {
  return (
    <label
      className={`${styles.label} ${disabled ? styles.label_disabled : ''} ${
        className || ''
      }`}
    >
      <span className={styles.title}>{title}</span>
      <input
        className={`${styles.input} ${error ? styles.input_error : ''}`}
        name={name}
        value={value}
        type={type}
        required={required}
        disabled={disabled}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </label>
  );
};

export default Input;
