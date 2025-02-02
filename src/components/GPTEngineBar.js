import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import useGptMovieSearch from '../hooks/useGptMovieSearch'

const GPTEngineBar = () => {
    const langKey = useSelector((store)=> store.config.lang) ;
    // const searchText = useRef(null) ; 
    const { searchText, handleGptSearchClick } = useGptMovieSearch();

    
  

  return (
    <div className='  pt-[10%] flex justify-center'>
       <form className=' w-full md:w-1/2  bg-black grid grid-cols-12 rounded-lg ' onSubmit={(e) => e.preventDefault()}>
           <input ref={searchText} className='p-4 m-4 col-span-9' type='text' placeholder={lang[langKey].gptSearchPlaceholder}/>
           <button className=' col-span-3 m-4 py-2 px-4 text-white  rounded-lg  bg-red-800' onClick={handleGptSearchClick}>{lang[langKey].search}</button>
       </form>
    </div>
  )
}

export default GPTEngineBar ;
