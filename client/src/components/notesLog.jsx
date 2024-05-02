import { useEffect, useRef, useState, useReducer} from "react";

const NotesLog = (props) => {
  const scrollRef = useRef(null);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  //DEV : http://localhost:3200/chat
  //PROD : https://messaging-board-backend.vercel.app/chat

  const getNotes = async e => {
    try {
      const request = await fetch("https://messaging-board-backend.vercel.app/chat");
      const jsonData = await request.json();
      setNotes(jsonData);
      setLoading(false);
    } catch (error) {
      console.error(error);  
    }
  }

  useEffect(() => {
    getNotes();
  }, [props.reducer_value])

  useEffect(() => {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [notes])

  if(loading === true){
    return (
        <>
        <div className='h-full px-8 py-6 overflow-hidden flex flex-col gap-6 bg-gray-100'>
          <div className='flex flex-col gap-6 h-screen overflow-y-scroll overflow-x-hidden'>

            <div className="flex justify-center items-center h-full">
                <div className="w-10 h-10 border-4 border-t-blue-500 border-transparent rounded-full animate-spin"/>
            </div>
          </div>
        </div>
        <div ref={scrollRef} />
        </>
    )
  }
  else{
    return (
        <>
        <div className='h-full px-8 py-6 overflow-hidden flex flex-col gap-6 bg-gray-100'>
          <div className='flex flex-col gap-6 h-screen overflow-y-scroll overflow-x-hidden'>

            {notes.map(note => 
            <div className='justify-between' key={note.id}> 
              <p className='ml-2'>{note.username}</p>
              <div className='bg-blue-700 p-4 text-white inline-block rounded-lg'>
                <p>{note.message}</p>
              </div>
              <p className='ml-2 text-gray-500 text-xs'>{note.date}</p>
            </div>
            )}
            <div ref={scrollRef} className='bg-black'/>
          </div>
        </div>
        </>
    )

  }
}

export default NotesLog;