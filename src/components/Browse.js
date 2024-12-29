
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'; 
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRated from '../hooks/useTopRated';
import useUpcoming from '../hooks/useUpcoming' ; 

const Browse = () => {
  useNowPlayingMovies() ; 
  usePopularMovies() ; 
  useTopRated() ; 
  useUpcoming() ; 
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer /> 
      {/* 
            MainContainer 
              - VideoBackground 
              - VideoTitle 
            SecondaryContainer 
              - MovieList * n 
              - cards * n  
      
       */}
    </div>
  )
}

export default Browse
