import FoodData from './fooddata.json';
import FoodCard from './FoodCard';

export default function FoodMain() {
  
  console.log(FoodData)
  let tags = FoodData.map( item => <FoodCard key={item['사업장명']} 
                                    div={item['구분']} busiName={item['사업장명']} operName={item['운영주체명']}
                                    address={item['사업장 소재지']} contact={item['연락처(대표번호)']} />)
  return (
    <div className='w-10/12 mt-3 px-1
                  grid grid-cols-2 gap-4 overflow-y-scroll'>
      {tags}   
    </div>
  )
}
