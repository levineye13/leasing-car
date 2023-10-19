import React, { FC, ReactElement, useEffect, useState } from 'react';

import Description from '../../components/description-slider';
import Points from '../../components/points-slider';
import Progress from '../../components/button-progress';
import Back from '../../components/button-back';
import styles from './index.module.scss';

const data = new Array(6).fill({}).map((item, index) => ({
  title: `Авто в лизинг для физических лиц ${index + 1}`,
  text: 'Получите машину за 5 дней',
}));

interface ISliderPage {
  readonly onOpenApplicationPage: () => void;
  readonly className?: string;
}

const SliderPage: FC<ISliderPage> = ({
  onOpenApplicationPage,
  className,
}): ReactElement => {
  const [description, setDescription] = useState({
    index: 0,
    title: data[0].title,
    text: data[0].text,
  });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 99) {
        setProgress((prev) => prev + 1);
      } else {
        setProgress(0);
        setDescription({
          index:
            description.index === data.length - 1 ? 0 : description.index + 1,
          title: data[description.index].title,
          text: data[description.index].text,
        });
      }
    }, 10000 / 100);

    return () => {
      clearInterval(timer);
    };
  }, [description.index, progress]);

  const handleForwardClick = () => {
    setProgress(0);
    setDescription((prev) => ({
      index: prev.index === data.length - 1 ? 0 : prev.index + 1,
      title: data[prev.index].title,
      text: data[prev.index].text,
    }));
  };

  const handleBackClick = () => {
    setProgress(0);
    setDescription((prev) => ({
      index: prev.index === 0 ? data.length - 1 : prev.index - 1,
      title: data[prev.index].title,
      text: data[prev.index].text,
    }));
  };

  return (
    <section className={`${styles.section} ${className || ''}`}>
      <Description
        title={data[description.index].title}
        text={description.text}
        onOpenApplicationPage={onOpenApplicationPage}
        withTitle={description.index === 0}
        className={styles.description}
      />
      <Points
        length={data.length}
        activeIndex={description.index}
        className={styles.points}
      />
      <div className={styles.buttons}>
        <Back onClick={handleBackClick} />
        <Progress
          progress={progress}
          onClick={handleForwardClick}
          className={styles.progress}
        />
      </div>
    </section>
  );
};

export default SliderPage;
