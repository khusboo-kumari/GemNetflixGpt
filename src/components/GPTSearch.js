import GPTEngineBar from './GPTEngineBar'
import GPTMovieSuggest from './GPTMovieSuggest'
import { BG_URL } from '../utils/constant'

const GPTSearch = () => {
  return (
    <div>
       <div className='absolute -z-10'>
       <img src={BG_URL}  alt='background '/>

       </div>
      <GPTEngineBar/> 
      <GPTMovieSuggest/> 
    </div>
  )
}

export default GPTSearch
