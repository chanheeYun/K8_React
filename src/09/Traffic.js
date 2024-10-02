import { useEffect, useState } from 'react';
import TrafficNav from './TrafficNav';
// import divBox from './divBox';

export default function Traffic() {
  const [traData, setTraData] = useState();
  

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
    // console.log(traData)
    let tm = traData.map(item => item['사고유형대분류']);
    tm = [...new Set(tm)]

    // console.log(tm)
  }, [traData]);

  return (
    <div className='w-11/12 h-screen flex flex-col justify-start items-center'>
      <TrafficNav div='대분류' />
      <TrafficNav div='중분류' />
    </div>
  )
}
