import { useState } from 'react';
import AddTaskForm from './AddTaskForm/AddTaskForm';
import Task from './Task/Task';
import './App.css';

interface Task {
    text: string;
    id: string;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([
        {text: 'Buy milk', id: '1'},
        {text: 'Walk with dog', id: '2'},
        {text: 'Do homework', id: '3'},
    ]);

    const tasksEl = tasks.map((task) => <Task key={task.id} task={task.text} />);

    const addTask = (newTask: Task) => {
        setTasks([...tasks, newTask]);
    };

    return (
        <div>
            <AddTaskForm AddTask={addTask} />
            {tasksEl}
        </div>
    );
}

export default App;