import './App.css';
import home from './img/lime_home.png';
// import Hello from './01/Hello';
// import MyClock from './02/MyClock';
// import MyDiv1 from './03/MyDiv1';
// import MyList from './04/MyList';
import Lotto from './05/Lotto';
function App() {
  return (
    <div className='w-full xl:w-10/12 h-screen mx-auto
                    flex flex-col justify-center items-center'>
      <header className='w-full h-20 p-5
                          flex justify-between items-center
                          bg-lime-100'>
        <p className='title text-5xl text-emerald-950 mt-1'>
          REACT 리액트
        </p>
        <p><img className='w-16 h-16' src={home} alt='home' /></p>
      </header>
      <main className='w-full grow
                        flex flex-col justify-center items-center
                        overflow-y-auto'>
        {/* <MyDiv1 /> */}
        {/* <MyList /> */}
        <Lotto />
      </main>
      <footer className='w-full h-20
                          flex justify-center items-center
                          bg-green-950 text-white'>
        <p className='foot text-yellow-100'>
          K-DIGIPAL 윤찬희
        </p>
      </footer>
    </div>
  );
}

export default App;
