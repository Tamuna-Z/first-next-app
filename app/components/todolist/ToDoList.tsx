
import {useState} from 'react'
export default()=>{
    const [task, setTask]=useState('')
    const [tasks, setTasks]=useState(['wash','watch'])

   const onChange=(e)=>{
        setTask(e.target.value)
    }
    const onAdd=()=>{
        setTasks([...tasks,task])
        setTask('')
    }
    return(
        <div>
            <input
            type='text'
            value={task}
            onChange={onChange}
            />
            <button
            onClick={onAdd}
            >add todo</button>
            <ul>{tasks.map(task => <li>{task}</li>)}</ul>
        </div>
    )
}