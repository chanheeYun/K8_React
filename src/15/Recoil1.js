import Recoil2 from './Recoil2'
import Recoil3 from './Recoil3'
import { AtomN, AtomN2 } from './AtomN';
import { useRecoilValue } from 'recoil';

export default function Recoil1() {
  const x = 1;
  const y = 2;

  const n = useRecoilValue(AtomN);
  const n2 = useRecoilValue(AtomN2);

  return (
    <div className='w-10/12 h-4/5 flex flex-col mt-16 p-5
                    bg-lime-700 text-white font-bold'>
      Recoil1 (x = {x}, n = {n}, n2 = {n2})
      <div className='flex justify-center'>
        <Recoil2 y2={y}/>
        <Recoil2 y2={'2'}/>
        <Recoil2 y2={'test'}/>
      </div>
      <Recoil3 x3={x} y3={y} />
    </div>
  )
}
