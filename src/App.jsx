import TaskList from './components/TaskList';
import TaskForm from "./components/TaskForm";
import { useState , useEffect } from 'react';

function App(){
 return (
  <main className='bg-zinc-900 h-screen'>
    <div className='cointainer mx-auto p-10'>
    <TaskForm/>

    <TaskList/>
    </div>
  </main>
  )
};

export default App;