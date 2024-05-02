import { useState, useReducer } from 'react'
import logo from './assets/send-button.png'
import NotesLog from './components/notesLog';
import NotesConfig from './components/notesConfig';
import NotesPost from './components/notesPost';

//add a profile picture functionality

function App() {
  const [note, setNote] = useState("");
  const [userName, setUser] = useState("anonymous");
  const [reducerValue, forceUpdate] = useReducer(x => x + 1, 0);

  return (
    <>
    <div className='flex flex-col h-screen bg-blue-500 overflow-hidden'>
      <div className='mt-8'>
        <h1 className='text-center text-3xl text-white border-black font-poppins font-semibold'>MESSAGING BOARD</h1>
      </div>       
      <div className='border-black flex flex-col mt-6 flex-1 m-auto rounded-xl overflow-y-hidden grow shadow-2xl max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl'>

        <NotesConfig username = {userName} setUser = {setUser}/>
        <NotesLog reducer_value = {reducerValue}/>
        <NotesPost note = {note} setNote = {setNote} forceUpdate = {forceUpdate} username = {userName}/>

      </div>
      <div className='mb-24 pt-2 text-center text-white font-karla'>
          <p>CopyRight © 2024 | Fynn07</p>
      </div>
    </div>  
    </>
  )
}

export default App
