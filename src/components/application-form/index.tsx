import React, { FC, ReactElement } from 'react';

import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './index.module.scss';

const ApplicationForm: FC = (): ReactElement => {
  return (
    <Form name="applicationForm">
      <fieldset className={styles.fieldset}>
        <Input
          type="tel"
          title="Телефон"
          name="text"
          value={''}
          error={''}
          onChange={() => {}}
          placeholder="+7 (921) 123 45 67"
        />
        <Input
          type="text"
          title="Имя"
          name="text"
          value={''}
          error={''}
          onChange={() => {}}
          placeholder="Введите имя"
          className={styles.input}
        />
        <div className={styles.div}>
          <p className={styles.par}>
            Нажимая на кнопку «Оставить заявку», я даю согласие&nbsp;
            <a
              className={styles.link}
              href="/"
              target="_blank"
              rel="noopener noreferrer"
            >
              на обработку персональных данных
            </a>
          </p>
          <Button type="button" color="orange">
            Оставить заявку
          </Button>
        </div>
      </fieldset>
    </Form>
  );
};

export default ApplicationForm;
