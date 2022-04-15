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
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	onSnapshot,
	query,
	setDoc,
	writeBatch,
} from 'firebase/firestore'
import Product from 'models/product.model'
import ShopDataCategory from 'models/shop-data-category.model'
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

export const addCollectionAndDocuments = async (
	collectionKey: string,
	objectsToAdd: any[],
	idField: string
) => {
	const collectionRef = collection(firestore, collectionKey)

	const batch = writeBatch(firestore)

	objectsToAdd.forEach(obj => {
		const docRef = doc(collectionRef, obj[idField].toLowerCase())
		batch.set(docRef, obj)
	})

	await batch.commit()
}

export const getCollectionsAndDocuments = async () => {
	const collectionRef = collection(firestore, 'categories')

	const q = query(collectionRef)

	const querySnapshop = await getDocs(q)

	const categoryDocsMap = querySnapshop.docs.reduce(
		(acc: { [id: string]: Product[] }, docSnapshot) => {
			const { title, items } = docSnapshot.data() as ShopDataCategory
			acc[title.toLowerCase()] = items
			return acc
		},
		{}
	)
	return categoryDocsMap
}

export const getCollectionDocuments = async (collectionKey: string) => {
	const collectionRef = collection(firestore, 'categories', collectionKey)

	const q = query(collectionRef)

	const querySnapshop = await getDocs(q)

	const items = querySnapshop.docs.map(x => x.data()) as Product[]

	return items
}
