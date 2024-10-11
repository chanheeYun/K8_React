import TailButton from '../UI/TailButton2';
import { useNavigate } from 'react-router-dom';

//navigate 쓰거나 link 태그
export default function RouteNav() {
  const navigate = useNavigate();

  return (
    <div className=' w-full grid grid-cols-3 gap-2'>
      <TailButton caption='홈'
        color='green'
        handleClick={() => navigate('/')}
        size='w-full' />
      <TailButton caption='page1'
        color='green'
        handleClick={() => navigate('/p1')}
        size='w-full' />
      <TailButton caption='page2'
        color='green'
        handleClick={() => navigate('/p2')}
        size='w-full' />
    </div>
  )
}
