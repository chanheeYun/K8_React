function Hello() {
   let today = new Date();
   today = today.toLocaleString();

   let name = ' PNU';

   return (
      //jsx는 반드시 한개의 태그를 return
      //fragment tag: <>
      //class --> className 개발자 도구보면 react가 자동으로 class로 변경해서 적용해준다
      <>
         <p className='p1'>
            Hello React!!
         </p>
         <p className='text-4xl text-cyan-200'>
            {name === 'PNU' ? 'PNU' : ''} 윤찬희
         </p>
         <p style={{backgroundColor:'gray', color:'white'}}>
            {/* {new Date().toLocaleString()} */}
            {today}
         </p>
      </>
   );
}

export default Hello;