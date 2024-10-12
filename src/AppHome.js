import './AppHome.css'
import react from './logo.svg'

export default function AppHome() {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center'>
      <div>
        <img className='absolute App-logo w-72 h-72' src={react} alt='react_logo'/>
      </div>
      <div className='hometitle w-full h-full flex flex-col justify-end items-end pb-20 pr-20'>
        <h1 className='text-9xl'>REACT HOME</h1>
        <h2 className='text-3xl'>윤찬희</h2>
      </div>
    </div>
  )
}
