import { useEffect, useRef, useState } from 'react';
import TailButton from '../UI/TailButton2';
import TailCard from '../UI/TailCard'
import './Gallery.css'

export default function Gallery() {
  const [gData, setGData] = useState();
  const [tags, setTags] = useState([]);

  const searchRef = useRef();

  const getFetchData = async () => {
    
    const apiKey = process.env.REACT_APP_API_KEY;
    const enSearch = encodeURIComponent(searchRef.current.value)

    let url = "https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1";
    url += `?serviceKey=${apiKey}&numOfRows=20&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${enSearch}&_type=json`;
    console.log(url)

    // fetch(url)
    //   .then(resp => resp.json())
    //   .then(data => {
    //     console.log(data["response"]["body"]["items"]["item"])
    //     if (data["response"]["body"]["totalCount"] === 0) {
    //       setTags(`${searchRef.currnet.value}에 대한 검색 결과가 없습니다.`)
    //     }
    //     setGData(data["response"]["body"]["items"]["item"]);
    //   })
    //   .catch(err => console.log(err))
    //   ;

    const resp = await fetch(url); //resp가 오기 전에는 다른 일을 하지 않음
    const data = await resp.json();
    // console.log(data)
    if (data["response"]["body"]["totalCount"] === 0) {
      setTags(<h1 className='pl-10 text-3xl text-nowrap font-semibold'>"{searchRef.current.value}"에 대한 검색 결과가 없습니다.</h1>)
    } else {
      setGData(data["response"]["body"]["items"]["item"]);
    }
    console.log(gData)
  };

  const okClick = () => {
    if (searchRef.current.value === '') {
      alert('검색어를 입력하세요.');
      searchRef.current.focus();
      return;
    }
    getFetchData();
  };

  const cancleClick = () => {
    searchRef.current.value = '';
    searchRef.current.focus();
    setTags([]);
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
                                          kw={item.galSearchKeyword} 
                                          date='' />)
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
            <input ref={searchRef} type='text' name='search' 
                  className='form-input w-full h-12 indent-2 text-xl' onKeyDown={okClick}/>
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
