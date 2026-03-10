import backgroundImg from '../assets/Front Background image.jpg'
import Header from './Header'

const SignIn = () => {
  return (
    <div className='relative h-screen text-white'>
        <img className='absolute w-full h-full object-cover' src={backgroundImg} alt="SignIn_Bg" />
         <Header />

         <div></div>
    </div>
  )
}

export default SignIn;