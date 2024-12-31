
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming';
import GPTSearch from './GPTSearch';
import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { signOut } from 'firebase/auth';
// import { auth } from "../utils/firebase";
// import { toggleGPTSearchView } from '../utils/gptSlice';


const Browse = () => {
  // const navigate = useNavigate() ; 
  // const dispatch = useDispatch() ;
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpcoming();

  // function handleSignOut(){
  //   signOut(auth)
  //   .then(() =>{})
  //   .catch((error) =>{
  //     navigate('/error') ; 
  //   })
  // }
  // function handleGptSearchClick(){
  //   dispatch(toggleGPTSearchView()) ; 
  // }
  return (
    <div>
      <Header />

      {
        showGPTSearch ? (<GPTSearch />) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }
    </div>
  );
}; 

export default Browse ; 
