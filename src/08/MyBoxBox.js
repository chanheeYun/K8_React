import { useEffect, useState } from 'react'
import MyBoxBoxH1 from './MyBoxBoxH1';
import MyBoxBoxToggle from './MyBoxBoxToggle';

export default function MyBoxBox({color}) {
  const [flag, setFlag] = useState(false);

  const colorObj = {
    'blue' : {
      'bg300' : 'bg-blue-300',
      'bg100' : 'bg-blue-100',
      'bdr700' : 'border-blue-700',
    },
    'orange' : {
      'bg300' : 'bg-orange-300',
      'bg100' : 'bg-orange-100',
      'bdr700' : 'border-orange-700',
    },
    'amber' : {
      'bg300' : 'bg-amber-300',
      'bg100' : 'bg-amber-100',
      'bdr700' : 'border-amber-700',
    },
    'lime' : {
      'bg300' : 'bg-lime-300',
      'bg100' : 'bg-lime-100',
      'bdr600' : 'border-lime-600',
    },
  };

  const obj = colorObj[color];

  const handleClick = () => {
    setFlag(!flag);
  };

  useEffect(()=>{
    console.log(flag)
  }, [flag]);

  return (
    <div className={`w-10/12 h-60 p-5 ${flag ? obj['bg300'] : ''}
                    flex flex-col justify-center items-center`}>
      <MyBoxBoxH1 color={color} />
      <MyBoxBoxToggle color={color} obj={obj} toggleClick={handleClick} />
    </div>
  )
}
