import TailButton from '../UI/TailButton'
import TailBall from './TailBall'
import { useState, useEffect } from 'react';

export default function Lotto() {
   //state 변수는 useState Hook으로 만듦
   const [tags, setTags] = useState();
   
   const handleClick = () => {
      let arr = [];

      while(arr.length < 7) {
         let n = Math.floor(Math.random() * 45) + 1; // 1~45 랜덤수 생성

         if (!arr.includes(n)) arr.push(n) ;
      }
      
      //보너스 번호
      const bonus = arr.splice(-1);
      //번호 정렬
      arr.sort((a, b) => a - b);
      //arr과 bonus 번호 합체
      arr = arr.concat(bonus); //or arr...bonus (전개 연산자)
      
      console.log(arr);

      let tm = arr.map(item => <TailBall key={'b' + item} n={item} />);
      tm.splice(6, 0, <span className='text-5xl font-bold mx-3 pb-2' key='plus'>+</span>);
      setTags(tm);
      // setTags(<h1 className='text-3xl'>{n}</h1>); //태그 씌워서도 set할 수 있다
      // setTags(`<h1 className='text-3xl'>${n}</h1>`); //백틱을 쓰면 문자열로 인식해서 전체를 그대로 출력해준다
   };

   return (
      <div>
         <div className='flex justify-center items-center mb-10'>
            {tags}
         </div>
         <div className='flex justify-center items-center'>
            <TailButton caption={'로또번호생성'}
               color='green'
               handleClick={handleClick} />
         </div>
      </div>
   )
}

/*
//내가 한거
export default function Lotto() {
   const [arr, setArr] = useState([]);
   
   const handleClick = () => {
      let lotto = [];

      while (lotto.length < 7) {
         let n = Math.floor(Math.random() * 45) + 1;
         if (!lotto.includes(n)) lotto.push(n);
      }
      
      setArr(lotto)
   };
   
   //console 시차 없애기
   useEffect(()=>{
      console.log(arr)
   }, [arr]);
   
   return (
      <div>
         <div className='flex justify-center items-center mb-10'>
            {arr.slice(0, 6).sort((a, b) => a - b).map(item => <TailBall key={'b' + item} n={item} />)}
            <span key='plus' className='text-5xl font-bold mx-3 pb-2'>+</span>
            {arr.slice(6, 7).map(item => <TailBall key={item} n={item} />)}
            {arr.splice(-1).map(item => <TailBall key={item} n={item} />)}
            <TailBall n={arr[6]} key={'b' + arr[6]} /> //키 값을 확실히 구분되게 설정해야 혼선을 방지한다
            <TailBall n={arr.splice(-1)} key={'b' + arr[6]} />
         </div>
         <div className='flex justify-center items-center'>
            <TailButton caption={'로또번호생성'}
               color='green'
               handleClick={handleClick} />
         </div>
      </div>
   )
}
*/