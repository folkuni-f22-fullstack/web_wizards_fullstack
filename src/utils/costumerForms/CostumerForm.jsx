import EmailInput from "./costumerInputfields/EmailInput"
import FamilyNameInput from "./costumerInputfields/FamilyNameInput"
import FirstNameInput from "./costumerInputfields/FirstNameInput"
import PhoneInput from "./costumerInputfields/PhoneInput"
import PaymentInput from "./costumerInputfields/PaymentInput"
import { useRecoilState } from "recoil"
import { costumerAtom } from "../../data/atom"


const CostumerForm = () => {
	const [userInput, setUserInput] = useRecoilState(costumerAtom)
	const handleInputChange = (event) => {
		const {name, value} = event.target

		setUserInput((prevUserInput) => ({
			...prevUserInput,
			[name]: value,
		}))
		console.log(event.target.value)
	}

	return(
		<section className="order-form-section">
			<form action="#" className="costumer-form">					
				<h3>Dina uppgifter</h3>
				<div className="card-container costumer-info-container" >
					<FirstNameInput type='text' name='firstname' onchange={handleInputChange}/>
					<FamilyNameInput type='text' name='familyname' onchange={handleInputChange}/>
					<PhoneInput type='text' name='phone' onchange={handleInputChange}/>
					<EmailInput type='text' name='email' onchange={handleInputChange}/>
				</div>
			</form>
			<form action="#" className="costumer-form">
				<h3>Betalningssätt</h3>
				<div className="card-container costumer-info-container payment-container" >
					<PaymentInput/>
				</div>
			</form>
		</section>
	)
}

export default CostumerForm