import { useEffect, useRef, useState } from 'react';
import TailButton from '../UI/TailButton2';
import xyData from './getxy.json';
import { useNavigate } from 'react-router-dom';

export default function Fcst() {
  const dtRef = useRef();
  const timeRef = useRef();
  const xyRef = useRef();
  const navigate = useNavigate();
  const [seldGubun, setSeldGubun] = useState('초단기예보');
  const [timeSel, setTimeSel] = useState();

  const gubunChange = (e) => {
    setSeldGubun(e.target.value);
  };

  const getFormattedDate = (date) => {
    let dt = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    let dtArr = dt.split('-').map(a => a.length < 2 ? '0' + a : a).join('-');
    return dtArr;
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
    if (timeRef.current.value === '') {
      alert('시간을 선택하세요.')
      dtRef.current.focus();
      return;
    }
    if (xyRef.current.value === '지역을 선택하세요.') {
      alert('지역을 선택하세요.')
      xyRef.current.focus();
      return;
    }

    console.log(gubun)
    const dt = dtRef.current.value.replaceAll('-', '');
    const loc = xyData.filter(item => item["1단계"] === xyRef.current.value)[0];
    const time = timeRef.current.value.replaceAll(':', '');
    const x = loc["격자 X"];
    const y = loc["격자 Y"];
    console.log(parseInt(time.slice(-2)));

    if (parseInt(time.slice(-2)) % 30 !== 0) {
      alert('시간은 30분 단위로 입력 가능합니다.')
      timeRef.current.focus();
      return;
    }

    navigate(`/Fcstlist?gubun=${gubun}&dt=${dt}&x=${x}&y=${y}&area=${xyRef.current.value}&time=${time}`);
  };

  useEffect(() => {
    const today = new Date();
    const minDate = new Date(today);
    minDate.setDate(today.getDate() - 2);

    const todayStr = getFormattedDate(today);
    const minDateStr = getFormattedDate(minDate);

    dtRef.current.min = minDateStr;
    dtRef.current.max = todayStr;
  }, []);

  useEffect(() => {
    if (seldGubun === '초단기예보') {
      let tm = <input ref={timeRef} className='form-input w-full h-14 mx-2 text-xl indent-1'
        type='time' min='06:30' step='1800' max='23:30' name='time' />;
      setTimeSel(tm);
    } else {
      let tm = <input ref={timeRef} className='form-input w-full h-14 mx-2 text-xl indent-1'
        type='time' min='05:00' max='05:00' name='time' />;
      setTimeSel(tm);
    }
  }, [seldGubun]);

  return (
    <div className='w-10/12 h-screen flex flex-col justify-center items-center'>
      <div className='weather w-full h-28 text-6xl mb-3'>일기예보 선택</div>
      <div className='w-full grid grid-cols-2 gap-4 place-items-center mb-7'>
        <select className='form-select w-full h-14 mx-2 text-xl indent-1' onChange={gubunChange}>
          <option className='text-base' value='초단기예보' label='초단기예보'>
            초단기예보
          </option>
          <option className='text-base' value='단기예보' label='단기예보'>
            단기예보
          </option>
        </select>
        <select ref={xyRef} className='form-select w-full h-14 mx-2 text-xl indent-1'>
          <option className='text-base' value='defalut' label='지역을 선택하세요.'>
            지역을 선택하세요.
          </option>
          {opt}
        </select>
        <input ref={dtRef} className='form-input w-full h-14 mx-2 text-xl indent-1' type='date' id='dt' name='dt' />
        {timeSel}
      </div>
      <TailButton caption='조회' color='green' size='w-full'
        handleClick={() => handleOk(seldGubun)} />
    </div>
  )
}
