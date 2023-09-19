import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
// 액션함수 가져오기
import { handleDarkmode } from '../store'

export default function Navbar() {
  //darkMode state 가져옴
  let darkMode = useSelector(state => state.darkMode)
  console.log(darkMode)
  //액션함수를 사용하는 함수
  const dispatch = useDispatch();

  return (
    <nav className="navbar">
        <ul>
            <li className='nav-item'><Link to='/'>Home</Link></li>
            <li className='nav-item'><Link to='/about'>About</Link></li>
        </ul>
        <button className='btn' onClick={()=>{
          //액션함수는 dispatch함수 안에 넣어야 됨
          dispatch(handleDarkmode())
        }}>
          Dark mode
        </button>
    </nav>
  )
}
