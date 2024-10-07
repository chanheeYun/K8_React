export default function TailButton({caption, color, handleClick}) {
  
  const btColor = {
    'sky' : 'bg-sky-700',
    'green' : 'bg-green-700',
    'red' : 'bg-red-700',
    'lime' : 'bg-lime-600',
  };

  const btColorHover = {
    'sky' : 'hover:bg-zinc-700',
    'green' : 'hover:bg-amber-700',
    'red' : 'hover:bg-red-400',
    'lime' : 'hover:bg-yellow-200',
  };

  return (
    <button className={`w-36 min-w-max inline-flex justify-center items-center
                      p-3 mx-2 ${btColor[color]} text-white text-xl
                      rounded-md ${btColorHover[color]} 
                      font-bold`} 
            onClick={handleClick}>
      {caption}
    </button>
  )
}
