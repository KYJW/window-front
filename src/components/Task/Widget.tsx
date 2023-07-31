import classnames from 'classnames/bind';

import Style from '@sass/Task/Widget.module.scss';

const cx = classnames.bind(Style);

const Widget = () => {
  return (
    <div className={cx('widget')}>
      <div className={cx('widget__weather-icon')} />
      <div className={cx('widget__text')}>
        <p>28˚C</p>
        <p>대체로 맑음</p>
      </div>
    </div>
  );
};

export default Widget;
