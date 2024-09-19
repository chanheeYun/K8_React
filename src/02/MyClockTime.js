function MyClockTime() {
   return (
      <p className='text-4xl text-blue-200 time font-bold'>
         현재 시각 : {new Date().toLocaleTimeString()}
      </p>
   );
}

export default MyClockTime;