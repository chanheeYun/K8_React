import { AtomN } from './AtomN'
import { useRecoilValue } from 'recoil'

// export default function Recoil2(props) {
export default function Recoil2({y2}) {
  const n = useRecoilValue(AtomN);

  return (
    <div className='w-1/3 h-4/5 flex flex-col 
                    mt-16 p-5 mx-2
                    bg-lime-500 text-gray-500 font-bold'>
      {/* recoil2 {props.y2} */}
      recoil2 {y2} n = {n}
    </div>
  )
}
