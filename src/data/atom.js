import { atom } from "recoil";


export const uNameAtom = atom ({
	key:'userName',
	default: '',
})

export const uPassAtom = atom ({
	key: 'userPass',
	default: '',
})