import { useRecoilState } from "recoil"
import { costumerAtom } from "../../../data/atom"

const PhoneInput = () => {
	const [costumer, setCostumer] = useRecoilState(costumerAtom)


	const handlePhoneChange = () => {
		setCostumer({...costumer, phone: event.target.value})
	}
	return(
	<div className="">
		<label htmlFor="phone" ></label>
		<input 
			className=""
			type="tel"
			value={costumer.phone}
			id="phone"
			placeholder="*Telefonnummer"
			onChange={handlePhoneChange}
			required />
		<div className="order-error-message-container"></div>	
	</div>

	)
} 

export default PhoneInput