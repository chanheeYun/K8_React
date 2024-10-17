import Recoil2 from './Recoil2'
import Recoil3 from './Recoil3'

export default function Recoil1() {
  const x = 1;
  const y = 2;
  return (
    <div className='w-10/12 h-4/5 flex flex-col mt-16 p-5
                    bg-lime-700 text-white font-bold'>
      recoil1 {x}
      <div className='flex justify-center'>
        <Recoil2 y2={y}/>
        <Recoil2 y2={'2'}/>
        <Recoil2 y2={'test'}/>
      </div>
      <Recoil3 x3={x} y3={y} />
    </div>
  )
}
