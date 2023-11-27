import EmailInput from "./costumerInputfields/EmailInput"
import FamilyNameInput from "./costumerInputfields/FamilyNameInput"
import FirstNameInput from "./costumerInputfields/FirstNameInput"
import PhoneInput from "./costumerInputfields/PhoneInput"
import PaymentInput from "./costumerInputfields/PaymentInput"


const CostumerForm = () => {

	return(
		<section className="order-form-section">
			<form action="#" className="costumer-form">					
				<h3>Dina uppgifter</h3>
				<div className="card-container costumer-info-container" >
					<FirstNameInput/>
					<FamilyNameInput/>
					<PhoneInput/>
					<EmailInput/>
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