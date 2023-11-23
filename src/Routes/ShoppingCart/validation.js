
//function for firstname-input
function isValidName(firstName) {
    const nonLetter = /^[a-zA-Z\s]*$/; 
    if(!nonLetter.test(firstName)) {
        return [false, 'Namnet får endast innehålla bokstäver']; 
    }
    if(firstName.length > 30) {
        return [false, 'Namnet får ha högst 30 bokstäver.']; 
    }
    if(firstName !== firstName.trim()) {
        return [false, 'Namnet får inte börja med eller sluta med mellanslag.']; 
    }
	if (firstName.length < 2 ) {
		return [false, 'Namnet måste innehålla minst 2 bokstäver.']
	}
	return [true, '']
}

export {isValidName} 