import { useState } from 'react'
import logo from './assets/send-button.png'

//add a profile picture functionality

function App() {

  const [note, setNote] = useState("");
  const [userName, setUser] = useState("");

  return (
    <>
    <div className='flex flex-col h-screen bg-blue-500 overflow-hidden'>
      <div className='mt-8'>
        <h1 className='text-center text-3xl text-white border-black font-poppins font-semibold'>MESSAGING BOARD</h1>
      </div>       
      <div className=' border-black flex flex-col mt-6 flex-1 mx-96 rounded-xl min-w-96 overflow-hidden grow shadow-2xl'>
        <div className='bg-white shadow-md border-b-2 flex  py-3 px-12 rounded-t-xl items-center'>
          <p className='text-lg text-gray-900 font-karla pr-4'>Username: </p>
          <input type="text" name="" id="" value={userName} onChange={e => setUser(e.target.value)} className='border border-gray-400 shadow-md rounded-lg pl-2 h-7'/>
        </div>
        <div className='h-full px-8 py-6 overflow-hidden flex flex-col gap-6 bg-gray-100'>
          <div className='flex flex-col gap-6 h-screen overflow-scroll'>


            <div className=' justify-between'>
              <p className='ml-4'>Jake_Bajo</p>
              <div className='bg-blue-700 p-4 text-white inline-block rounded-lg'>
                <p>I wanna die lol hahahah</p>
              </div>
              <p className='ml-2 text-gray-500 text-xs'>January 6, 2024 : 2:46 PM</p>
            </div>


          </div>
        </div>
        <form className='rounded-b-xl pt-6 border-t-2 h-20 shadow-md flex px-12 bg-white items-center'>
          <input type="text" value={note} onChange={e => setNote(e.target.value)} className='border shadow-lg border-gray-300 rounded-md h-9 mb-6 flex-1 px-4' />
          <button className=' ml-4 p-2 mb-6'><img src={logo} alt="send-button" className='w-6 h-auto' /></button>
        </form>
      </div>
      <div className='mb-24'>
      </div>
    </div>  
    </>
  )
}

export default App
