import { useEffect, useState } from 'react'

export default function MyBox() {
  const [blueFlag, setBlueFlag] = useState(false);
  const [orangeFlag, setOrangeFlag] = useState(false);

  const toggleClick = (color) => {
    if (color == 'blue') setBlueFlag(!blueFlag);
    else setOrangeFlag(!orangeFlag);
  };

  useEffect(()=>{
    console.log(blueFlag, orangeFlag)
  }, [blueFlag, orangeFlag]);

  return (
    <div className='w-10/12 h-screen flex justify-center items-center'>
      <div className={`w-5/12 h-60 p-5 m-5 ${blueFlag ? 'bg-blue-200' : ''}
                      flex flex-col justify-center items-center`}>
        <h1 className='w-2/5 h-20 p-3
                      flex justify-center items-center
                      text-3xl font-bold
                      border-2 rounded-lg'>
          Blue
        </h1>
        <div className='w-7/12 h-16 mt-6 p-1
                        flex justify-center items-center
                        text-2xl font-semibold
                        bg-sky-100
                        border-2 border-blue-400 select-none' 
              onClick={()=>toggleClick('blue')}>
          Blue Toggle
        </div>
      </div>
      <div className={`w-5/12 h-60 p-5 m-5 ${orangeFlag ? 'bg-orange-200' : ''}
                      flex flex-col justify-center items-center`}>
        <h1 className='w-2/5 h-20 p-3
                      flex justify-center items-center
                      text-3xl font-bold
                      border-2 rounded-lg'>
          Orange
        </h1>
        <div className='w-7/12 h-16 mt-6 p-1
                        flex justify-center items-center
                        text-2xl font-semibold
                        bg-orange-100 select-none
                        border-2 border-orange-400' 
              onClick={()=>toggleClick('orange')}>
          Orange Toggle
        </div>
      </div>
    </div>
  )
}
