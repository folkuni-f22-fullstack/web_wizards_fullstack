import { useRecoilState } from "recoil"
import { costumerAtom, errorMessageAtom, isValidAtom  } from "../../../data/atom"
import { isValidName } from "../validation.js"
import './order-form.css'


const FirstNameInput = () => {
const [costumer, setCostumer] = useRecoilState(costumerAtom)
const [isValid, setIsValid ] = useRecoilState(isValidAtom)
const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom)
// console.log('Den är isvalid:' , isValid)

	const handleNameChange = (event) => {
		setCostumer({...costumer, firstName: event.target.value})
    }

	const handleBlur = (event) => {
		const firstName = event.target.value; 
		const [isValidResult, error] = isValidName(firstName)
        if(isValidResult) {
            setErrorMessage(prev => ({...prev, firstName: ''}));
			setIsValid(true); 
        } else {
            setErrorMessage(prev => ({...prev, firstName: error})); 
			setIsValid(false); 
        }
	}

	return(
		
		<div className="">
			<label htmlFor="first-name" ></label>
			<input 
				className={isValid === null ? '' : (isValid ? 'isvalid-input' : 'invalid-input')}
				type="text"
				value={costumer.firstName}
				id="first-name"
				placeholder="*Förnamn"
				onChange={handleNameChange}
				onBlur={handleBlur}
				required />
				<div className="error-message">{errorMessage.firstName}</div>
		</div>
			
	)
}

				export default FirstNameInput