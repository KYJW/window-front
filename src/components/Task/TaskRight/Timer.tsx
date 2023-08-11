import Style from '@sass/Task/TaskRight/Timer.module.scss';
import TaskCard from '../TaskCard';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

dayjs.locale('ko');
const defaultNow = dayjs();

const defaultAmpm = defaultNow.format('a');
const defaultTime = defaultNow.format('hh:mm');

const Timer = () => {
  const [timerMillisecond, setTimerMillisecond] = useState(1000);
  const [time, setTime] = useState<string>(`${defaultAmpm} ${defaultTime}`);
  const [date, setDate] = useState<string>(defaultNow.format('YYYY-MM-DD'));

  useEffect(() => {
    const timer = setInterval(() => {
      const now = dayjs();

      setDate(now.format('YYYY-MM-DD'));

      const ampm = now.format('a');
      const nowTime = now.format('hh:mm');

      setTime(`${ampm} ${nowTime}`);

      /**
       * 렌더링시 최초 1회만 초단위로 시간 업데이트 후 1분에 1번 시간 업데이트
       */
      if (now.format('ss') === '00' && timerMillisecond === 1000) {
        setTimerMillisecond(60000);
      }
    }, timerMillisecond);

    return () => {
      clearInterval(timer);
    };
  }, [timerMillisecond]);

  return (
    <TaskCard className={Style.wrapper}>
      <p>{time}</p>
      <p>{date}</p>
    </TaskCard>
  );
};

export default Timer;
