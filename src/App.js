import './App.css';
import AppHome from './AppHome';
import home from './img/lime_home.png';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Hello from './01/Hello';
import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
import FoodMain from './06/FoodMain';
import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
import Traffic from './09/Traffic';
// import MyRef from './10/MyRef';
import Gallery from './11/Gallery';
import Festival from './12/Festival';
// import RouteMain from './13/RouteMain';
import FcstList from './14/FcstList';
import Fcst from './14/Fcst';
// import RecoilMain from './15/RecoilMain';
import RecoilMain from './15/15-1/RMain';
import Rest from './16/Rest';

function App() {
  const lst = [
    {name : "시계", path : "MyClock"},
    {name : "로또", path : "Lotto"},
    {name : "푸드", path : "FoodBank"},
    {name : "영화", path : "BoxOffice"},
    {name : "교통", path : "Traffic"},
    {name : "관광", path : "Gallery"},
    {name : "축제", path : "Festival"},
    {name : "기상", path : "Fcst"},
    {name : "D B", path : "Rest"},
  ];

  const mksLi = (lst) => {
    let tm = lst.map(item => {
      let path = '/' + item.path;
      return <li key={item.name} className='mx-3 px-2 py-3 
                                            hover:bg-lime-400 hover:font-bold 
                                            opacity-90 rounded-full'>
                <Link to={path}>{item.name}</Link>
              </li>
      });
    return tm;
  };

  const lis = mksLi(lst);
  
  return (
    <BrowserRouter>
      <div className='w-full xl:w-10/12 h-screen mx-auto
                      flex flex-col justify-center items-center'>
        <header className='w-full h-28 p-5
                            flex justify-between items-center
                            bg-lime-100'>
          <p className='title text-7xl text-emerald-950 mt-1'>
            REACT 리액트
          </p>
          <ul className='moveBt text-xl text-gray-700 opacity-80 w-1/2 flex justify-end items-center'>
            {lis}
          </ul>
          <p><Link to='/'><img className='w-20 h-20' src={home} alt='home' /></Link></p>
        </header>
        <main className='w-full flex-grow 
                          flex flex-col items-center 
                          overflow-y-auto'>
          <Routes>
            {/* <MyDiv1 /> */}
            {/* <MyList /> */}
            {/* <MyBox /> */}
            {/* <MyRef /> */}
            {/* <RouteMain /> */}
            <Route path='/' element={<AppHome />} />
            <Route path='/MyClock' element={<MyClock />} />
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/FoodBank' element={<FoodMain />} />
            <Route path='/BoxOffice' element={<BoxOffice />} />
            <Route path='/Traffic' element={<Traffic />} />
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Festival' element={<Festival />} />
            <Route path='/Fcst' element={<Fcst />} />
            <Route path='/FcstList' element={<FcstList />} />
            <Route path='/Recoil' element={<RecoilMain />} />
            <Route path='/Rest' element={<Rest />} />
          </Routes>
        </main>
        <footer className='w-full h-28 mt-2 flex-shrink-0
                            flex flex-col justify-center items-center
                            bg-green-950'>
          <p className='foot text-2xl text-yellow-100 my-4'>
            K-DIGIPAL 윤찬희
          </p>
          <p className="text-gray-300">© 2024 My Awesome App. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
