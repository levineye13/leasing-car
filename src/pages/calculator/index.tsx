import React, { FC, ReactElement, useState, useMemo } from 'react';

import Range from '../../components/range';
import Button from '../../components/button';
import { TRange } from '../../utils/types';
import styles from './index.module.scss';

type TState = {
  [key in TRange]: {
    value: string | number;
    min: string | number;
    max: string | number;
  };
};

interface ICalculator {
  readonly onOpenApplicationPage: () => void;
  readonly className?: string;
}

const Calculator: FC<ICalculator> = ({
  onOpenApplicationPage,
  className,
}): ReactElement => {
  const [input, setInput] = useState<TState>({
    sum: { value: 1000000, min: 1000000, max: 6000000 },
    percent: { value: 10, min: 10, max: 60 },
    month: { value: 1, min: 1, max: 60 },
  });

  const count = useMemo(() => {
    const sum = Number(input.sum.value);
    const percent = Number(input.percent.value);
    const month = Number(input.month.value);

    const initialPayment = Math.floor(percent * sum);

    const monthlyPayment = Math.floor(
      sum - initialPayment * (percent / (1 + percent) - month - 1)
    );

    const contractAmount = Math.floor(initialPayment + month * monthlyPayment);

    return {
      initialPayment,
      monthlyPayment,
      contractAmount,
    };
  }, [input.month.value, input.percent.value, input.sum.value]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    const inputName = name as TRange;

    setInput({
      ...input,
      [name]: { ...input[inputName], value: value },
    });
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;

    const inputName = name as TRange;

    if (value < input[inputName].min) {
      setInput({
        ...input,
        [name]: { ...input[inputName], value: input[inputName].min },
      });
    } else if (value > input[inputName].max) {
      setInput({
        ...input,
        [name]: { ...input[inputName], value: input[inputName].max },
      });
    }
  };

  return (
    <section className={`${styles.section} ${className || ''}`}>
      <p className={styles.title}>Рассчитайте стоимость автомобиля в лизинг</p>
      <div className={styles.ranges}>
        <Range
          title="Стоимость автомобиля"
          name="sum"
          value={input.sum.value}
          onChange={handleInput}
          onBlur={handleBlur}
          min={input.sum.min}
          max={input.sum.max}
          icon="sum"
        />
        <Range
          title="Первоначальный взнос"
          name="percent"
          value={input.percent.value}
          onChange={handleInput}
          onBlur={handleBlur}
          min={input.percent.min}
          max={input.percent.max}
          icon="percent"
          percentSum={input.sum.value}
        />
        <Range
          title="Срок лизинга"
          name="month"
          value={input.month.value}
          onChange={handleInput}
          onBlur={handleBlur}
          min={input.month.min}
          max={input.month.max}
          icon="month"
          disabled
        />
      </div>
      <div className={styles.div}>
        <p className={styles.caption}>Сумма договора лизинга</p>
        <p className={styles.sum}>{count.contractAmount}</p>
      </div>
      <div className={styles.div}>
        <p className={styles.caption}>Ежемесячный платеж от</p>
        <p className={styles.sum}>{count.monthlyPayment}</p>
      </div>
      <Button
        type="button"
        color="orange"
        className={styles.button}
        onClick={onOpenApplicationPage}
      >
        Оставить заявку
      </Button>
    </section>
  );
};

export default Calculator;
