import "./cashier.css"
 import KeepLoggedIn from "../Login/keepLoggedIn";


const Cashier = () => {
	
	return (
		<section className="cashier_page">
		<KeepLoggedIn/>
		<p>Kassa</p>
		<h1>Beställningar</h1>
		<div className="costumer_order_container">
			<div className="costumer_order_card">
				<p className="order_number">"ordernummer"</p>
				<p className="order_dish">"vara"</p>
				<div className="changes">
					<p>"eventuella ändringar"</p>
				</div>
				<div className="send_btn"><button> SKICKA TILL KÖKET </button></div>
			</div>
		</div>
		</section>
	)
}

export default Cashier


