import { useState } from "react";
import { useTodo } from "../context/TodoProvider";

const Form = () => {
  const { todoList, setTodoList } = useTodo();
  const [input, setInput] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void{
    e.preventDefault();
    addTodo(input);
    setInput('');
  }

  function addTodo(textInput: string): void{
    const newText = textInput.trim();

    if (newText){
      setTodoList([...todoList, {id: Date.now(), text: newText} ]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-container__form'>
      <input 
        type="text"
        className='todo-container__input'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='할 일 입력'
        required
      />
      <button type='submit' className='todo-container__button'>할 일 추가</button>
    </form>
  )
}

export default Form
