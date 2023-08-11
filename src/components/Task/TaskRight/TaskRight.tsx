import Style from '@sass/Task/TaskRight/TaskRight.module.scss';
import Timer from './Timer';

const TaskRight = () => {
  return (
    <div className={Style['wrapper']}>
      <Timer />
    </div>
  );
};

export default TaskRight;
