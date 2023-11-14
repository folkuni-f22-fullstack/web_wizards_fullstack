import { useRecoilState } from "recoil";
import { uNameAtom, uPassAtom } from "../../data/atom";
import { testUser } from "../../data/testdata";

const users = [...testUser]

export const NameInput = () => {
	const [uName, setUName] = useRecoilState(uNameAtom)
	
	const HandleNameChange = () =>{
		setUName(event.target.value)
	}

	return(
		<div className="input-container">
			<label htmlFor="username">Användarnamn</label>
			<input 
				className="input-field" 
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
				className="input-field" 
				type="text"
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