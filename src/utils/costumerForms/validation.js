
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

function isValidPhoneNumber(fullPhoneNumber)  {
        for(let i = 0; i < fullPhoneNumber.length; i++) {
            let n = fullPhoneNumber.charAt(i)
            if(!/^[0-9-]*$/.test(n)) {
                return [false, 'Vänligen använd bara siffror och bindestreck'];
            }
        }
        if(fullPhoneNumber.length < 10) {
            return [false, 'Minst 10 siffror tack.'];
        }
        return [true, '']
}

function isValidEmail(email) {
    const emailPattern = /^\w+@\w+\.\w+$/; 
    if(emailPattern.test(email)) {
        return [true, '']
    } else {
        return [false, 'Vänligen använd rätt format för e-postadressen. ']
    }

}

export {isValidName, isValidPhoneNumber, isValidEmail} 