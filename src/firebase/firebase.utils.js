import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBvUk4LP7FxqeuLVg3uhjTEejNRFgC69y4",
    authDomain: "crwn-db-f7911.firebaseapp.com",
    databaseURL: "https://crwn-db-f7911.firebaseio.com",
    projectId: "crwn-db-f7911",
    storageBucket: "crwn-db-f7911.appspot.com",
    messagingSenderId: "317196120806",
    appId: "1:317196120806:web:c7fc4befd9c67068c64127",
    measurementId: "G-229PJBQ2L2"
}

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()

    if (!snapShot.exists) {
        // if the user does not already exists, create them
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({
                displayName,
                email, 
                createdAt, 
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user: ', error)
        }
    }
    
    return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()



const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
