export default function TailButton({caption, color, size, handleClick}) {
  
  const btColor = {
    'sky' : 'bg-sky-700',
    'green' : 'bg-green-700',
    'red' : 'bg-red-700',
    'lime' : 'bg-lime-600',
    'gray' : 'bg-gray-500',
  };

  const btColorHover = {
    'sky' : 'hover:bg-zinc-700',
    'green' : 'hover:bg-amber-700',
    'red' : 'hover:bg-red-400',
    'lime' : 'hover:bg-yellow-200',
    'gray' : 'hover:opacity-50',
  };

  return (
    <button className={`${size} inline-flex justify-center items-center
                      p-3 mx-2 ${btColor[color]} text-white text-lg
                      rounded-md ${btColorHover[color]}
                      font-bold hover:opacity-50`} 
                      onClick={handleClick}>
      {caption}
    </button>
  )
}
