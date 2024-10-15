import { useEffect, useRef } from 'react';
import TailButton from '../UI/TailButton2';
import xyData from './getxy.json';
import { useNavigate } from 'react-router-dom';

export default function Fcst() {
  const dtRef = useRef();
  const xyRef = useRef();
  const navigate = useNavigate();

  const getToday = () => {
    const today = new Date();
 
    let dt = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    let dtArr = dt.split('-').map(a => a.length < 2 ? '0' + a : a).join('-');
    return dtArr ;
  };

  let opt = xyData.map(item => <option className='text-base' 
                                key={item["1단계"]} 
                                value={item["1단계"]} 
                                label={item["1단계"]}>
                                item["1단계"]
                              </option>);
  
  const handleOk = (gubun) => {
    if (dtRef.current.value === '') {
      alert('날짜를 선택하세요.')
      dtRef.current.focus();
      return;
    }
    if (xyRef.current.value === '') {
      alert('지역을 선택하세요.')
      xyRef.current.focus();
      return;
    }

    console.log(gubun)
    const dt = dtRef.current.value.replaceAll('-','') ;
    const loc = xyData.filter(item => item["1단계"] === xyRef.current.value)[0] ;
    const x = loc["격자 X"];
    const y = loc["격자 Y"];
    
    navigate(`/Fcstlist?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${xyRef.current.value}`) ;
  };

  useEffect(()=>{
    const today = getToday();
    dtRef.current.value = today;
    dtRef.current.max = today;
  }, []);
  
  return (
    <div className='w-10/12 h-screen flex flex-col justify-center items-center'>
      <div className='weather w-full h-28 text-6xl mb-3'>일기예보 선택</div>
      <div className='w-full grid grid-cols-2 gap-4'>
        <input ref={dtRef} className='form-input w-full h-14 mx-2 mb-7 text-xl indent-1' type='date' id='dt' name='dt' />
        <select ref={xyRef} className='form-select w-full h-14 mx-2 mb-7 text-xl indent-1'>
          {opt}
        </select>
        <TailButton caption='초단기예보' color='green' size='w-full' 
                     handleClick={() => handleOk('getUltraSrtFcst')} />
        <TailButton caption='단기예보' color='green' size='w-full' 
                    handleClick={() => handleOk('getVilageFcst')} />
      </div>
    </div>
  )
}
