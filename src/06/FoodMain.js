import FoodData from './fooddata.json';
import FoodCard from './FoodCard';
import TailButton from '../UI/TailButton'
import { useState, useEffect } from 'react';

export default function FoodMain() {
  // console.log(FoodData)
  const [tags, setTags] = useState();

  let tm_bts = FoodData.map(item => item["운영주체 분류"].replace(' ', '').slice(2,));
  tm_bts = [...new Set(tm_bts)]; //set을 전개 연산자를 통한 배열로 변환
  const bts = tm_bts.map(item => <TailButton className='w-20' key={item}
                        caption={item} color='green' 
                        handleClick={()=>handleFood(item)}/>)

  const handleFood = (item) => {
    console.log(item)
    let tm = FoodData.filter( elem => elem["운영주체 분류"].replace(' ', '').slice(2,) === item);
    tm = tm.map(elem => <FoodCard key={elem['사업장명']} 
                        div={elem['구분']} busiName={elem['사업장명']} operName={elem['운영주체명']}
                        address={elem['사업장 소재지']} contact={elem['연락처(대표번호)']}  /> );
    setTags(tm)
  };

  let tm = FoodData.map( item => <FoodCard key={item['사업장명']} 
                                    div={item['구분']} busiName={item['사업장명']} operName={item['운영주체명']}
                                    address={item['사업장 소재지']} contact={item['연락처(대표번호)']} />);
  
  useEffect(() => {    
      setTags(tm);
  }, []);
  // console.log(tm)
  // setTags(tm);

  return (
  <div className='w-full flex flex-col justify-start items-center h-screen '>
    <div className='w-auto h-20 mt-2 flex justify-between items-center'>
      {bts}
    </div>
    <div className='w-full mt-3 px-28
                  grid grid-cols-1 lg:grid-cols-2 gap-5'>
      {tags}   
    </div>
  </div>
  )
}
