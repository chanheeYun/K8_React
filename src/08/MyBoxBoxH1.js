export default function MyBoxBoxH1({color}) {
  return (
    <h1 className='w-2/5 h-20 p-3
                      flex justify-center items-center
                      text-3xl font-bold
                      border-2 rounded-lg
                      bg-gray-50'>
      {color.charAt(0).toUpperCase() + color.slice(1)}
    </h1>
  )
}
