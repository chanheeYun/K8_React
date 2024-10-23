import RDiv2 from './RDiv2';
import RDiv3 from './RDiv3';
import { AtomM, AtomM2 } from './AtomM';
import { useRecoilValue } from 'recoil';

export default function RDiv1() {
  const x = useRecoilValue(AtomM);
  const y = useRecoilValue(AtomM2);
  
  return (
    <div className='w-10/12 h-4/5 flex flex-col mt-16 p-5
                   bg-lime-700 text-white font-bold'>
      RDiv1 : x = {x}, y = {y}
      <div className='w-full flex justify-center'>
        <RDiv2 />
        <RDiv2 />
      </div>
      <RDiv3 />
    </div>
  )
}
