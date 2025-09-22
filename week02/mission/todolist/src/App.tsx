import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

const App = () => {
  return (
    <div className='todo-container'>
      <h1 className='todo-container__header'>TODO LIST</h1>
      <Form />
      <div className='render-container'>
        <Lists isCompleted={false}/>
        <Lists isCompleted={true}/>
      </div>
    </div>
  );
};

export default App;
