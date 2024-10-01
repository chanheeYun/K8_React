import { useEffect, useState } from 'react'
import MyBoxBoxH1 from './MyBoxBoxH1';
import MyBoxBoxToggle from './MyBoxBoxToggle';

export default function MyBoxBox({color}) {
  const [flag, setFlag] = useState(false);

  const colorObj = {
    'blue' : {
      'bg300' : 'bg-blue-300',
      'bg50' : 'bg-blue-50',
      'bdr700' : 'border-blue-700',
    },
    'orange' : {
      'bg300' : 'bg-orange-300',
      'bg50' : 'bg-orange-50',
      'bdr700' : 'border-orange-700',
    },
    'lime' : {
      'bg300' : 'bg-lime-300',
      'bg50' : 'bg-lime-50',
      'bdr700' : 'border-lime-700',
    },
  };

  const handleClick = () => {
    setFlag(!flag);
  };

  useEffect(()=>{
    console.log(flag)
  }, [flag]);

  return (
    <div className={`w-5/12 h-60 p-5 m-5 ${flag ? `bg-${color}-200` : ''}
                    flex flex-col justify-center items-center`}>
      <MyBoxBoxH1 color={color}/>
      <MyBoxBoxToggle color={color} toggleClick={handleClick} />
    </div>
  )
}
