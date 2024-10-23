import { useEffect, useState, useRef } from 'react';
import TailButton from '../UI/TailButton2';
import { AtomN, AtomN2 } from './AtomN';
import { useRecoilState } from 'recoil';

export default function Recoil3({x3, y3}) {
  const [x, setX] = useState(x3); 
  const [y, setY] = useState(y3);
  const inRef = useRef();

  const [n, setN] = useRecoilState(AtomN);
  const [m, setM] = useRecoilState(AtomN2);
  //쓸 일이 없다면 살짝 지워도 돼
  const handleUp = () => {
    setX(x + 1);
    setN(n + 1);
  };

  const handleDown = () => {
    setX(x - 1);
    setN(n - 1);
  };

  useEffect(()=>{
    setY(parseInt(inRef.current.value) * x)
  }, [x]);

  useEffect(()=>{
    setM(parseInt(inRef.current.value) * n);
  }, [n]);
   
  return (
    <div className='w-full/12 h-4/5 flex flex-col 
                    mt-16 p-5 mx-2
                    bg-lime-200 text-black font-bold'>
      recoil3 (x = {x}, y = {y}, n = {n}, m = {m})

      <div className='mt-10 grid grid-cols-1 md:grid-cols-3 gap-2'>
        <input type='number' className='form-input text-lg' defaultValue={2} 
                min={2} max={5} ref={inRef} />
        <TailButton caption='증가'
                    color='sky'
                    handleClick={handleUp}
                    size='w-full' />
        <TailButton caption='감소'
                    color='red'
                    handleClick={handleDown}
                    size='w-full' />
      </div>
    </div>
  )
}
