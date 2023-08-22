import Style from '@sass/Task/Widget/Widget.module.scss';
import TaskCard from '../TaskCard';
import React from 'react';

const Widget = React.memo(() => {
  return (
    <TaskCard className={Style.widget}>
      <div className={Style['widget__weather-icon']} />
      <div className={Style['widget__text']}>
        <p>28˚C</p>
        <p>대체로 맑음</p>
      </div>
    </TaskCard>
  );
});

export default Widget;
