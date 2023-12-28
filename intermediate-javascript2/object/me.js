let me = () =>{
	let myHobbyDesc;
	let myInfo = {
		name: 'John Doe',
		email: 'johndoe@dormain.dormain',
		hobby: 'programming',
		hobbyValue(){
			return console.log(this.hobby);
		}
	}
	myInfo.hobbyValue();
}
me();