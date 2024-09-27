import clock from '../img/clock2.png'

function MyClockImg() {
   return(
      <div className='w-full flex justify-center items-center'>
         <img src={clock} className='w-60 h-60 mt-12 mb-9 clock' alt='clock' />
      </div>
   );
}

export default MyClockImg;