import { FirebaseOptions, initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	Unsubscribe,
	User,
} from 'firebase/auth'
import {
	doc,
	getDoc,
	getFirestore,
	onSnapshot,
	setDoc,
} from 'firebase/firestore'
import AppUser from 'models/user.model'
import { setUser } from 'redux/user/user.actions'

const config: FirebaseOptions = {
	apiKey: 'AIzaSyDbyTWodl9HsKYBisvQ8Jx2bTe3Rq3Sh80',
	authDomain: 'reactozo.firebaseapp.com',
	projectId: 'reactozo',
	storageBucket: 'reactozo.appspot.com',
	messagingSenderId: '558177865850',
	appId: '1:558177865850:web:d1afbc4f10864d934d6bc3',
}

initializeApp(config)

const firestore = getFirestore()
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const sgnInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signOut = () => auth.signOut()

export const createUserProfileDocument = async (userAuth: User) => {
	const userRef = doc(firestore, `users`, userAuth.uid)
	const snapshot = await getDoc(userRef)

	if (!snapshot.exists()) {
		const { displayName, email } = userAuth

		try {
			await setDoc(userRef, {
				displayName,
				email,
				createdDate: new Date(),
			})
		} catch (error: any) {
			console.error('Error creating user', error.message)
		}
	}
	return userRef
}

export const createUserWithEmailPassword = async (
	{
		email,
		password,
	}: {
		email: string
		password: string
	},
	userDetails?: Partial<AppUser>
) => {
	let user: User
	try {
		user = (await createUserWithEmailAndPassword(auth, email, password)).user
		if (userDetails) {
			user = {
				...user,
				displayName: userDetails.displayName || '',
			}
		}
		return await createUserProfileDocument(user)
	} catch (error: any) {
		if (error.code === 'auth/email-already-in-use') {
			alert('Such an email is already taken')
		} else {
			console.error('Error creating user', error)
		}
	}
	return undefined
}

export const ObserveUserAuthStateChange = (
	setCurrentUser: typeof setUser
): Unsubscribe =>
	auth.onAuthStateChanged(async user => {
		if (user) {
			const userRef = await createUserProfileDocument(user)
			onSnapshot(userRef, {
				next: snapshot => {
					setCurrentUser({
						id: snapshot.id,
						...(snapshot.data() as Omit<AppUser, 'id'>),
					})
				},
			})
		} else {
			setCurrentUser(null)
		}
	})
