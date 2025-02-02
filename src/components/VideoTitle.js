
const VideoTitle = ({title, overview}) => {
  return (
    <div className=" w-screen aspect-video pt-[20%]  px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
        <h1  className=" text-2xl md:text-5xl font-bold text-gray-600">{title}</h1>
        <p className=" hidden md:inline-block  py-6 text-lg w-1/4">{overview}</p>
        <div className="my-5 md:m-0">
        <button className=" mx-2  bg-white text-black p-2 md:p-3  px-4  md:px-10  text-lg md:text-2xl  rounded-lg font-bold hover:bg-opacity-70 ">Play ▶ </button> 
        <button className= " hidden md:inline-block mx-2 bg-gray-500 text-white p-3 px-10 text-2xl bg-opacity-50 rounded-lg"> <span className="font-bold text-2xl">⫯</span> More Info </button>  
        </div>   
    </div>
  )
}

export default VideoTitle ; 
