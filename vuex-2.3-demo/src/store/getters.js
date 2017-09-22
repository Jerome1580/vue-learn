
	
export default{
	count:(state)=>{
		return state.count;
	},
	getOdd:(state)=>{
		return state%2 ==0?'偶数':'奇数'
	}
}