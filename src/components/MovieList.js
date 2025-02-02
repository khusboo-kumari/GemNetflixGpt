import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
  console.log(" check the movie lists first  then ");
  console.log("here ", movies);
  console.log("Title is ", title) ; 
  return (
    <div className='p-6 '>
      <h1 className=" text-lg md:text-3xl py-2  text-white font-bold ">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide ">
        <div className='flex  '>
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default MovieList
