import MyBoxBox from './MyBoxBox'

export default function MyBox() {
  return (
    <div className='w-10/12 h-screen flex justify-center items-center'>
      <MyBoxBox color='blue'/>
      <MyBoxBox color='orange'/>
    </div>
  )
}
