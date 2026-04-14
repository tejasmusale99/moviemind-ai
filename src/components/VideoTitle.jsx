const VideoTitle = ({ title, overview }) => {
  return (
    <div className='px-36 pt-36 space-y-4 absolute z-10 '>
      <h1 className='text-5xl font-bold'>{title}</h1>
      <p className='w-1/2'>{overview}</p>
      <div className='flex gap-3'>
        <button className="bg-white px-8 py-2 rounded text-black font-semibold cursor-pointer text-sm border">▶️ Play </button>
        <button className="bg-gray-500 px-4 py-2 rounded text-white font-semibold cursor-pointer text-sm">More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle