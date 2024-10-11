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

function App() {

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
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/MyClock'>시계</Link>
            </li>
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/Lotto'>로또</Link>
            </li>
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/FoodBank'>푸드</Link>
            </li>
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/BoxOffice'>영화</Link>
            </li>
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/Traffic'>교통</Link>
            </li>
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/Gallery'>관광</Link>
            </li>
            <li className='mx-3 px-2 py-3 
                          hover:bg-lime-400 hover:font-bold 
                          opacity-90 rounded-full'>
              <Link to='/Festival'>축제</Link>
            </li>
          </ul>
          <p><Link to='/'><img className='w-20 h-20' src={home} alt='home' /></Link></p>
        </header>
        <main className='w-full flex-grow 
                          flex flex-col items-center 
                          overflow-y-auto'>
          <Routes>
            <Route path='/' element={<AppHome />} />
            <Route path='/MyClock' element={<MyClock />} />
            {/* <MyDiv1 /> */}
            {/* <MyList /> */}
            <Route path='/Lotto' element={<Lotto />} />
            <Route path='/FoodBank' element={<FoodMain />} />
            <Route path='/BoxOffice' element={<BoxOffice />} />
            {/* <MyBox /> */}
            <Route path='/Traffic' element={<Traffic />} />
            {/* <MyRef /> */}
            <Route path='/Gallery' element={<Gallery />} />
            <Route path='/Festival' element={<Festival />} />
            {/* <RouteMain /> */}
          </Routes>
        </main>
        <footer className='w-full h-28 mt-2 flex-shrink-0
                            flex flex-col justify-center items-center
                            bg-green-950'>
          <p className='foot text-2xl text-yellow-100 my-4'>
            K-DIGIPAL 윤찬희
          </p>
          <p className="text-gray-400">© 2024 My Awesome App. All rights reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
