import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex); 

const storage = {
    fetch(){
        //기존에 App.vue 에 Create() 에 있던거 Vuex 버전으로 옴겨옴
        let arr = [];
        
        if(localStorage.length > 0) {
            
            for(let i =0; i <localStorage.length; i++){
                //로컬 컴퓨터에 잡다한 데이터가 많이 들어있어서, string {} 형태의 값이라
                //아래처럼 조건처리해서 에러 안나게 변경 
                if(localStorage.getItem(localStorage.key(i)).includes('{')) {
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
          }
        return arr;
    },

} 
export const store = new Vuex.Store({
    state: {
        headerText : 'Todo!',
        todoItems: storage.fetch()
    }
});