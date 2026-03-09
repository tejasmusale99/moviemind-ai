import background from '../assets/Front Background image.jpg'

const Hero = () => {
  return (
    <div className='relative h-screen text-white'>
      <img src={background} alt="background" className='absolute w-full h-full object-cover'/>

      <div className='absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-4'>
        <h1 className='text-5xl font-bold mb-4'>Unlimited movies, shows, and more</h1>
        <p className='text-xl mb-2'>
          Starts at ₹149. Cancel anytime.
        </p>
        <p className='mb-4'>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
      </div>
    </div>
  )
}

export default Hero