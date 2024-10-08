import { useState, useEffect,useRef } from 'react'
import BoxOfficeTr from './BoxOfficeTr';

export default function BoxOffice() {
  const [tdata, setTdata] = useState();
  const [trs, setTrs] = useState([]);
  const [info, setInfo] = useState();

  const dtRef = useRef();

  const handleTrClick = (item) => {
    console.log(item)
    let tm = `[영화명 : ${item.movieNm}]   [개봉일 : ${item.openDt}]   [총 매출액 : ${Math.floor((parseInt(item.salesAcc))/1000000).toLocaleString('ko-KR')}백만원]   [누적 관객수 :  ${parseInt(item.audiAcc).toLocaleString('ko-KR')}명]`
    setInfo(tm);
  };

  const getFetchData = (dt) => {
    const apiKey = process.env.REACT_APP_MV_KEY;

    let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?';
    url = `${url}key=${apiKey}&targetDt=${dt}`;

    //데이터 가져오기
    fetch(url)
      .then(resp => resp.json())
      .then(data => setTdata(data.boxOfficeResult.dailyBoxOfficeList))
      .catch(err => console.log(err))
      ;
  };

  const getYesterday = () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1); //상수로 선언된 수를 set함수로 변경
 
    let dt = `${yesterday.getFullYear()}-${yesterday.getMonth() + 1}-${yesterday.getDate()}`;
    let dtArr = dt.split('-').map(a => a.length < 2 ? '0' + a : a).join('-');
    return dtArr ;
  };

  const handleDtChange = () => {
    let selDt = dtRef.current.value.replaceAll('-', '')
    getFetchData(selDt);
  };

  //맨처음 한번만 실행
  useEffect(() => {
    const ydt = getYesterday();
    dtRef.current.value = ydt;
    dtRef.current.max = ydt;
    getFetchData(ydt.replaceAll('-', ''));
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
    <div className='w-full h-screen flex flex-col justify-center items-center relative overflow-x-auto'>
        <div className='w-1/2 flex justify-between items-center'>
          <div className='text-lg font-bold'>
            박스오피스
          </div>
          <div>
            <input className='text-lg' ref={dtRef} type='date' id='dt' name='dt' 
                    onChange={handleDtChange}/>
          </div>
        </div>
        <table className="w-1/2 text-sm text-left rtl:text-right text-gray-500 shadow-lg">
          <thead className="text-gray-700 bg-gray-200 font-bold text-base text-center">
            <tr>
              <th scope="col" className="px-4 py-3 w-1/12">
                순위
              </th>
              <th scope="col" className="px-6 py-3 w-5/12">
                영화명
              </th>
              <th scope="col" className="px-6 py-3 w-3/12">
                매출액
              </th>
              <th scope="col" className="px-6 py-3 w-2/12">
                관객수
              </th>
              <th scope="col" className="px-4 py-3 w-1/12">
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
