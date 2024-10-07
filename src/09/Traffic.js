import { useEffect, useState } from 'react';
import TrafficNav from './TrafficNav';
// import divBox from './divBox';

export default function Traffic() {
  const [traData, setTraData] = useState();
  
  //대분류 데이터
  const [c1, setC1] = useState();
  const [selC1, setSelC1] = useState();

  //사고유형 데이터
  const [c2, setC2] = useState();
  const [selC2, setSelC2] = useState();

  //상세정보
  const [info, setInfo] = useState();

  const getData = () => {
    const apiKey = process.env.REACT_APP_API_KEY;

    let url = 'https://api.odcloud.kr/api/15070282/v1/uddi:8449c5d7-8be5-4712-9093-968fc0b2d9fc?';
    url = `${url}page=1&perPage=18&serviceKey=${apiKey}`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => setTraData(data.data))
      .catch(err => console.log(err))
      ;
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (!traData) return;
    console.log(traData)
    let tm = traData.map(item => item['사고유형대분류']);
    tm = [...new Set(tm)];

    //4개의 대분류 데이터 생성
    setC1(tm);
    
  }, [traData]);

  //대분류선택
  useEffect(()=>{
    if (!selC1) return;
    let tm = traData.filter(item => item['사고유형대분류'] == selC1);
    tm = tm.map(item => item['사고유형']);
    tm = [...new Set(tm)]
    
    setC2(tm);
    console.log('c2', c2)
  }, [selC1]);

  //사고유형 선택
  useEffect(()=>{
    if (!selC2) return;
    const infoKey = ['사고건수', '사망자수', '중상자수', '경상자수', '부상신고자수'];
    let tm = traData.filter(item => item['사고유형대분류'] == selC1 && item['사고유형'] == selC2)[0];
    tm = infoKey.map(info => [info, tm[info]]);
    // console.log(tm);
    let tm_info = tm.map(item => <div key={item[0]} className='my-5'>
                                  <span className='text-2xl font-bold mr-5'>{item[0]}</span>
                                  <span className='text-red-600 text-5xl font-bold'>{parseInt(item[1]).toLocaleString('ko-KR')}</span>
                                  <span className='text-2xl ml-0.5'>{item[0].includes('건') ? '건' : '명'}</span>
                                </div>)
    setInfo(tm_info);
  }, [selC2]);

  return (
    <div className='w-full h-screen flex flex-col justify-start items-center'>
      <div className='w-11/12 flex flex-col justify-center item-center'>
        {c1 && <TrafficNav div='대분류' c={c1} sel={selC1} setSel={setSelC1} />}
        {c2 && <TrafficNav div='사고유형' c={c2} sel={selC2} setSel={setSelC2}/>}
      </div>
      <div className='w-11/12 px-1 mt-5 flex flex-col justify-between items-center'>
        {info}
      </div>
    </div>
  )
}
