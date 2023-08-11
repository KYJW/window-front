import { useEffect, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import TaskCard from '../TaskCard';

import Style from '@sass/Task/TaskRight/Timer.module.scss';
import Calendar from './Calendar';

dayjs.locale('ko');
const defaultNow = dayjs();

const defaultAmpm = defaultNow.format('a');
const defaultTime = defaultNow.format('hh:mm');

const Timer = () => {
  const [timerMillisecond, setTimerMillisecond] = useState(1000);
  const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false);
  const [time, setTime] = useState<string>(`${defaultAmpm} ${defaultTime}`);
  const [date, setDate] = useState<string>(defaultNow.format('YYYY-MM-DD'));

  const calendarOpenHandler = () => {
    setIsCalendarOpen((prev) => !prev);
  };
  const calendarCloseHandler = () => {
    setIsCalendarOpen(false);
  };

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
    <TaskCard onClick={calendarOpenHandler} className={Style.wrapper}>
      <p>{time}</p>
      <p>{date}</p>
      {isCalendarOpen && (
        <OutsideClickHandler onOutsideClick={calendarCloseHandler}>
          <Calendar />
        </OutsideClickHandler>
      )}
    </TaskCard>
  );
};

export default Timer;
