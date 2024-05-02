
const NotesConfig = (props) => {
    return (
        <>
        <div className='bg-white shadow-md border-b-2 flex  py-3 px-12 rounded-t-xl items-center'>
          <p className='text-lg text-gray-900 font-karla pr-4'>Username: </p>
          <input type="text" name="" id="" value={props.username} onChange={e => props.setUser(e.target.value)} className='border border-gray-400 shadow-md rounded-lg pl-2 h-7'/>
        </div>
        </>
    )
}

export default NotesConfig;