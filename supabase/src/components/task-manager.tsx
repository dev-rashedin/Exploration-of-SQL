import { useState } from 'react';


interface Task {
  id: number;
  title: string;
  description: string;
  created_at: string;
  image_url: string;
}

const demoTasks: Task[] = [
  {
    id: 1,
    title: 'First Task',
    description: 'This is the first task',
    created_at: '2023-01-01T00:00:00.000Z',
    image_url: '',
  },
  {
    id: 2,
    title: 'Second Task',
    description: 'This is the second task',
    created_at: '2023-01-02T00:00:00.000Z',
    image_url: '',
  },
  {
    id: 3,
    title: 'Third Task',
    description: 'This is the third task',
    created_at: '2023-01-03T00:00:00.000Z',
    image_url: '',
  },
];

function TaskManager() {
  const [newTask, setNewTask] = useState({ title: '', description: '' });
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newDescription, setNewDescription] = useState('');

  const [taskImage, setTaskImage] = useState<File | null>(null);


  console.log('Task Image:', taskImage);
  console.log('new task', newTask);
  console.log('tasks', tasks);
  console.log('new description', newDescription);



  



  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h2>Task Manager CRUD</h2>

      {/* Form to add a new task */}
      <form style={{ marginBottom: '1rem' }}>
        <input
          type='text'
          placeholder='Task Title'
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, title: e.target.value }))
          }
          style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
        />
        <textarea
          placeholder='Task Description'
          onChange={(e) =>
            setNewTask((prev) => ({ ...prev, description: e.target.value }))
          }
          style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem' }}
        />

        <input type='file' accept='image/*'  />

        <button type='submit' style={{ padding: '0.5rem 1rem' }}>
          Add Task
        </button>
      </form>

      {/* List of Tasks */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {demoTasks.map((task, key) => (
          <li
            key={key}
            style={{
              border: '1px solid #ccc',
              borderRadius: '4px',
              padding: '1rem',
              marginBottom: '0.5rem',
            }}
          >
            <div>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <img src={task.image_url} style={{ height: 70 }} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                <textarea
                  placeholder='Updated description...'
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <button
                  style={{ padding: '0.5rem 1rem', marginRight: '0.5rem' }}
                >
                  Edit
                </button>
                <button
                  style={{ padding: '0.5rem 1rem' }}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskManager;
