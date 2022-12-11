import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // counter라는 headerText 속성을 추가
    state: {
        headerText: 'TODO it!',
    }
});
