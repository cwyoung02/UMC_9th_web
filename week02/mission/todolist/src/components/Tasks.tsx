import type { TasksProps, Task } from "../types/todo"

const ListBtn = ({ taskList, onClick, color, btnText }: TasksProps) => {
  return (
    <>
      {taskList.map((task: Task) => (
        <li className='render-container__item' key={task.id}>
          {task.text}
          <button
            className='render-container__item-button'
            style={{backgroundColor: color}}
            onClick={() => onClick(task)}
          >{btnText}</button>
        </li>
      ))}
    </>
  )
}

export default ListBtn
