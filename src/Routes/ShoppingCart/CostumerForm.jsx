import EmailInput from "./costumerInputfields/EmailInput"
import FamilyNameInput from "./costumerInputfields/FamilyNameInput"
import FirstNameInput from "./costumerInputfields/FirstNameInput"
import PhoneInput from "./costumerInputfields/PhoneInput"

// TODO css för formuläret, lägg till rubrik!

const CostumerForm = () => {



	return(
		<div>
			<form action="#">
				<FirstNameInput/>
				<FamilyNameInput/>
				<PhoneInput/>
				<EmailInput/>
			</form>
		</div>
	)
}

export default CostumerForm