import { useState } from 'react'
import logo from './assets/send-button.png'

function App() {


  return (
    <>
    <div className='flex flex-col h-screen'>
      <div className='mt-8'>
        <h1 className='text-center text-3xl text-gray-800 font-karla'>MESSAGING BOARD</h1>
      </div>       
      <div className=' border-black flex flex-col mt-6 flex-1 mx-96 rounded-xl min-w-96 grow drop-shadow-md shadow-2xl'>
        <div className='bg-white flex border-black  py-2 px-12 justify-between rounded-t'>
          <p className='text-lg text-gray-900 font-karla'>Hello Fynn, Leave a note!</p>
        </div>
        <div className=' h-full '>
          
        </div>
        <form className='rounded h-20  flex px-12 items-center'>
          <input type="text" className='border border-gray-300 rounded-md h-9 mb-6 flex-1 px-4' />
          <button className=' ml-6 p-2 mb-6'><img src={logo} alt="send-button" /></button>
        </form>
      </div>
      <div className='mb-24'>
      </div>
    </div>  
    </>
  )
}

export default App
