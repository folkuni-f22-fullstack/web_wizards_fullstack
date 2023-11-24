import "./Chef.css"
import KeepLoggedIn from "../../utils/KeepLoggedIn";

const Chef = () => {
	return (
		<section className="chef_container">
		<KeepLoggedIn/>
		<p>Kocken</p>
		<h1>Beställningar</h1>
		<div className="costumer_order_container">
			<div className="costumer_order_card">
				<p className="order_number">"ordernummer"</p>
				<p className="order_dish">"vara"</p>
				<div className="changes">
					<p>"eventuella ändringar"</p>
				</div>
				<div className="send_btn"><button> ORDER REDO</button></div>
			</div>
		</div>
		</section>
	)
}

export default Chef
