import { useState, useRef, useEffect } from 'react';
import TailButton from '../UI/TailButton';

export default function MyRef() {
  //state 변수
  const [valS, setValS] = useState(0);

  //ref 변수
  const valR = useRef(0);
  
  const x = useRef();
  const y = useRef();
  const z = useRef();


  //컴포넌트 변수
  let valC = 0;

  const handleBClick = () => {
    valC += 1;
    console.log('valC = ', valC)
  };
  const handleRClick = () => {
    let s = valS + 1;
    console.log('valS = ', s)
    setValS(s);
  };

  const handleLClick = () => {
    valR.current = valR.current + 1;
    console.log('valR = ', valR);
  };

  const handleAdd = () => {
    if (x.current.value == '') {
      alert('값을 입력하시오.')
      x.current.focus();
      return;
    }

    if (y.current.value == '') {
      alert('값을 입력하시오.')
      y.current.focus();
      return;
    }

    z.current.value = parseInt(x.current.value) + parseInt(y.current.value);
  };

  const handleFocus = () => {
    z.current.value = '';
  };

  useEffect(() => {
    x.current.focus();
  }, []);

  return (
    <>
      <div className='w-3/5 grid grid-cols-3 gap-2 text-center'>
        <div className='text-2xl text-blue-700'>컴포넌트변수 : {valC}</div>
        <div className='text-2xl text-red-600'>State변수 : {valS}</div>
        <div className='text-2xl text-green-700'>Ref변수 : {valR.current}</div>
        <div>
          <TailButton caption='컴포넌트 변수' color='sky' handleClick={handleBClick} />
        </div>
        <div>
          <TailButton caption='State 변수' color='red' handleClick={handleRClick} />
        </div>
        <div>
          <TailButton caption='Ref 변수' color='green' handleClick={handleLClick} />
        </div>
      </div>
      <div className='grid grid-cols-5 gap-5 p-2 bg-slate-200 my-10 items-center justify-between text-xl'>
        <div>
          <input ref={x} className='h-10 w-36 text-center' type='number' id='txt1' name='txt1' onFocus={handleFocus}/>
        </div>
        <div className='w-full text-2xl font-bold text-center'>
          +
        </div>
        <div>
          <input ref={y} className='h-10 w-36 text-center' type='number' id='txt2' name='txt2' onFocus={handleFocus}/>
        </div>
        <div className='flex justify-center'>
          <TailButton caption='=' color='lime' handleClick={handleAdd} />
        </div>
        <div>
          <input ref={z} className='h-10 w-36 text-center' type='number' id='txt3' name='txt3' readOnly/>
        </div>
      </div>
    </>
  )
}
