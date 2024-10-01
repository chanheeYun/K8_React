import MyBoxBox from './MyBoxBox'

export default function MyBox() {
  return (
    <div className='w-full h-60 grid grid-cols-2 gap-3 place-items-center'>
      <MyBoxBox color='blue'/>
      <MyBoxBox color='orange'/>
      <MyBoxBox color='lime'/>
      <MyBoxBox color='amber'/>
    </div>
  )
}
