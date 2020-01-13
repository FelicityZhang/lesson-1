import React, { useEffect, useState } from 'react'
import app from './firebase'

export const AuthContext = React.createContext()

export const AuthProvider = ( { children } ) => {
    const [ currentUser, setCurrentUser ] = useState( null )

    useEffect( () => {
        app.auth().onAuthStateChanged( setCurrentUser )
    }, [] )

    return <AuthContext.Provider value={ { currentUser } }>
        { children }
    </AuthContext.Provider>

}















// export const EmailProvider = ( email ) => {
//     var actionCodeSettings = {
//         url: 'http://localhost:3001/',
//         handleCodeInApp: true,
//         iOS: {
//             bundleId: 'com.example.ios'
//         },
//         android: {
//             packageName: 'com.example.android',
//             installApp: true,
//             minimumVersion: '12'
//         },
//         dynamicLinkDomain: 'example.page.link'
//     };

//     app.auth().sendSignInLinkToEmail( email, actionCodeSettings )
//         .then( function () {
//             window.localStorage.setItem( 'emailForSignIn', email )
//         } )
//         .catch( function ( error ) {
//         } );

// }