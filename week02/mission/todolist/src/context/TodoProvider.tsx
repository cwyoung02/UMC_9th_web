import { createContext, useContext, useState, type ReactNode } from "react";
import type { Task, TodoContextType } from "../types/todo";

const TodoContext = createContext<TodoContextType|undefined>(undefined);

export const TodoProvider = ({children}: {children: ReactNode}) =>{
  const [todoList, setTodoList] = useState<Task[]>([]);
  const [doneList, setDoneList] = useState<Task[]>([]);
  
  function completeTask(task: Task): void{
    setTodoList(todoList.filter((t) => t.id !== task.id));
    setDoneList([...doneList, task]);
  };
  
  function deleteTask(task: Task): void{
    setDoneList(doneList.filter((t) => t.id !== task.id));
  };

  return(
    <TodoContext.Provider 
      value={{todoList, doneList, setTodoList, setDoneList, completeTask, deleteTask}}
    >
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if(!context){
    throw new Error(
      'useTodo는 반드시 TodoProvider 내부에서 사용되어야 합니다.'
    );
  }
  return context;
}