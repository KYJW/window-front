import Style from '@sass/Task/TaskRight/Timer.module.scss';
import TaskCard from '../TaskCard';
import { useState } from 'react';

const Timer = () => {
  const [time, setTime] = useState();

  return (
    <TaskCard className={Style.wrapper}>
      <p>오후 10:24</p>
      <p>2023-08-11</p>
    </TaskCard>
  );
};

export default Timer;
