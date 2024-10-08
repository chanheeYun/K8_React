import { useEffect, useRef, useState } from 'react';
import TailButton from '../UI/TailButton2';
import TailCard from '../UI/TailCard'
import './Gallery.css'

export default function Gallery() {
  const [gData, setGData] = useState();
  const [tags, setTags] = useState([]);

  const searchRef = useRef();

  const getFetchData = () => {
    if (searchRef.current.value === '') return;
    const apiKey = process.env.REACT_APP_API_KEY;
    const enSearch = encodeURIComponent(searchRef.current.value)

    let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1";
    url += `?serviceKey=${apiKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${enSearch}&_type=json`;
    console.log(url)

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data["response"]["body"]["items"]["item"])
        setGData(data["response"]["body"]["items"]["item"]);
      })
      .catch(err => console.log(err))
      ;
    console.log(gData)
  };

  const okClick = () => {
    getFetchData();
  };

  const cancleClick = () => {
    searchRef.current.value = '';
    searchRef.current.focus();
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  useEffect(() => {
    if (!gData) return
    let tm = gData.map(item => <TailCard key={item.galContentId}
                                          imgUrl={item.galWebImageUrl}
                                          title={item.galTitle}
                                          content={item.galPhotographyLocation}
                                          kw={item.galSearchKeyword} />)
    setTags(tm);
  }, [gData]);

  return (
    <div className='w-10/12 h-screen flex flex-col justify-start items-center'>
      <div className='w-10/12 p-5 flex flex-col justify-center items-center'>
        <h1 className='headline text-5xl mt-6 text-center'>
          한국관광공사 사진 정보
        </h1>
        <div className='w-full p-5 flex flex-col justify-center items-center lg:flex-row'>
          <div className='w-3/5'>
            <input ref={searchRef} className='form-input w-full h-12 indent-2 text-xl' type='text' name='search' />
          </div>
          <div className='flex w-3/5  ml-0 mt-3 lg:ml-2 lg:w-2/5 lg:mt-0'>
            <TailButton caption='확인' color='lime' size='w-1/2' handleClick={okClick} />
            <TailButton caption='취소' color='lime' size='w-1/2' handleClick={cancleClick} />
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {tags}
      </div>
    </div>
  )
}
