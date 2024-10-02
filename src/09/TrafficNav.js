import TailButton from '../UI/TailButton'
import { useEffect, useState } from 'react';

export default function TrafficNav({div}) {
  const [sel, setSel] = useState();
  const [sel2, setSel2] = useState();

  const divBig = ['차대사람', '차대차', '차량단독', '철길건널목'];
  
  const divMid = {
    '차대사람' : ['횡단중', '차도통행중', '길가장자리구역통행중', '보도통행중', '기타'],
    '차대차' : ['정면충돌', '측면충돌', '후진중충돌', '추돌', '기타'],
    '차량단독' : ['전도', '전복', '공작물충돌', '주/정차차량 충돌', '도로이탈', '기타'],
    '철길건널목' : ['철길건널목'],
  };

  const obj = {
    '대분류' : divBig,
    '중분류' : divMid,
  };

  const bigButtonClick = (item) => {
    setSel(item);
  };

  const mkBts = () => {
    let btsMid = obj[div[sel]].map(item => <TailButton 
                                            key={item} 
                                            caption={item}
                                            color={item === sel2 ? 'red' : 'green'} 
                                            handleClick={()=>midButtonClick(item)} />);
    return btsMid;
  };

  useEffect(()=>{
    if (!sel) return;
    let btsMid = mkBts();
  }, [sel]);

  
  const midButtonClick = (item) => {
    setSel2(item);
  };

  useEffect(()=>{
    console.log(sel2)
  }, [sel2]);

  let btsBig = obj[div].map(item => <TailButton 
                              key={item} 
                              caption={item}
                              color= {item === sel ? 'red' : 'green'}
                              handleClick={()=>bigButtonClick(item)} />)

  return (
    <div className='w-full flex justify-between items-center'>
      <div className='m-5 text-4xl font-bold'>
        {`교통사고 ${div}`}
      </div>
      <div className='m-5'>
        {div === '대분류' ? btsBig : btsMid}  
      </div>
    </div>
  )
}
