import { useRecoilState } from "recoil"
import { costumerAtom } from "../../../data/atom"

const EmailInput = () => {

	const [costumer, setCostumer] = useRecoilState(costumerAtom)

	const handleEmailChange = () => {
		setCostumer({...costumer, email: event.target.value})
	}

	return(
		<div className="">
			<label htmlFor="email" ></label>
			<input 
				className=""
				type="e-mail"
				value={costumer.email}
				id="email"
				placeholder="*E-post"
				onChange={handleEmailChange}
				required />
			<div className="order-error-message-container"></div>		
		</div>

	)
}

export default EmailInput