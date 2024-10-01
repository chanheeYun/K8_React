export default function MyBoxBoxToggle({color, obj, toggleClick}) {
  return (
    <div className={`w-7/12 h-16 mt-6 p-1
                        flex justify-center items-center
                        text-2xl font-semibold
                        ${obj['bg100']}
                        border-2 ${obj['bdr600']} select-none`}
        onClick={toggleClick}>
      {color.charAt(0).toUpperCase() + color.slice(1)} Toggle
    </div>
  )
}
