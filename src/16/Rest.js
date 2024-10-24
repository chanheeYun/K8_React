import axios from 'axios';
import TailButton from "../UI/TailButton2";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Rest() {
  const txt1Ref = useRef();
  const txt2Ref = useRef();
  const [pData, setPData] = useState([]);
  const [tags, setTags] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isUpdateId, setIsUpdateId] = useState('');

  //서버를 실행시켜야 정상 작동한다
  //restfull endpoint 주소 - 컴포넌트 내에서 사용된다
  const url = 'http://localhost:3005/posts';

  const getPData = async () => {
    // const resp = await fetch(url);
    // const data = await resp.json();
    // console.log(data)
    const { data } = await axios.get(url);
    
    setPData(data);
  };

  const handlePost = async () => {
    if (txt1Ref.current.value === '') {
      alert('제목을 입력하세요.');
      txt1Ref.current.focus();
      return;
    }
    if (txt2Ref.current.value === '') {
      alert('작성자를 입력하세요.')
      txt2Ref.current.focus();
      return;
    }

    const postData = {
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    };

    // const resp = await fetch(url, {
    //   method : 'POST',
    //   headers : {'Content-Type' : 'application/json'},
    //   body : JSON.stringify(postData)
    // });

    // //post 방식으로 fetch하게 되면 새로 입력된 데이터만 resp로 반환된다
    // const data = await resp.json();
    const { data } = await axios.post(url, postData);

    setPData([...pData, data]);

    txt1Ref.current.value = '';
    txt1Ref.current.focus();
    txt2Ref.current.value = '';
  };

  const handleDelete = useCallback(async (id) => {
    //삭제된 데이터 반환
    // await fetch(`${url}/${id}`, {
    //   method : 'DELETE'
    // });
    await axios.delete(`${url}/${id}`);

    setPData(pData.filter(item => item.id !== id));
  }, [pData]);

  const handleCorrect = useCallback((item) => {
    if (isUpdate) return;
    txt1Ref.current.value = item.title;
    txt2Ref.current.value = item.author;
    
    setIsUpdate(true);
    setIsUpdateId(item.id);
  }, [isUpdate]);

  const handlePut = async () => {
    const putData = {
      id : isUpdateId,
      title : txt1Ref.current.value,
      author : txt2Ref.current.value
    };

    // const resp = await fetch(`${url}/${isUpdateId}`, {
    //   method : 'PUT', 
    //   headers : {'Content-Type' : 'application/json'},
    //   body : JSON.stringify(putData)
    // });

    // const data = await resp.json();
    const { data } = await axios.put(`${url}/${isUpdateId}`, putData);

    setPData(pData.map(item => item.id === isUpdateId ? data : item));

    txt1Ref.current.value = '';
    txt1Ref.current.focus();
    txt2Ref.current.value = '';

    setIsUpdate(false);
    setIsUpdateId('');
  };

  useEffect(()=>{
    getPData();
  }, []);

  useEffect(()=>{
    if (!pData) return;
    let tm = pData.map(item => <tr className='text-center border-2' key={item.id}>
                                <td className='text-2xl py-0.5'>{item.title}</td>
                                <td className='text-base py-0.5'>{item.author}</td>
                                <td className='py-0.5'>
                                  <TailButton caption="🗑"
                                            color="gray"
                                            handleClick={() => handleDelete(item.id)}
                                            size='w-auto' /></td>
                                <td className='py-0.5'>
                                  <TailButton caption="🖋"
                                            color="gray"
                                            handleClick={() => handleCorrect(item)} 
                                            size='w-auto' /></td>
                              </tr>);
    setTags(tm);
    console.log(pData)
  }, [pData, handleCorrect, handleDelete]);

  //컴포넌트가 재랜더링 될 때 마다 실행
  // useEffect(()=>{
  //   console.log(1)
  // });

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
            ref={txt1Ref} />
        </div>
        <label htmlFor="txt2" className="my-2">작성자</label>
        <div className="flex">
          <input id="txt2"
            type="text"
            className="form-input w-full"
            ref={txt2Ref} />
        </div>
        <TailButton caption={isUpdate ? '수정' : '입력'}
                    color="green"
                    handleClick={isUpdate ? handlePut : handlePost} 
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
