import Tasks from "./Tasks"
import { useTodo } from "../context/TodoProvider"
import type { ListsProps } from "../types/todo";

const List = ( {isCompleted}: ListsProps) => {
  const {todoList, doneList, completeTask, deleteTask} = useTodo();

  return (
    <div className="render-container__section">
      <h2 className="render-container__title">{isCompleted ? '완료' : '할 일'}</h2>
      <ul className='render-container__list'>
      <Tasks
        taskList={isCompleted ? doneList : todoList}
        onClick={isCompleted ? deleteTask : completeTask}
        color={isCompleted ? '#dc3545' : '#28a745'}
        btnText={isCompleted ? '삭제' : "완료"}
      />
      </ul>
    </div>
  )
}

export default List
