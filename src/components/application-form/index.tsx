import React, { FC, ReactElement, useRef, useState } from 'react';
import { useMask } from '@react-input/mask';

import Form from '../../components/form';
import Input from '../../components/input';
import Button from '../../components/button';
import styles from './index.module.scss';

const ApplicationForm: FC = (): ReactElement => {
  const [errors, setErrors] = useState({
    tel: '',
    name: '',
  });

  const inputName = useRef<HTMLInputElement>(null);
  const inputTel = useMask({
    mask: '+7 (ddd) ddd dd dd',
    replacement: {
      d: /\d/,
    },
    onMask: (e) => {
      if (!e.detail.isValid) {
        if (e.detail.input.length === 0) {
          setErrors({ ...errors, tel: 'Введите номер' });
        } else {
          setErrors({ ...errors, tel: 'Некорректный номер' });
        }
      } else {
        setErrors({ ...errors, tel: '' });
      }
    },
  });

  const handleChange = () => {
    if (inputName.current && !inputName.current.validity.valid) {
      setErrors({ ...errors, name: inputName.current.validationMessage });
    } else {
      setErrors({ ...errors, name: '' });
    }
  };

  return (
    <Form name="applicationForm">
      <fieldset className={styles.fieldset}>
        <Input
          type="text"
          title="Телефон"
          name="tel"
          error={errors.tel}
          placeholder="+7 (921) 123 45 67"
          inputRef={inputTel}
        />
        <Input
          type="text"
          title="Имя"
          name="name"
          error={errors.name}
          value={inputName.current?.value || ''}
          onChange={handleChange}
          required
          placeholder="Введите имя"
          className={styles.input}
          inputRef={inputName}
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
