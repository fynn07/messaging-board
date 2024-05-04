import { useState } from 'react';
import logo from '../assets/send-button.png'

const ErrorModal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;
  
    return (
      <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50'>
        <div className='bg-white rounded-lg shadow-lg p-6 w-11/12 max-w-md'>
          <p className='text-gray-800 mb-4'>{message}</p>
          <button onClick={onClose} className='bg-red-600 hover:bg-red-700 text-white rounded-md px-4 py-2'>
            Close
          </button>
        </div>
      </div>
    );
};

const NotesPost = (props) => {
  const [error, setError] = useState(null); 
  const [isModalOpen, setIsModalOpen] = useState(false);

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
  
  //DEV : http://localhost:3200/chat
  //PROD : https://messaging-board-backend.vercel.app/chat

  const addNote = async e => {
    e.preventDefault();
    try {
      const username = props.username;
      const message = props.note;
      const date = formatDate();
      const body = {username, message, date};
      const request = await fetch("https://messaging-board-backend.vercel.app/chat", {
        method : "POST",
        headers : { "Content-Type": "application/json"},
        body : JSON.stringify(body)
      })
      if (request.status === 429) {
        // Handle error 429 (Too Many Requests)
        setError('You have exceeded the rate limit. Please try again later.');
        setIsModalOpen(true); // Show the modal
      } else {
        setError(null);
        props.setNote("");
        props.forceUpdate();
      }

    } catch (error) {
      console.error(error);
    }
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
    return (
        <>
        <form onSubmit={addNote} className='rounded-b-xl pt-6 border-t-2 h-20 shadow-md flex px-12 bg-white items-center'>
          <input type="text" value={props.note} onChange={e => props.setNote(e.target.value)} className='border shadow-lg border-gray-300 rounded-md h-9 mb-6 flex-1 px-4' />
          <button className=' ml-4 p-2 mb-6'><img src={logo} alt="send-button" className='w-6 h-auto' /></button>
        </form>
        <ErrorModal isOpen={isModalOpen} message={error} onClose={handleCloseModal} />
        </>
    )
}

export default NotesPost;