import React from 'react';

interface Props {
    task: string;
}

const Task: React.FC<Props> = ({task}) => {
    return (
        <div className='block'>
            <div className='task'>{task}</div>
            <button type='button'>Delete</button>
        </div>
    );
};

export default Task;
