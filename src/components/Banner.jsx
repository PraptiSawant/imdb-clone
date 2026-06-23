import React from 'react'

function Banner() {
  return (
    <div style={{ backgroundImage: "url('https://images.thedirect.com/media/article_full/avengers-2026-m.jpg')" }} className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end">
        <div className="text-white text-xl text-center w-full bg-gray-900">
            Avengers End Game
        </div>
    </div>
  )
}

export default Banner