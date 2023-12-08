import { useRecoilState, useRecoilValue } from "recoil";
import { uNameAtom, uPassAtom, formIsDirtyAtom } from "../../data/atom";
import { user } from "../../data/testdata";

const users = [...user]


const setErrorClass = () => {
	const formIsDirty = useRecoilValue(formIsDirtyAtom)

	const errorClass= formIsDirty ? 'dirty' : ''
	return(
		errorClass)	
}


export const NameInput = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	
	const HandleNameChange = () =>{
		setUName(event.target.value)
	}

	return(
		<div className="input-container">
			<label htmlFor="username">Användarnamn</label>
			<input 
				className= {setErrorClass()} 
				type="text"
				value={uName}
				id= 'username'
				onChange={HandleNameChange} 
				required/>
		</div>
	)
}

export const PassInput = () => {
	const [uPass, setUPass] = useRecoilState(uPassAtom)


	const HandlePassChange = () => {
		setUPass(event.target.value)
	}

	return (
		<div className="input-container">
			<label htmlFor="password">Lösenord</label>
			<input 
				className={setErrorClass()} 
				type="password"
				value={uPass}
				id="password"
				onChange={HandlePassChange} 
				required/>
		</div>
	)
}

export const IsMatching = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	const [uPass, setUPass] = useRecoilState(uPassAtom)

	const match = users.find(user => user.name === uName && user.password === uPass)

		if(match !==undefined){
		return true
		}else{
			return false
		}
}