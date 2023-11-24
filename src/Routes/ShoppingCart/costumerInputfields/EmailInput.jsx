import { useRecoilState } from "recoil"
import { costumerAtom, errorMessageAtom, isValidEmailAtom } from "../../../data/atom"
import { isValidEmail } from "../validation.js"

const EmailInput = () => {
	const [costumer, setCostumer] = useRecoilState(costumerAtom)
	const [isValid, setIsValid ] = useRecoilState(isValidEmailAtom)
	const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom) 

	const handleEmailChange = (event) => {
		setCostumer({...costumer, email: event.target.value})
	}
	const handleEmailBlur = (event) => {
		const email = event.target.value; 
		const [isValidResult, error] = isValidEmail(email)
		if(isValidResult) {
			setErrorMessage(prev => ({...prev, email: ''}))
			setIsValid(true); 
		} else {
			setErrorMessage(prev => ({...prev, email: error}))
			setIsValid(false); 
		}
	}

	return(
		<div className="">
			<label htmlFor="email" ></label>
			<input 
				className={isValid === null ? '' : (isValid ? 'isvalid-input' : 'invaild-input')}
				type="e-mail"
				value={costumer.email}
				id="email"
				placeholder="*E-post"
				onChange={handleEmailChange}
				onBlur={handleEmailBlur}
				required />
				<div className="error-message">{errorMessage.email}</div>
		</div>

	)
}

export default EmailInput