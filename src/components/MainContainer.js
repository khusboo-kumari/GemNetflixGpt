import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle' ; 
import MovieBackground from './MovieBackground';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies) ; 
    // Early return 
    if(movies === null) return ; 
    const mainMovie = movies[0] ;    // considering that our mainMovie is the first Movie . 
    console.log(mainMovie) ; 
    const {original_title, overview, id} = mainMovie ; 
    return (
        <div className='pt-[27%] bg-black md:pt-0'>
            <VideoTitle title={original_title} overview ={overview} /> 
            <MovieBackground movie_id={id} />
        </div>
    )
}

export default MainContainer
