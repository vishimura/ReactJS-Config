import React from 'react';
import App from './app'
import Auth from './components/auth/auth'

const AuthOrApp = () => {
    const user: boolean = false;
    if(user){
        return <App/>
    }else{
        return <Auth/>
    }
}

export default AuthOrApp;
