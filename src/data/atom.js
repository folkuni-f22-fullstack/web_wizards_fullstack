import { atom } from "recoil";


// atomer för personal-inloggning

export const uNameAtom = atom ({
	key:'userName',
	default: '',
})

export const uPassAtom = atom ({
	key: 'userPass',
	default: '',
})

export const formIsDirtyAtom = atom ({
	key: 'formIsDirty',
	default: false,
})

export const isLoggedInAtom = atom ({
	key: 'isLoggedIn',
	default: false,
})

export const isLoggingOutAtom = atom ({
	key: 'isLoggingOut',
	default: false,
})

export const isDisabledAtom = atom ({
	key: 'isDisabled',
	default: false,
})

// atomer för kundvagn

export const cartItemsAtom = atom ({
	key: 'cartItem',
	default: []
})



// atomer för order-formulär

export const costumerAtom = atom ({
	key: 'costumer',
	default: {
		firstName: '',
		familyName: '',
		phone: '',
		email: '',
	}
})

export const errorMessageAtom = atom({
    key: 'error', 
    default: {
		firstName: '', 
		familyName: '', 
		phone: '', 
		email: '', 
	}
}); 

export const isValidAtom = atom({
	key: 'isValidKey',
	default: null,
})

export const isValidPhoneAtom = atom({
	key: 'isValidPhone',
	default: null,
})

export const isValidEmailAtom = atom({
	key: 'isValidEmail', 
	default: null, 
})

