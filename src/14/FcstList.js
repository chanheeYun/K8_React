import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function FcstList() {
   const [sParams] = useSearchParams() ;
  const [wData, setWData] = useState();
  const [selected, setSelected] = useState('항목을 선택하세요');
  const [opt, setOpt] = useState();
  const [tags, setTags] = useState();

  const gubun = sParams.get('gubun') ;
  const dt = sParams.get('dt') ;
  const x = sParams.get('x') ;
  const y = sParams.get('y') ;
  const area = sParams.get('area') ;

  const getWData = () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${gubun}`;
    url = `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}`;
    url = `${url}&base_time=${gubun === 'getUltraSrtFcst' ? '0630' : '0500'}&nx=${x}&ny=${y}`;

    console.log(url)
    fetch(url)
      .then(resp => resp.json())
      .then(data => setWData(data.response.body.items.item))
      .catch(err => console.log(err))
      ;
    // setWData(data)
    //setWData(data.response.body.items.item)
  };

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const ultra_obj = {
    'PTY' : ['강수형태', ['없음', '비', '비/눈', '눈', '소나기']],
    'SKY' : ['하늘상태', [0, '맑음', 2, '구름많음', '흐림']],
    'T1H' : ['기온', '℃'],
    'RN1' : ['1시간 강수량', 'mm'],
    'UUU' : ['동서바람성분', 'm/s'],
    'VVV' : ['남북바람성분', 'm/s'],
    'REH' : ['습도', '%'],
    'LGT' : ['낙뢰', 'kA'],
    'VEC' : ['풍향', 'deg'],
    'WSD' : ['풍속', 'm/s'],
  };

  const short_obj = {
    'PTY' : ['강수형태', ['없음', '비🌧', '비/눈⛈', '눈🌨', '소나기🌦']],
    'SKY' : ['하늘상태', [0, '맑음☀', 2, '구름많음🌥', '흐림☁']],
    'POP' : ['강수확률', '%'],
    'PCP' : ['1시간 강수량', 'mm'],
    'REH' : ['습도', '%'],
    'SNO' : ['1시간 신적설', 'cm'],
    'TMP' : ['1시간 기온', '℃'],
    'TMN' : ['일 최저기온', '℃'],
    'TMX' : ['일 최고기온', '℃'],
    'UUU' : ['풍속(동서)', 'm/s'],
    'VVV' : ['풍속(남북)', 'm/s'],
    'WAV' : ['파고', 'M'],
    'VEC' : ['풍향', 'deg'],
    'WSD' : ['풍속', 'm/s'],
  };

  const tmObj = (gubun === 'getUltraSrtFcst' ? ultra_obj : short_obj);

  const mksOpt = () => {
    let tm = Object.entries(tmObj).map(([k, item]) =>
      <option key={k} value={k} label={item[0] +'(' + k + ')'}>{item[0]}</option>
    );
    setOpt(tm);
  };

  const mksTags = () => {
    if (!wData) return;
    let tm = wData.filter(item => item.category === selected);
    console.log(tm)
    let tmTags = tm.map(item =>
      <tr className='text-center odd:bg-white even:bg-gray-50 border-b'>
        <td className='py-0.5'>{tmObj[selected][0]}</td>
        <td className='py-0.5'>{item.fcstTime}</td>
        <td className='py-0.5'>{selected === 'PTY' ? tmObj['PTY'][1][item.fcstValue] : selected === 'SKY' ? tmObj['SKY'][1][item.fcstValue] : item.fcstValue + tmObj[selected][1]}</td>
      </tr>);
    setTags(tmTags);
  };

  useEffect(() => {
    getWData();
  }, []);

  useEffect(() => {
    if (!wData) return;
    mksOpt();
  }, [wData]);

  useEffect(() => {
    if (selected === '항목을 선택하세요') return;
    mksTags();
  }, [selected]);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-3/4 my-5 flex justify-around items-center'>
        <div className='text-2xl'>{`${area}(${dt})`}</div>
        <select className='form-select text-xl' onChange={handleSelected}>
          <option className='text-slate-300' value='항목을 선택하세요' label='항목을 선택하세요'>항목을 선택하세요</option>
          {opt}
        </select>
      </div>
      <div className='w-7/12 relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-lg border-2 text-gray-500'>
        <tr className='w-full text-center bg-slate-200'>
          <th className='w-1/4 py-1.5'>예보항목</th>
          <th className='w-1/4 py-1.5'>예보시각</th>
          <th className='w-1/2 py-1.5'>항목값</th>
        </tr>
        {tags}
      </table>
      </div>
    </div>
  )
}
