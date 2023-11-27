import { useRecoilState } from "recoil"
import { costumerAtom, errorMessageAtom, isValidAtom } from "../../../data/atom"
import { isValidName } from "../validation.js"


const FamilyNameInput = () => {
	const [costumer, setCostumer] = useRecoilState(costumerAtom)
	const [isValid, setIsValid] = useRecoilState(isValidAtom)
	const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom)

	const handleNameChange = (event) => {
		setCostumer({...costumer, familyName: event.target.value})
	}

	const handleBlur = (event) => {
		const familyName = event.target.value; 
		const [isValidResult, error] = isValidName(familyName)
		if(isValidResult) {
			setErrorMessage(prev => ({...prev, familyName: ''})); 
			setIsValid(true); 
		} else {
			setErrorMessage(prev => ({...prev, familyName: error})); 
			setIsValid(false); 
		}
	}

	return (
		<div className="">
					<label htmlFor="family-name" ></label>
					<input 
						className= {isValid === null ? '' : (isValid ? 'isvalid-input' : 'invalid-input')}
						type="text"
						value={costumer.familyName}
						id="family-name"
						placeholder="*Efternamn"
						onChange={handleNameChange}
						onBlur={handleBlur}
						required />
						<div className="order-error-message-container">{errorMessage.familyName}</div>
				</div>
	)
}

export default FamilyNameInput