import Style from '@sass/Task/TaskRight/Calendar.module.scss';
import { useState, forwardRef, useImperativeHandle } from 'react';

export type CalendarType = {
  close: () => void;
};

const Calendar = forwardRef<CalendarType>((props, ref) => {
  const [onClose, setOnClose] = useState(false);

  const calendarCloseHandler = () => {
    setOnClose(true);
  };

  useImperativeHandle(ref, () => ({
    close: calendarCloseHandler,
  }));

  return (
    <div className={`${Style['calender-wrap']} ${onClose && Style.close}`}>
      <div className={Style.title}>
        <span>8월 11일 금요일</span>
      </div>
    </div>
  );
});

export default Calendar;
