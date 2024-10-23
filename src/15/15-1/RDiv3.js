import TailButton from '../../UI/TailButton2'
import { AtomM, AtomM2 } from './AtomM';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';

export default function RDiv3() {
  const [x, setX] = useRecoilState(AtomM);
  // const [y, setY] = useRecoilState(AtomM2);
  const y = useRecoilValue(AtomM2);
 
  const handleUp = () => {
    //여기서 setY를 하게 되면 이전에 있던 x의 값을 가지고 변한다 따라서 useEffect(x 바뀌고 난 다음에)
    setX(x + 1);
  };

  const handleDown = () => {
    setX(x - 1);
  };

  // useEffect(()=>{
  //   setY(x * 2);
  // }, [x, setY]);
  // 이를 생략하고 selector사용

  useEffect(()=>{
    if (!localStorage.getItem('x')) setX(0);
    else setX(parseInt(localStorage.getItem('x')));
  }, [setX]);

  useEffect(()=>{
    localStorage.setItem('x', x);
  }, [x]);

  return (
    <div className='w-full/12 h-4/5 flex flex-col 
                    mt-16 p-5 mx-2
                    bg-lime-200 text-black font-bold'>
      RDiv3 : x = {x}, y = {y}
      <div className='mt-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
        <TailButton caption='증가'
                    color='sky'
                    handleClick={handleUp}
                    size='w-full'/>
        <TailButton caption='감소'
                    color='red'
                    handleClick={handleDown}
                    size='w-full'/>
      </div>
    </div>
  )
}
