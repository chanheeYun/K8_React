import { useState } from 'react';
export default function MyListItem({title, content, imgUrl}) {
   const [n, setN] = useState(0);
   
   const like = () => {
      setN(n + 1);
      console.log(n) //n이 변경되기 이전 값을 남긴다
   }

   return (
      <div className='w-full h-40
                     flex justify-center items-center rounded-lg shadow-md'>
         <div className='w-1/3 h-full flex justify-center items-start'>
            <img className='rounded-lg' src={imgUrl} alt={title} />
         </div>
         <div className='w-2/3 h-full flex flex-col justify-between items-end'>
            <div className='pl-2'>
               <div className='text-lg font-bold'>
                  {title}
               </div>
               <div className='text-sm content'>
                  {content}
               </div>
            </div>
            <div className='w-full h-1/5 inline-flex justify-end items-end pr-4 pb-2'>
               <span className='like px-px cursor-pointer select-none' onClick={like}>
                  💚
               </span>
               <span className='like cursor-pointer select-none' onClick={like}>좋아요</span>
               <span className='like ml-1 w-2 mr-2'>{n}</span>
            </div>
         </div>
      </div>
   )
}