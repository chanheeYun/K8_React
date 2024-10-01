export default function MyBoxBoxToggle({color, toggleClick}) {
  return (
    <div className={`w-7/12 h-16 mt-6 p-1
                        flex justify-center items-center
                        text-2xl font-semibold
                        ${color === 'blue' ? 'bg-sky-100' : `bg-${color}-100`}
                        border-2 border-${color}-400 select-none`}
        onClick={toggleClick}>
      {color.charAt(0).toUpperCase() + color.slice(1)} Toggle
    </div>
  )
}
