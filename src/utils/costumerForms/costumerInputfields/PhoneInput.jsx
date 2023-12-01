import { useRecoilState } from "recoil"
import { costumerAtom, errorMessageAtom, isValidPhoneAtom } from "../../../data/atom"
import { isValidPhoneNumber } from "../validation.js"

const PhoneInput = () => {
	const [costumer, setCostumer] = useRecoilState(costumerAtom)
	const [isValid, setIsValid] = useRecoilState(isValidPhoneAtom)
	const [errorMessage, setErrorMessage] = useRecoilState(errorMessageAtom)


	const handlePhoneChange = (event) => {
		setCostumer({...costumer, phone: event.target.value})
	}

	const handleTelBlur = (event) => {
		const phone = event.target.value; 
		const [isValidResult, error] = isValidPhoneNumber(phone)
		if(isValidResult) {
			setErrorMessage(prev => ({...prev, phone: ''}));; 
			setIsValid(true); 
		} else {
			setErrorMessage(prev => ({...prev, phone: error})); ; 
			setIsValid(false); 
		}
	}

	return(
	<div className="">
		<label htmlFor="phone" ></label>
		<input 
			className={isValid === null ? '' : (isValid ? 'isvalid-input' : 'invalid-input')}
			type="tel"
			value={costumer.phone}
			id="phone"
			placeholder="*Telefonnummer"
			onChange={handlePhoneChange}
			onBlur={handleTelBlur}
			required />
			<div className="order-error-message-container">{errorMessage.phone}</div>
	</div>

	)
} 

export default PhoneInput