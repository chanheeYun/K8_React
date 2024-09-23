import MyDiv2 from './MyDiv2';

// 스니핏(ES7)이 자동으로 양식을 생성해준다
export default function MyDiv1() {
   const d1 = 'div1';
   const d2 = 'div2';
   const d3 = 'div3';

   return (
    <div className='w-10/12 h-4/6
                     flex flex-col justify-center items-center
                     bg-pink-300 text-white font-bold'>
      <div className='w-full p-5 items-center'>
         {d1}
      </div>
      <MyDiv2 dn1={d1} dn2={d2} dn3={d3} />
    </div>
   )
}
