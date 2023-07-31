import Style from '@sass/Task/TaskCard.module.scss';

type TaskCardProps = {
  children: React.ReactNode;
  className: string;
};

const TaskCard = ({ children, className }: TaskCardProps) => {
  return <div className={`${Style.taskCard} ${className}`}>{children}</div>;
};

export default TaskCard;
