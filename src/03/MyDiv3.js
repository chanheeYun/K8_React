export default function MyDiv3({dn1, dn2, dn3}) {
   return (
   <div className='w-3/5 h-4/6 mb-4
                     flex flex-col justify-center items-center
                      bg-pink-800 text-white font-bold'>
      <div>
         {`${dn1} > ${dn2} > ${dn3}`}
      </div>
    </div>
   )
}
