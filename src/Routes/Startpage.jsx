import burgersStart from '../Assets/burgersstart.svg'
import splashBurger from '../Assets/Splashburger.svg'
import tomatoes from '../Assets/Tomater.svg'
import cows from '../Assets/Kossor.svg'
import { IoFastFoodOutline } from 'react-icons/io5'

import './startpage.css'

const Startpage = () => {
	return (
		<section className='startingpage'>
		<section className='landingpage_text_container'>
			<div>
				<img src={burgersStart} /><h3>FEEL THE BLISS</h3>
			</div>

			<div>
				<h4>
					Klimatsmarta burgare för din skull. Beställ enkelt online och hämta på plats.
				</h4>
				<button className='floater-btn'>BESTÄLL <IoFastFoodOutline />
				</button>
			</div>

			<h2>NYHET!</h2>
			<div>
				<p>Ligg i framkant med oss och kolla in vår nya burgare <span>"Bliss Future Burger"</span>med 3D-printant kött.</p>
			</div>

		</section>

		<section className='about_us_container'>
			<h2>OM OSS</h2>
			<div>
				<p>BurgerBliss är din destination för nyskapande och utsökta hamburgare. Vår passion för god mat och hållbarhet möts i varje tugga. Grundat år 2023, strävar vi efter att erbjuda en enastående matupplevelse som inte bara smakar fantastiskt, utan också speglar vårt engagemang för miljön.</p>
			</div> 
			
			<div>
				<p>Vår meny är noggrant sammansatt för att tillgodose alla smaker och preferenser. Från saftiga 3D-utskrivna köttalternativ till kreativa vegetariska burgare som utforskar spännande smakkombinationer, har vi något för alla. Vår mat tillagas med kärlek och omsorg, och vi använder endast de färskaste ingredienserna för att säkerställa en överlägsen smakupplevelse.</p>
			</div>

			<div><img src={splashBurger}/></div>
			<div>
				<p>På BurgerBliss är vi fast beslutna att minska vår miljöpåverkan. Vi arbetar aktivt med att minska avfallet, använda energieffektiva apparater och samarbeta med lokala leverantörer för att främja en hållbar framtid. Vi tror att utsökt mat och miljömedvetenhet kan gå hand i hand.</p>
			</div>
			
			<div>
				<p>Välkommen till BurgerBliss där du kan njuta av fantastiska burgare som inte bara gör dina smaklökar glada utan även din själ. Vi ser fram emot att servera dig med kärlek och omsorg i en mysig atmosfär. Tack för att du är en del av vår resa mot ett mer hållbart matlandskap.</p>
			</div>

			<div><img src={tomatoes} /></div>

			<h3>VÅR HÅLLBARHETSMISSION</h3>
			<div>
				<p><span>Miljövänlig matlagning:</span> På BurgerBliss är vi passionerade när det gäller att skapa de mest utsökta burgarna samtidigt som vi arbetar för att minska vår miljöpåverkan. Vi källsorterar vårt avfall noggrant, använder energieffektiva apparater i vår restaurang och samarbetar nära lokala bönder för att minska vårt koldioxidavtryck.</p>
			</div>
			<div>
				<p><span>Plastminimering:</span> Vi arbetar aktivt på att minska vår användning av engångsplast i våra förpackningar och uppmanar våra gäster att vara med oss i detta arbete genom återanvändning och återvinning. Tillsammans strävar vi mot en mer hållbar framtid.</p>
			</div>
			<div>
				<img src={cows}/>
			</div>
			<div>
				<p><span>3D-utskrivet kött:</span> Vi är stolta över att erbjuda 3D-utskrivet kött som ett alternativ. Detta är ett mer hållbart val som kräver betydligt färre naturresurser och mark än traditionell köttproduktion, samtidigt som det levererar den fantastiska smakupplevelse du förväntar dig.</p>
			</div>

		</section>
		</section>
	)
}

export default Startpage
