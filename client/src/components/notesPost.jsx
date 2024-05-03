import logo from '../assets/send-button.png'

const NotesPost = (props) => {

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
      const request = await fetch("https://messaging-board-nine.vercel.app/chat", {
        method : "POST",
        headers : { "Content-Type": "application/json"},
        body : JSON.stringify(body)
      })
      props.setNote("");
      props.forceUpdate();

    } catch (error) {
      console.error(error);
    }
  }
    return (
        <>
        <form onSubmit={addNote} className='rounded-b-xl pt-6 border-t-2 h-20 shadow-md flex px-12 bg-white items-center'>
          <input type="text" value={props.note} onChange={e => props.setNote(e.target.value)} className='border shadow-lg border-gray-300 rounded-md h-9 mb-6 flex-1 px-4' />
          <button className=' ml-4 p-2 mb-6'><img src={logo} alt="send-button" className='w-6 h-auto' /></button>
        </form>
        </>
    )
}

export default NotesPost;