import React, { FC, ReactElement } from 'react';

import Button from '../button';
import styles from './index.module.scss';

interface IDescriptionSlider {
  readonly title: string;
  readonly text: string;
  readonly onOpenApplicationPage: () => void;
  readonly withTitle?: boolean;
  readonly className?: string;
}

const DescriptionSlider: FC<IDescriptionSlider> = ({
  title,
  text,
  onOpenApplicationPage,
  withTitle,
  className,
}): ReactElement => {
  return (
    <div className={`${styles.description} ${className}`}>
      {withTitle ? (
        <h1 className={styles.title}>{title}</h1>
      ) : (
        <p className={styles.title}>{title}</p>
      )}
      <p className={styles.text}>{text}</p>
      <Button type="button" color="orange" onClick={onOpenApplicationPage}>
        Оставить заявку
      </Button>
    </div>
  );
};

export default DescriptionSlider;
