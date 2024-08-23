import { createStore } from 'vuex'
const store=createStore({
	state:{
		isPC:false
	},
	mutations:{
		setIsPC(state,value){
			state.isPC=value
		}
	}
})
export default store