import "./confirmation.css"
import { FiRefreshCcw } from "react-icons/fi" 

// Behöver importera datan från varukorgen så att vi kan mappa ut den.

// eventuella states som kan behövas för att rendera om beställningen är öppen eller låst: 

const [openOrder, setOpenOrder ] = usestate()
const [ OrderLocked, setOrderLocked ] = usestate()

const Confirmation = () => {
	return (
		<section className="confirmation_container">
			<div className="update-container">
				<button className="update-button">
                        <FiRefreshCcw />
                </button>
			</div>
			<h1 className="head_confirmation">Bekräftelse</h1>
			<div className="order_confirmation_info">
				{/* Här vill vi att det ska renderas olika texter beroende på om beställningen är öppen eller låst */}
					<h2>Ordernummer: </h2>
				<div className="open_order_text">
					<h3>Nu är din order skickad till restaurangen.</h3>
					
					<p> Vill du ändra något i din beställning? </p>
					<p>Passa på nu innan beställningen blir låst.</p>
				</div>
				{/* <div className="locked_order_text">
					<h3>Nu är din beställning låst och maten tillagas</h3>
				</div> */}

			</div>
			
				<h3 className="head_your_order">Din beställning: </h3>

			<div>
				{/* // Här ska vi mappa ut det som ligger i varukorgen // */}
			</div>

		</section>
	)
}

export default Confirmation
