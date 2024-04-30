import { useState } from 'react'

function App() {
  return (
    <>
    <div className='flex flex-col h-screen'>
      <div className='mt-8 '>
        <h1 className='text-center text-3xl text-gray-800 font-karla'>MESSAGING BOARD</h1>
      </div>       
      <div className=' border-black flex flex-col mt-6 flex-1 mx-96 rounded-xl min-w-96 grow shadow-xl'>
        <div className=' shadow-lg flex border-black mb-10 py-2 px-12 justify-between rounded'>
          <p className='text-lg text-gray-900 font-karla'>Hello Fynn, Leave a note!</p>
          
        </div>
      </div>
      <div className='mb-24'>
        <p className='text-center font-karla text-lg'>Copyright@2024 Fynn Borja</p>
      </div>
    </div>  
    </>
  )
}

export default App
