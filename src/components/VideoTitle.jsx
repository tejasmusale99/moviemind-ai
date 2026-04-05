import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{overview}</p>
      <div className='flex'>
        <button className="bg-white px-4 py-2 rounded text-black font-semibold cursor-pointer text-sm">Play</button>
        <button className="bg-gray-500 px-4 py-2 rounded text-white font-semibold cursor-pointer text-sm">More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle