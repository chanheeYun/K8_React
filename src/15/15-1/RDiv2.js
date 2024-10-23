import { useRecoilValue } from 'recoil'
import { AtomM, AtomM2 } from './AtomM'
export default function RDiv2() {
  const x = useRecoilValue(AtomM);
  const y = useRecoilValue(AtomM2);

  return (
    <div className='w-full h-4/5 flex flex-col 
                    mt-16 p-5 mx-2
                    bg-lime-500 text-gray-500 font-bold'>
      RDiv2 : x = {x}, y = {y}
    </div>
  )
}
