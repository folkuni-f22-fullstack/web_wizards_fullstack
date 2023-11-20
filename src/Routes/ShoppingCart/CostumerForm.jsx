import EmailInput from "./costumerInputfields/EmailInput"
import FamilyNameInput from "./costumerInputfields/FamilyNameInput"
import FirstNameInput from "./costumerInputfields/FirstNameInput"
import PhoneInput from "./costumerInputfields/PhoneInput"
import './ShoppingCart.css'

// TODO css för formuläret, lägg till rubrik!

const CostumerForm = () => {



	return(
		<section className="order-section">
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
					<label>
						<input type="radio" value='Betala med kort' />
						Betala med kort
						<p>fyll i dina kortuppgifter</p>
					</label>
					<label>
						<input type="radio" value='Swish' />
						Swish
						<p>Fyll i ditt telefonnumer</p>
					</label>
					<label>
						<input type="radio" value='Klarna' />
						Klarna
					</label>
				</div>
			</form>
		</section>
	)
}

export default CostumerForm