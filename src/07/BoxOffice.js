import { useState, useEffect } from 'react'
import BoxOfficeTr from './BoxOfficeTr';

export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs, setTrs] = useState([]);
  const [info, setInfo] = useState();

  const handleTrClick = (item) => {
    console.log(item)
    let tm = `[영화명 : ${item.movieNm}]  [개봉일 : ${item.openDt}]  [일 매출액 : ${Math.floor((parseInt(item.salesAmt))/10000).toLocaleString('ko-KR')}만원]  [일 관객수 :  ${parseInt(item.audiCnt).toLocaleString('ko-KR')}명]`
    setInfo(tm);
  };

  const getFetchData = () => {
    const apiKey = process.env.REACT_APP_MV_KEY;
    const dt = '20240929';

    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    //데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
      ;
  };

  //맨처음 한번만 실행
  useEffect(() => {
    getFetchData();
  }, []);

  //fetch 데이터 채워졌을 때
  useEffect(() => {
    if (!tdata) return;
    let tm = tdata.map( item => <BoxOfficeTr 
                              key={item.movieCd}
                              mv={item} 
                              handleClick={() => handleTrClick(item)} />);
    setTrs(tm);
  }, [tdata]);

  return (
    <div className='h-screen flex flex-col justify-center items-center relative overflow-x-auto'>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 shadow-lg">
          <thead className="text-gray-700 bg-gray-200 font-bold text-base text-center">
            <tr>
              <th scope="col" className="px-6 py-3">
                순위
              </th>
              <th scope="col" className="px-6 py-3">
                영화명
              </th>
              <th scope="col" className="px-6 py-3">
                총 매출액
              </th>
              <th scope="col" className="px-6 py-3">
                누적 관객수
              </th>
              <th scope="col" className="px-6 py-3">
                증감
              </th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
          <tfoot>
            <tr className='bg-gray-500 text-gray-100 h-10 p-2 text-center'>
              <td colSpan={5}>{info}</td>
            </tr>
          </tfoot>
        </table>
    </div>
  )
}
