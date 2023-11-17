import React from 'react'
import Image from 'next/image'

const VideoSection = () => {
  return (
    <div className=' h-[433px] overflow-hidden relative'>
      <div className=' h-[620px] overflow-hidden relative'>
        <Image src={"/image 13.png"} fill style={{ objectFit: "cover" }} alt='' />
        <div className='relative flex z-20 h-[433px] w-full items-center justify-center text-white text-5xl'>
          <Image src={'/playbutton.png'} height={76} width={76} alt='image' />
        </div>
      </div>
    </div>
  )
}

export default VideoSection
