import React, { useState, ChangeEvent, MouseEvent } from "react";

interface Props {
    text: string;
    id: string;
    AddTask: string;
}

const AddTaskForm: React.FC<Props> = ({AddTask}) => {
    const [currentTask, setCurrentTask] = useState("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentTask(event.target.value);
    };

    const handleAddTask = (event: MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const newTask = {
            id: Math.floor(Math.random() * 100000).toString(),
            text: currentTask,
        };
        AddTask(newTask);
    };

    return (
        <div className='form-block'>
            <form>
                <input className='input' onChange={handleInputChange} />
                <button type='submit' onClick={handleAddTask}>Add</button>
            </form>
        </div>
    );
};

export default AddTaskForm;