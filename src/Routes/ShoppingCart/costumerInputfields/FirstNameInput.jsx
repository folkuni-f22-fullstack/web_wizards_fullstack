import { useRecoilState } from "recoil"
import { costumerAtom } from "../../../data/atom"


const FirstNameInput = () => {


	const [costumer, setCostumer] = useRecoilState(costumerAtom)



	const handleNameChange = (event) => {
		setCostumer({...costumer, firstName: event.target.value})
	}

	return(
		
		<div className="">
			<label htmlFor="first-name" ></label>
			<input 
				className=""
				type="text"
				value={costumer.firstName}
				id="first-name"
				placeholder="*Förnamn"
				onChange={handleNameChange}
				required />
		</div>
			
	)
}

				export default FirstNameInput