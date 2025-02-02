import React from 'react'
import { IMG_CDN_URL } from './../utils/constant';


const MovieCard = ({ posterPath }) => {
  return (
    <div className="flex-shrink-0">
    {posterPath && (
      <img
        className="w-36  md:w-48 pr-4  rounded-lg shadow-lg"
        alt="movie poster"
        src={IMG_CDN_URL + posterPath}
      />
    )}
  </div>
  )
}

export default MovieCard
