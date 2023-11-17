import burgersStart from "../Assets/burgerstart-desktop.svg"
import splashBurger from "../Assets/Splashburger.svg"
import tomatoes from "../Assets/tomatoes_hand.avif"
import cows from "../Assets/Kossor.svg"
import { IoFastFoodOutline } from "react-icons/io5"
// import Floater from "../Components/Floater"
import "./startpage.css"

// const handleFabClick = () => {
// 	console.log("FAB Clicked!")
// }

const Startpage = () => {
	return (
		<section className="startingpage">
			<div className="hero-img-container">
				<img src={burgersStart} />
				<h2 className="head_bliss">FEEL THE BLISS!</h2>
			</div>

			<section className="landingpage_text_container">
				<div className="order_here_container">
					<p className="text_padding">
						Klimatsmarta burgare för din skull. Beställ enkelt
						online och hämta på plats.
					</p>
					<button className="floater-btn">
						BESTÄLL <IoFastFoodOutline className="order_icon" />
					</button>
				</div>
				{/* <Floater onClick={handleFabClick} /> */}
				<h2>NYHET!</h2>
				<div>
					<p className="news text_padding">
						Ligg i framkant med oss och kolla in vår nya burgare{" "}
						<span className="strong">"Bliss Future Burger"</span>{" "}
						med 3D-printant kött.
					</p>
				</div>
			</section>

			<section id="about_us" className="about_us_container">
				<h2>OM OSS</h2>
				<div className="destination_text">
					<p className="text_padding ">
						BurgerBliss är din destination för nyskapande och
						utsökta hamburgare. Vår passion för god mat och
						hållbarhet möts i varje tugga. Grundat år 2023, strävar
						vi efter att erbjuda en enastående matupplevelse som
						inte bara smakar fantastiskt, utan också speglar vårt
						engagemang för miljön.
					</p>
				</div>

				<div className="destination_text_3D">
					<p className="text_padding ">
						Vår meny är noggrant sammansatt för att tillgodose alla
						smaker och preferenser. Från saftiga 3D-utskrivna
						köttalternativ till kreativa vegetariska burgare som
						utforskar spännande smakkombinationer, har vi något för
						alla. Vår mat tillagas med kärlek och omsorg, och vi
						använder endast de färskaste ingredienserna för att
						säkerställa en överlägsen smakupplevelse.
					</p>
				</div>

				<div className="align_imgs splashburger_img">
					<img src={splashBurger} />
				</div>

				<div className="align_imgs welcome_text">
					<p className="text_padding ">
						Välkommen till BurgerBliss där du kan njuta av
						fantastiska burgare som inte bara gör dina smaklökar
						glada utan även din själ. Vi ser fram emot att servera
						dig med kärlek och omsorg i en mysig atmosfär. Tack för
						att du är en del av vår resa mot ett mer hållbart
						matlandskap.
					</p>
				</div>

				<div className="align_imgs tomatoes_img">
					<img src={tomatoes} />
				</div>

				<h3 className="head_sustainability">VÅR HÅLLBARHETSMISSION</h3>
				<div className="text">
					<p className="text_padding sus_one ">
						<span> 1. Miljövänlig matlagning:</span> På BurgerBliss
						är vi passionerade när det gäller att skapa de mest
						utsökta burgarna samtidigt som vi arbetar för att minska
						vår miljöpåverkan. Vi källsorterar vårt avfall noggrant,
						använder energieffektiva apparater i vår restaurang och
						samarbetar nära lokala bönder för att minska vårt
						koldioxidavtryck.
					</p>
				</div>
				<div>
					<p className="text_padding sus_two">
						<span> 2. Plastminimering:</span> Vi arbetar aktivt på
						att minska vår användning av engångsplast i våra
						förpackningar och uppmanar våra gäster att vara med oss
						i detta arbete genom återanvändning och återvinning.
						Tillsammans strävar vi mot en mer hållbar framtid.
					</p>
				</div>
				<div className="align_imgs cows_img">
					<img src={cows} />
				</div>
				<div>
					<p className="text_padding sus_three">
						<span> 3. 3D-utskrivet kött:</span> Vi är stolta över
						att erbjuda 3D-utskrivet kött som ett alternativ. Detta
						är ett mer hållbart val som kräver betydligt färre
						naturresurser och mark än traditionell köttproduktion,
						samtidigt som det levererar den fantastiska
						smakupplevelse du förväntar dig.
					</p>
				</div>
			</section>
		</section>
	)
}

export default Startpage
