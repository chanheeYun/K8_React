export default function TailButton({caption, color, handleClick}) {
  
  const btColor = {
    'sky' : 'bg-sky-700',
    'green' : 'bg-green-700',
    'red' : 'bg-red-700',
  };

  const btColorHover = {
    'sky' : 'hover:bg-zinc-700',
    'green' : 'hover:bg-amber-700',
    'red' : 'hover:bg-red-400',
  };

  return (
    <button className={`inline-flex justify-center items-center
                      p-3 mx-1 ${btColor[color]} text-white text-lg
                      rounded-md ${btColorHover[color]}
                      font-bold`} 
                      onClick={handleClick}>
      {caption}
    </button>
  )
}
