import { useRecoilState } from "recoil"
import { costumerAtom, errorMessageAtom  } from "../../../data/atom"
import { isValidName } from "../validation.js"


const FirstNameInput = () => {
const [costumer, setCostumer] = useRecoilState(costumerAtom)
const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom)

	const handleNameChange = (event) => {
		const firstName = event.target.value;
		const [isValid, error] = isValidName(firstName)
        if(isValid) {
            setErrorMessage(""); 
            setCostumer({...costumer, firstName: firstName})
        } else {
            setErrorMessage(error)
        }
    }
	
	// setCostumer({...costumer, firstName: event.target.value})
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
				<div className="error-message">{errorMessage}</div>
		</div>
			
	)
}

				export default FirstNameInput