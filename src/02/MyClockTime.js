import { useEffect, useState } from 'react';

function MyClockTime() {
   const [cTime, setCTime] = useState(new Date());

   useEffect(()=>{
      const tm = setInterval(()=>{
         setCTime(new Date());
      }, 1000); //한번 부르면 컴포넌트 없어질 때까지 주구장창 계속돈다 그래서 return 시켜줘야 해

      return() => {clearInterval(tm)}
   }, []);
   return (
      <p className='text-4xl text-blue-950 time font-bold'>
         현재 시각 : {cTime.toLocaleTimeString()}
      </p>
   );
}

export default MyClockTime;