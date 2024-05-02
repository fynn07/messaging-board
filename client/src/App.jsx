import { useState, useEffect, useReducer, useRef } from 'react'
import logo from './assets/send-button.png'
import NotesLog from './components/notesLog';
import NotesConfig from './components/notesConfig';

//add a profile picture functionality

function App() {
  const [note, setNote] = useState("");
  const [userName, setUser] = useState("anonymous");
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  function formatDate(){
    const date = new Date();
    const formattedDate = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }).format(date);
  
    return formattedDate;
  }

  const addNote = async e => {
    e.preventDefault();
    try {
      const username = userName;
      const message = note;
      const date = formatDate();
      const body = {username, message, date};
      const request = await fetch("http://localhost:3200/chat", {
        method : "POST",
        headers : { "Content-Type": "application/json"},
        body : JSON.stringify(body)
      })
      setNote("");
      forceUpdate();

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className='flex flex-col h-screen bg-blue-500 overflow-hidden'>
      <div className='mt-8'>
        <h1 className='text-center text-3xl text-white border-black font-poppins font-semibold'>MESSAGING BOARD</h1>
      </div>       
      <div className=' border-black flex flex-col mt-6 flex-1 mx-96 rounded-xl min-w-96 overflow-hidden grow shadow-2xl'>

        <NotesConfig username = {userName} setUser= {setUser}/>
        <NotesLog reducer_value = {reducerValue}/>

        <form onSubmit={addNote} className='rounded-b-xl pt-6 border-t-2 h-20 shadow-md flex px-12 bg-white items-center'>
          <input type="text" value={note} onChange={e => setNote(e.target.value)} className='border shadow-lg border-gray-300 rounded-md h-9 mb-6 flex-1 px-4' />
          <button className=' ml-4 p-2 mb-6'><img src={logo} alt="send-button" className='w-6 h-auto' /></button>
        </form>
      </div>
      <div className='mb-24 pt-2 text-center text-white font-karla'>
          <p>CopyRight © 2024 | Fynn07</p>
      </div>
    </div>  
    </>
  )
}

export default App
