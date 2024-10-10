import { useEffect, useRef, useState } from 'react';
import TailCard from '../UI/TailCard'

export default function Festival() {
  const [fData, setFData] = useState();
  const [opt, setOpt] = useState();
  const [selected, setSelected] = useState("구(군)을 선택하세요.");
  const [tags, setTags] = useState();

  const getFetchData = async () => {
    const apiKey = process.env.REACT_APP_API_KEY;
    let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr';
    url = `${url}?serviceKey=${apiKey}&pageNo=1&numOfRows=38&resultType=json`

    const resp = await fetch(url);
    const data = await resp.json();
    // console.log(data)
    setFData(data.getFestivalKr.item)
  };

  const mksOpt = (data) => {
    let tmList = data.map(item => item.GUGUN_NM);
    let tmSet = [...new Set(tmList)].sort();
    // console.log(tmSet)
    let tm = tmSet.map(item => <option value={item} label={item}>{item}</option>);
    setOpt(tm)
  };

  const mksTags = (data) => {
    // console.log(data)
    if (!data) return;
    let tm = data.map(item => {
      let n = item.MAIN_TITLE.indexOf('(');
      return <TailCard key={item.UC_SEQ}
                      imgUrl={item.MAIN_IMG_NORMAL}
                      title={item.MAIN_TITLE.slice(0, n)}
                      content={item.TITLE}
                      kw={item.PLACE} 
                      date={item.USAGE_DAY_WEEK_AND_TIME}/>
    });
    setTags(tm);
  };

  useEffect(()=>{
    getFetchData();
  }, []);

  useEffect(()=>{
    if (!fData) return;
    mksOpt(fData);
    mksTags(fData)
    console.log(fData)
  }, [fData]);

  useEffect(()=>{
    if (selected === '구(군)을 선택하세요.') {
      mksTags(fData);
    } else {
      let tm = fData.filter(item => item.GUGUN_NM === selected);
      mksTags(tm);
    }
  }, [selected]);

  //select 박스 제어
  const gu = useRef();

  const handleSelected = (e) => {
    setSelected(e.target.value);
  };
  
  //option 선택 되면 교수님 수업 버전
  // const handleSelected2 = () => {
  //   console.log(gu.current);
  // };

  return (
    <div className='w-10/12 flex flex-col justify-start items-center'>
      <h1 className='main_title mt-5 text-5xl'>부산하면 축제! 축제하면 부산 아입니까~!</h1>
      <select className='form-select w-1/3 mt-10 mb-4' onChange={handleSelected} ref={gu}>
        <option className='text-gray-300' value='구(군)을 선택하세요.'>
          구(군)을 선택하세요.
        </option>
        {opt}
      </select>
      <div className='card grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tags}
      </div>
    </div>
  )
}
