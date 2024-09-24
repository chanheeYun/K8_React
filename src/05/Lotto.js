import TailButton from '../UI/TailButton'
import TailBall from './TailBall'
import { useState } from 'react';


export default function Lotto() {
   const [arr, setArr] = useState([]);
   
   const handleClick1 = () => {

      while (arr.length < 7) {
         let n = Math.floor(Math.random() * 45) + 1;
         if (!arr.includes(n)) arr.push(n);
      }

      setArr(arr)
   };
   
   console.log(arr)
   
   let bonus = arr.pop();
   const tags = arr.map(item => <TailBall n={item} />);
   const bonusTag = <TailBall n={bonus} />;

   return (
      <div>
         <div className='flex justify-center items-center mb-10'>
            {tags}
            <span>+</span>
            {bonusTag}
         </div>
         <div>
            <TailButton caption={'로또번호생성'}
               color='green'
               handleClick={handleClick1} />
         </div>
      </div>
   )
}
