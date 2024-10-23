import TailButton from "../UI/TailButton2";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Rest() {
  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const [pData, setPData] = useState([]);
  const [tags, setTags] = useState();
  
  const url = 'http://localhost:3005/posts';

  const getPData = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data)
    setPData(data);
  };

  const handleDelete = () => {};
  const handleCorrect = () => {};

  const mksTags = useCallback(() => {
    let tm = pData.map(item => <tr className='text-center' key={item.id}>
                                  <td className='text-2xl'>{item.title}</td>
                                  <td className='text-base'>{item.author}</td>
                                  <td><TailButton caption="🗑"
                                              color="gray"
                                              handleClick={handleDelete}
                                              size='w-auto' /></td>
                                  <td><TailButton caption="🖋"
                                              color="gray"
                                              handleClick={handleCorrect} 
                                              size='w-auto' /></td>
                                </tr>);
    setTags(tm);
  }, [pData]);

  useEffect(()=>{
    getPData();
  }, []);

  useEffect(()=>{
    if (!pData) return;
    mksTags();
  }, [pData, mksTags]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-7 
                      bg-slate-100
                      text-center my-5 p-5">
        <label htmlFor="txt1" className="my-2">제목</label>
        <div className="flex col-span-3">
          <input id="txt1"
            type="text"
            className="form-input w-full"
            inRef={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            inRef={txt2Ref} />
        </div>
        <TailButton caption="입력"
                    color="green"
                    handleClick='' 
                    size='auto' />
      </div>
      <table
        className="w-11/12 text-left text-sm font-light text-surface">
        <thead
          className="border-b border-neutral-200 font-medium">
          <tr className="bg-black text-white font-bold text-center">
            <th scope="col" className="px-6 py-3 w-3/6 text-center">제목</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">작성자</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">삭제</th>
            <th scope="col" className="px-6 py-3 w-1/6 text-center">편집</th>
          </tr>
        </thead>
        <tbody>
          {tags}
        </tbody>
      </table>
    </div>
  )
}
