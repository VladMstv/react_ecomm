import { FirebaseOptions, getApp, initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	User,
} from 'firebase/auth'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'
import AppUser from 'models/user.model'

const config: FirebaseOptions = {
	apiKey: 'AIzaSyDbyTWodl9HsKYBisvQ8Jx2bTe3Rq3Sh80',
	authDomain: 'reactozo.firebaseapp.com',
	projectId: 'reactozo',
	storageBucket: 'reactozo.appspot.com',
	messagingSenderId: '558177865850',
	appId: '1:558177865850:web:d1afbc4f10864d934d6bc3',
}

initializeApp(config)

const app = getApp()
const firestore = getFirestore(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export default class FirebaseUtil {
	public static auth = auth

	public static SignInWithGoogle = () => signInWithPopup(auth, googleProvider)

	public static async SignOut() {
		return this.auth.signOut()
	}

	public static async CreateUserProfileDocument(userAuth: User) {
		const userRef = doc(firestore, `users/${userAuth.uid}`)
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
		console.log(snapshot.data())
		return userRef
	}

	public static async CreateUserWithEmailAndPassword(
		{
			email,
			password,
		}: {
			email: string
			password: string
		},
		userDetails?: Partial<AppUser>
	) {
		let user: User
		try {
			user = (await createUserWithEmailAndPassword(auth, email, password)).user
			if (userDetails) {
				user = {
					...user,
					displayName: userDetails.displayName || '',
				}
			}
			return await this.CreateUserProfileDocument(user)
		} catch (error: any) {
			console.error('Error creating user', error.message)
		}
		return undefined
	}

	public static SignInWithEmailAndPassword = signInWithEmailAndPassword.bind(
		null,
		auth
	)
}
