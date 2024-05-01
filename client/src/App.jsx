import { useState } from 'react'
import logo from './assets/send-button.png'

function App() {

  const {note, setNote} = useState("");

  return (
    <>
    <div className='flex flex-col h-screen bg-blue-500'>
      <div className='mt-8'>
        <h1 className='text-center text-3xl text-white border-black font-poppins font-semibold'>MESSAGING BOARD</h1>
      </div>       
      <div className=' border-black flex flex-col mt-6 flex-1 mx-96 rounded-xl min-w-96 grow shadow-2xl'>
        <div className='bg-white shadow-md border-b-2 flex  py-2 px-12 justify-between rounded-t-xl'>
          <p className='text-lg text-gray-900 font-karla'>Leave A Note!</p>
        </div>
        <div className=' h-full px-8 py-6 overflow-y-scroll flex flex-col gap-6 bg-gray-100'>

          <div className=' justify-between'>
            <p className='ml-4'>Jake_Bajo</p>
            <div className='bg-blue-700 p-4 text-white inline-block rounded-lg'>
              <p>I wanna die lol hahahah</p>
            </div>
          </div>
          <div className=' justify-between'>
            <p className='ml-4'>Jake_Bajo</p>
            <div className='bg-blue-700 p-4 text-white inline-block rounded-lg'>
              <p>I wanna die lol hahahah</p>
            </div>
          </div>
          <div className=' justify-between'>
            <p className='ml-4'>Jake_Bajo</p>
            <div className='bg-blue-700 p-4 text-white inline-block rounded-lg'>
              <p>I wanna die lol hahahah</p>
            </div>
          </div>
          <div className=' justify-between'>
            <p className='ml-4'>Jake_Bajo</p>
            <div className='bg-blue-700 p-4 text-white inline-block rounded-lg'>
              <p>I wanna die lol hahahah</p>
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
