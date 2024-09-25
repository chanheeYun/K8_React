import busan from './img/busan.png';
import bank from './img/bank.png';
import market from './img/market.png';
import './FoodCard.css';
import { useState } from 'react';

export default function FoodCard({div, busiName, operName, address, contact}) {
  const [con, setCon] = useState('');

  let flag = true;

  const contactView = () => {
    if (flag) {
      setCon(`대표번호 : ${contact}`);
      flag = false;
    } else {
      setCon('');
      flag = true;
    }
  };

  const imgDist = {
    "광역지원센터" : busan,
    "기초푸드뱅크" : bank, 
    "기초푸드마켓" : market
  };

  return (
    <div className='w-auto h-30 p-2 flex border'>
      <div className='w-1/4 flex justify-center items-center'>
        <img src={imgDist[div]} alt={div} />
      </div>
      <div className='w-3/4 p-3 
                      flex flex-col justify-center items-start'>
        <div className='w-full text-xl font-bold'>
          {busiName}
        </div>
        <div className='w-full text-base'>
          {operName}
        </div>
        <div className='address w-full text-nowrap font-light mb-1'>
          {address}
        </div>
        <div className='w-full h-5 py-0.5
                        text-xs indent-1 text-white bg-slate-500' onClick={contactView}>
          <span className='inline-flex' onClick={contactView}>{con}</span>
        </div>
      </div>
    </div>
  )
}
