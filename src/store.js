import { configureStore, createSlice } from "@reduxjs/toolkit";

// 1. slice(state) 만들기
const pokemon = createSlice({
    name: 'pokemon', //state명
    //초기값
    initialState: [
        {
            id: 0, 
            name: "이상해씨", 
            type: ["풀", "독"],
            desc: "태어나서부터 얼마 동안은 등의 씨앗으로부터 영양을 공급받아 크게 성장한다."
        },
        {
            id: 4, 
            name: "파이리", 
            type: ["불꽃"],
            desc: "파이리 꼬리의 불꽃은 생명의 등불이다. 건강할 때는 불꽃도 강하게 타오른다."
        },
        {
            id: 7, 
            name: "꼬부기", 
            type: ["물"],
            desc: "등껍질에 숨어 몸을 보호한다. 상대의 빈틈을 놓치지 않고 물을 뿜어내어 반격한다."
        },        
    ],
    reducers: {
        //액션함수가 들어감(현재값, 들어오는값)
        //추가기능
        addItem: function(state, action) {
            console.log(action.payload)
            const copy = [...state, action.payload] //데이터 추가
            return copy //변경된 값 전달
        },
        //삭제기능
        removeItem(state, action) {
            console.log(action.payload) //id값
            const copy = state.filter((item)=>{
                //id와 일치하지 않는 자료만 리턴(id값 자료 제거)
                return item.id !== action.payload
            })
            return copy
        }
    }
})

// 2.다크모드 slice(state)
const darkMode = createSlice({
    name: 'darkMode',
    initialState: false,
    reducers: {
        //다크모드 변경함수(액션함수)
        handleDarkmode(state){
            return !state // true false 바꾸기
        }
    }
})


//store안의 state를 내보내는 설정
export default configureStore({
    reducer: {
        pokemon: pokemon.reducer, //함수를 내보냄
        darkMode: darkMode.reducer
    }
});

//액션함수 내보내는 설정
export let { handleDarkmode } = darkMode.actions;
export let { addItem, removeItem } = pokemon.actions;