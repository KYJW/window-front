import Arrow from '@components/UI/Svg/Arrow';
import Style from '@sass/Task/TaskRight/Calendar.module.scss';
import dayjs from 'dayjs';
import { useState, forwardRef, useImperativeHandle } from 'react';

export type CalendarType = {
  close: () => void;
};

const defaultNow = dayjs();

const Calendar = forwardRef<CalendarType>((props, ref) => {
  const [onClose, setOnClose] = useState(false);
  const formatNow = defaultNow.format('M월 DD일 dd요일');

  const calendarCloseHandler = () => {
    setOnClose(true);
  };

  useImperativeHandle(ref, () => ({
    close: calendarCloseHandler,
  }));

  return (
    <div className={`${Style['calender-wrap']} ${onClose && Style.close}`}>
      <div className={Style.title}>
        <span>{formatNow}</span>
        <button>
          <Arrow />
        </button>
      </div>
    </div>
  );
});

export default Calendar;
