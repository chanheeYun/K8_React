export default function BoxOfficeTr({mv, handleClick}) {

  return (
    <tr className="bg-white border-b hover:bg-gray-50" onClick={handleClick}>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 text-center">
        {mv.rank}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-base">
        {mv.movieNm}
      </td>
      <td className="px-6 py-4 text-right">
        {Math.floor((parseInt(mv.salesAcc))/1000000).toLocaleString('ko-KR')}백만원
      </td>
      <td className="px-6 py-4 text-right">
        {parseInt(mv.audiAcc).toLocaleString('ko-KR')}명
      </td>
      <td className="px-6 py-4 text-center text-sm">
        {mv.rankInten > 0 ? <span className='text-red-600 pr-0.5'>▲</span> :
          mv.rankInten < 0 ? <span className='text-blue-600 pr-0.5'>▼</span> : '-'}
        {mv.rankInten != 0 && Math.abs(mv.rankInten)}
      </td>
    </tr>
  )
}