import { useSelector, useDispatch } from "react-redux"
import { addItem, removeItem } from "../store"

export default function Home() {
  //store에서 state 가져오기
  let data = useSelector(state => state) // return state를 줄여서 쓴 것
  let {darkMode, pokemon} = data
  // console.log(data)
  // console.log(pokemon)
  const dispatch = useDispatch()
  const reversedPokemon = [...pokemon].reverse() //추가하는 최신자료를 위로 가게 하기 위해서
  
  return (
    <main className={darkMode ? 'container darkmode' : 'container'}>
      <h1>Home</h1>

      <form 
        className="form"
        onSubmit={(e)=>{
          e.preventDefault() //폼 전송 이벤트 취소
          let name = e.currentTarget.name.value
          let type = e.currentTarget.type.value.split(',')
          let id = new Date().getTime() //중복되지 않는 고유 id 생성을 위해
          let desc = '설명글...'
          console.log(name, type, id)
          //store에 값을 저장하는 액션함수 추가
          let data = {
            name: name,
            type: type,
            id: id,
            desc: desc
          }

          // if(name !=='' || type !==''){
          //   alert('빈값')
          // }else{
          //   dispatch(addItem(data))
          // }
          dispatch(addItem(data))


        }}
      >
        <div className="input-group">
          <input type="text" name='name' placeholder="이름" required />
        </div>
        <div className="input-group">
          <input type="text" name='type' placeholder="타입(복수인 경우 ,로 구분)" required />
        </div>
        <button type="submit" className="btn btn-primary">추가</button>
      </form>

      <div className="item-list">
        {
          reversedPokemon.map(poke => {
            return (
              <div className="item" key={poke.id}>
                <div className="info">
                  <h4>{poke.name}</h4>
                  <div className="type">
                    {
                      poke.type.map((type, key)=>{
                        return (
                          <span key={key}>{type}</span>
                        )
                      })
                    }
                  </div>
                </div>
                <button 
                  onClick={()=>{
                    dispatch(removeItem(poke.id))
                  }}
                className="btn btn-danger">삭제</button>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}
