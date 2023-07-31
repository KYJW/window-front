import Style from '@sass/Task/TaskBar.module.scss';
import Widget from './Widget/Widget';

const TaskBar = () => {
  return (
    <footer className={Style.taskbar}>
      <Widget />
    </footer>
  );
};
export default TaskBar;
