import { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import code from './getcode.json';

export default function FcstList() {
  const [sParams] = useSearchParams();
  const [wData, setWData] = useState();
  const [selected, setSelected] = useState('항목을 선택하세요');
  const [opt, setOpt] = useState();
  const [tags, setTags] = useState();
  const navigate = useNavigate();

  const gubun = useMemo(() => sParams.get('gubun'), [sParams]);
  const dt = useMemo(() => sParams.get('dt'), [sParams]);
  const time = useMemo(() => sParams.get('time'), [sParams]);
  const x = useMemo(() => sParams.get('x'), [sParams]);
  const y = useMemo(() => sParams.get('y'), [sParams]);
  const area = useMemo(() => sParams.get('area'), [sParams]);

  const getWData = useCallback(async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let dist = gubun === '초단기예보' ? 'getUltraSrtFcst' : 'getVilageFcst'
    let url = `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/${dist}`;
    url = `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=1000&dataType=JSON&base_date=${dt}`;
    url = `${url}&base_time=${time}&nx=${x}&ny=${y}`;

    console.log(url)
    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => setWData(data.response.body.items.item))
    //   .catch(err => console.log(err))
    // ;
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      setWData(data.response.body.items.item)
    } catch (err) {
      console.log(err)
      // alert('해당 날짜의 예보 정보를 찾을 수 없습니다.')
      // navigate('/Fcst');
    }
  }, [gubun, dt, time, x, y, navigate]);

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };

  const codeUnit = useMemo(() => {
    return {'강수형태': ['없음', '비🌧', '비/눈⛈', '눈🌨', '소나기🌦'],
    '하늘상태': [0, '맑음☀', 2, '구름많음🌥', '흐림☁']}
  }, []);


  const mksOpt = useCallback(() => {
    let tm = code.filter(item => item['예보구분'] === gubun)
      .map(item => <option key={item['항목값']} value={item['항목값'] + item['항목명']}
        label={item['항목명'] + '(' + item['항목값'] + ')'}>
        {item['항목명']}
      </option>);
    setOpt(tm);
  }, [gubun]);

  const mksTags = useCallback(() => {
    if (!wData) return;
    let tm = wData.filter(item => item.category === selected.slice(0, 3));
    // console.log(tm)
    let unit = code.filter(item => item['예보구분'] === gubun && item['항목명'] === selected.slice(3))[0];
    // console.log(unit)
    if (unit['항목값'] === 'PCP' || unit['항목값'] === 'RN1' || unit['항목값'] === 'SNO') unit = '';
    else if (unit['항목값'] === 'LGT') unit = unit['단위'].slice(0, 2);
    else unit = unit['단위'];
    let tmTags = tm.map(item =>
      <tr className='text-center odd:bg-white even:bg-gray-50 border-b'>
        <td className='py-0.5'>{selected.slice(3)}</td>
        <td className='py-0.5'>{item.fcstTime}</td>
        <td className='py-0.5'>{selected.slice(3) === '강수형태' ? codeUnit[selected.slice(3)][item.fcstValue] :
          selected.slice(3) === '하늘상태' ? codeUnit[selected.slice(3)][item.fcstValue] :
            item.fcstValue.search('없음') > 0 ? item.fcstValue : item.fcstValue + unit}</td>
      </tr>);

    setTags(tmTags);
  }, [codeUnit, gubun, selected, wData]);

  useEffect(() => {
    getWData();
  }, [getWData]);

  useEffect(() => {
    if (!wData) return;
    mksOpt();
  }, [wData, mksOpt]);

  useEffect(() => {
    if (selected === '항목을 선택하세요') return;
    console.log(selected)
    mksTags();
  }, [selected, mksTags]);

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <div className='w-3/4 my-5 flex justify-around items-center'>
        <div className='text-2xl'>{`${area}(${dt.slice(0, 4)}-${dt.slice(4, 6)}-${dt.slice(6)})`}</div>
        <select className='form-select text-xl' onChange={handleSelected}>
          <option className='text-slate-300' value='항목을 선택하세요' label='항목을 선택하세요'>항목을 선택하세요</option>
          {opt}
        </select>
      </div>
      <div className='w-7/12 relative overflow-x-auto shadow-md sm:rounded-lg'>
        <table className='w-full text-lg border-2 text-gray-500'>
          <thead>
            <tr className='w-full text-center bg-slate-200'>
              <th className='w-1/4 py-1.5'>예보항목</th>
              <th className='w-1/4 py-1.5'>예보시각</th>
              <th className='w-1/2 py-1.5'>항목값</th>
            </tr>
          </thead>
          <tbody>
            {tags}
          </tbody>
        </table>
      </div>
    </div>
  )
}
