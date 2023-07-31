import Style from '@sass/Task/TaskBar.module.scss';
import classNames from 'classnames/bind';
import Widget from './Widget';

const cx = classNames.bind(Style);

const TaskBar = () => {
  return (
    <footer className={cx('taskbar')}>
      <Widget />
    </footer>
  );
};
export default TaskBar;
