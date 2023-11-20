import { useState } from "react"

const PaymentInput = () => {

const [selectedPayment, setSelectedPayment] = useState('Card')


	const onPaymentChange = () => {
		setSelectedPayment(event.target.value)
	}

	return(
		<div id="payment-input-container">
			<label>
						<input 
							type="radio" 
							name="payment" 
							value='Card' 
							checked= {selectedPayment === 'Card'}
							onChange={onPaymentChange}/>
						Betala med kort
						<p>fyll i dina kortuppgifter</p>
					</label>
					<label>
						<input 
							type="radio" 
							name="payment" 
							value='Swish'
							checked= {selectedPayment === 'Swish'}
							onChange={onPaymentChange} />
						Swish
						<p>Fyll i ditt telefonnumer</p>
					</label>
					<label>
						<input 
							type="radio" 
							name="payment" 
							value='Klarna'
							checked= {selectedPayment === 'Klarna'}
							onChange={onPaymentChange} />
						Klarna
					</label>
		</div>
	)
}

export default PaymentInput