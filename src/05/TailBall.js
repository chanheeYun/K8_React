import { useState } from 'react';

export default function TailBall({n}) {
  const [num, setNum] = useState(n);

  const ballColor = {
    'b0': 'bg-red-400',
    'b1': 'bg-orange-400',
    'b2': 'bg-yellow-400',
    'b3': 'bg-lime-400',
    'b4': 'bg-blue-400',
  }

  return (
    <div className={`w-16 h-16 m-2
                  flex justify-center items-center
                  rounded-full ${ballColor['b' + Math.floor(num / 10)]}
                  text-white
                  font-bold text-3xl lottoNum
                  `}>
      {num}
    </div>
  )
}
