import { RecoilRoot } from 'recoil'
import Recoil1 from './Recoil1'

export default function RecoilMain() {
  return (
    //이렇게 하면 recoil1에 있는 애들은 모두 상태 공유
    <RecoilRoot>
      <Recoil1 />
    </RecoilRoot>
  )
}
