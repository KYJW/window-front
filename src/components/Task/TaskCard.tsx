import React from 'react';
import Style from '@sass/Task/TaskCard.module.scss';

type TaskCardProps = {
  children: React.ReactNode;
  className: string;
  onClick?: () => void;
};

const TaskCard = React.memo(
  ({ children, className, onClick }: TaskCardProps) => {
    return (
      <div onClick={onClick} className={`${Style.taskCard} ${className}`}>
        {children}
      </div>
    );
  }
);

export default TaskCard;
