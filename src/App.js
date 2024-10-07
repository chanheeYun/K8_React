import './App.css';
import home from './img/lime_home.png';
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
// import Lotto from './05/Lotto';
// import FoodMain from './06/FoodMain';
// import BoxOffice from './07/BoxOffice';
// import MyBox from './08/MyBox';
// import Traffic from './09/Traffic';
import MyRef from './10/MyRef';

function App() {
  return (
    <div className='w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center'>
      <header className='w-full h-28 p-5
                          flex justify-between items-center
                          bg-lime-100'>
        <p className='title text-7xl text-emerald-950 mt-1'>
          REACT 리액트
        </p>
        <p><img className='w-20 h-20' src={home} alt='home' /></p>
      </header>
      <main className='w-full grow
                        flex flex-col items-center justify-center
                        overflow-y-auto'>
        {/* <MyClock /> */}
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        {/* <Lotto /> */}
        {/* <FoodMain /> */}
        {/* <BoxOffice /> */}
        {/* <MyBox /> */}
        {/* <Traffic /> */}
        <MyRef />
      </main>
      <footer className='w-full h-28 mt-2
                          flex justify-center items-center
                          bg-green-950'>
        <p className='foot text-2xl text-yellow-100 my-4'>
          K-DIGIPAL 윤찬희
        </p>
      </footer>
    </div>
  );
}

export default App;
