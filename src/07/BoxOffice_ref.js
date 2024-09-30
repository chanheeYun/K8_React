import { useState, useEffect } from 'react'
import TailButton from '../UI/TailButton'

export default function BoxOffice() {
  const [cnt, setCnt] = useState(0);

  const handleUp = () => {
    setCnt(cnt + 1);
  };

  const handleDown = () => {
    setCnt(cnt - 1);
  };

  //맨처음 한번 실행
  useEffect(()=>{
    console.log('useEffect [처음]');
    setCnt(100);
  }, []);

  //state 변수 cnt가 변경이 될 때
  useEffect(()=>{
    console.log('useEffect [cnt 변경]', cnt);
  }, [cnt]);

  //변경이 일어날 때 마다 실행
  useEffect(()=>{
    console.log('useEffect 변경 시');
  });

  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='flex justify-center items-center text-3xl '>
        {cnt}
      </div>
      <div>
        <TailButton caption='증가' color='sky' handleClick={handleUp} />
        <TailButton caption='감소' color='red' handleClick={handleDown} />
      </div>
    </div>
  )
}
