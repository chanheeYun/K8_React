import defaultImg from '../img/image_coming_soon.png'
import './TailCard.css'

export default function TailCard({ imgUrl, title, content, kw, date}) {
  const mksTag = (str) => {
    if (str === '') return str;
    if (str.includes(',')) {
      str = str.split(', ').map(item => <p className='w-fit  text-slate-700 bg-slate-200 rounded-xl text-xs px-2 m-1'>
        {item}</p>);
    } else {
      str = <p className='w-fit  text-slate-700 bg-slate-200 rounded-xl text-xs px-2 m-1'>{str}</p>
    }
    return str;
  };

  // const kws = kw.includes(',') ? kw.split(',') : [kw];
  // const kwTags = kws.map(item => <span className='inline-flex bg-slate-200 p-1 m-1 rounded-xl text-xs'>
  //                                 {item}</span>);
  
  const kwTags = mksTag(kw);

  const handleImgError = (e) => {
    e.target.src = defaultImg;
  };


  return (
    <div className="card max-w-sm bg-white border border-gray-300 rounded-lg shadow">
      <div className="w-full h-1/2">
        <img className="rounded-t-lg w-full h-full object-cover" src={imgUrl} onError={handleImgError} alt='이미지' />
      </div>
      <div className="p-5 h-1/2">
        <h1 className="title mb-0.5 text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>
        <p className='content mb-3 text-sm indent-0.5'>
          {date}
        </p>
        <p className="content h-1/4 font-normal indent-0.5 text-gray-700">
          {content}
        </p>
        <p className='content inline-flex flex-wrap mt-3'>
          {kwTags}
        </p>
        {/* <p className="inline-flex items-center px-3 py-2 text-sm font-medium text-center 
                      text-white bg-green-700 rounded-lg hover:bg-green-800 
                      focus:ring-4 focus:outline-none focus:ring-green-300">
          Read more
        </p> */}
      </div>
    </div>
  )
}
