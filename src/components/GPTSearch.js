import GPTEngineBar from './GPTEngineBar'
import GPTMovieSuggest from './GPTMovieSuggest'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div className='relative'>
       <div className='fixed  inset-0 -z-10'>
       <img  className='w-full h-full  object-cover  ' src={BG_URL}  alt='background '/>

       </div>
       <div className='pt-[25%] md:p-0'>
       <GPTEngineBar/> 
       <GPTMovieSuggest/> 
       </div>
    </div>
  )
}

export default GPTSearch
