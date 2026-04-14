const VideoTitle = ({ title, overview }) => {
  return (
<div className="absolute top-0 left-0 w-full h-full px-36 pt-[20%] z-10 bg-gradient-to-r from-black via-black/60 to-transparent">
      <h1 className='text-5xl font-bold text-white'>{title}</h1>
      <p className='w-1/2 text-white mt-4'>{overview}</p>
      <div className='flex gap-4 mt-4'>
        <button className="bg-white px-8 py-2 rounded text-black font-semibold cursor-pointer text-sm border"> Play </button>
        <button className="bg-gray-500 px-4 py-2 rounded text-white font-semibold cursor-pointer text-sm">More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle