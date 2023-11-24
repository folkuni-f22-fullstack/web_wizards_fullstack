import { useRecoilState } from "recoil"
import { costumerAtom } from "../../../data/atom"


const FamilyNameInput = () => {

	const [costumer, setCostumer] = useRecoilState(costumerAtom)

	const handleNameChange = () => {
		setCostumer({...costumer, familyName: event.target.value})
	}

	return (
		<div className="">
					<label htmlFor="family-name" ></label>
					<input 
						className=""
						type="text"
						value={costumer.familyName}
						id="family-name"
						placeholder="*Efternamn"
						onChange={handleNameChange}
						required />
				</div>
	)
}

export default FamilyNameInput