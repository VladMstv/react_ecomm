import { FirebaseOptions, initializeApp } from 'firebase/app'
import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	User,
} from 'firebase/auth'
import {
	collection,
	doc,
	DocumentData,
	DocumentReference,
	DocumentSnapshot,
	getDoc,
	getDocs,
	getFirestore,
	query,
	setDoc,
	writeBatch,
} from 'firebase/firestore'
import Product from 'models/product.model'
import ShopDataCategory from 'models/shop-data-category.model'
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

const firestore = getFirestore()
const googleProvider = new GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

export const signInWithEmailNPassword = (email: string, password: string) =>
	signInWithEmailAndPassword(auth, email, password)

export const signOut = () => auth.signOut()

export const getUserDocAndSnapshotFromUserAuth = async (
	userAuth: User
): Promise<
	[DocumentReference<DocumentData>, DocumentSnapshot<DocumentData>]
> => {
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
	return [userRef, snapshot]
}

export const getAppUserFromUserAuth = async (
	userAuth: User
): Promise<AppUser> => {
	const [document, snapshot] = await getUserDocAndSnapshotFromUserAuth(userAuth)
	return {
		id: document.id,
		...(snapshot.data() as Omit<AppUser, 'id'>),
	} as AppUser
}

export type UserAdditionalDetails = Pick<AppUser, 'displayName'>

export const createUserWithEmailPassword = async (
	{
		email,
		password,
	}: {
		email: string
		password: string
	},
	userDetails?: UserAdditionalDetails
): Promise<AppUser> => {
	let user: User
	user = (await createUserWithEmailAndPassword(auth, email, password)).user
	if (userDetails) {
		user = {
			...user,
			...userDetails,
		}
	}
	return getAppUserFromUserAuth(user)
}

type ObjectToAdd = {
	title: string
}

export const addCollectionAndDocuments = async (
	collectionKey: string,
	objectsToAdd: ObjectToAdd[]
): Promise<void> => {
	const collectionRef = collection(firestore, collectionKey)

	const batch = writeBatch(firestore)

	objectsToAdd.forEach(obj => {
		const docRef = doc(collectionRef, obj.title.toLowerCase())
		batch.set(docRef, obj)
	})

	await batch.commit()
}

export const getCollectionsAndDocuments = async (): Promise<
	ShopDataCategory[]
> => {
	const collectionRef = collection(firestore, 'categories')

	const q = query(collectionRef)

	const querySnapshop = await getDocs(q)

	const categoryDocs = querySnapshop.docs.map(
		docSnapshot => docSnapshot.data() as ShopDataCategory
	)
	return categoryDocs
}

export const getCollectionDocuments = async (
	collectionKey: string
): Promise<Product[]> => {
	const collectionRef = collection(firestore, 'categories', collectionKey)

	const q = query(collectionRef)

	const querySnapshop = await getDocs(q)

	const items = querySnapshop.docs.map(x => x.data()) as Product[]

	return items
}

export const getCurrentUserPromise = (): Promise<User | null> =>
	new Promise<User | null>((resolve, reject) => {
		const unsubscribe = onAuthStateChanged(
			auth,
			userAuth => {
				unsubscribe()
				resolve(userAuth)
			},
			reject
		)
	})
