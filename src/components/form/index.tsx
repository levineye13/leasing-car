import React, { FC, ReactElement } from 'react';

import styles from './index.module.scss';

interface IForm {
  readonly children: ReactElement | ReactElement[];
  readonly name: string;
}

const Form: FC<IForm> = ({ children, name }): ReactElement => {
  return (
    <form className={styles.form} name={name} noValidate>
      {children}
    </form>
  );
};

export default Form;
