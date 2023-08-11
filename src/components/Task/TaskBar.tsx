import Style from '@sass/Task/TaskBar.module.scss';
import Widget from './Widget/Widget';
import TaskRight from './TaskRight/TaskRight';

const TaskBar = () => {
  return (
    <footer className={Style.taskbar}>
      <Widget />
      <TaskRight />
    </footer>
  );
};
export default TaskBar;
