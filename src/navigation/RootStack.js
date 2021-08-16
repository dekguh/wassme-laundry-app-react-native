import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { connect } from 'react-redux'
import SplashScreen from '../components/screens/SplashScreen'
import DashboardStack from './DashboardStack'
import AuthStack from './AuthStack'
import { updateIsLoadingAct, updateIsLoginAct } from '../redux/user/action'
import { getJwtStorage, removeJwtStorage, setJwtStorage } from '../storage'

const Stack = createNativeStackNavigator()

const RootStack = ({ isLogin, isLoading, updateIsLogin, updateIsLoading }) => {
    useEffect(() => {
        const checkJwt = async () => {
            await removeJwtStorage()
            const jwt = await getJwtStorage()
            if(jwt) updateIsLogin(true)
            if(!jwt) updateIsLogin(false)
            return updateIsLoading(false)
        }
        setTimeout(() => checkJwt(), 3000)
    }, [])

    return (
    <NavigationContainer>
        {isLoading
        ? (<SplashScreen />)
        : isLogin ? (<DashboardStack />) : (<AuthStack />)}
    </NavigationContainer>
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.user.isLogin,
        isLoading: state.user.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateIsLogin: status => dispatch(updateIsLoginAct(status)),
        updateIsLoading: status => dispatch(updateIsLoadingAct(status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootStack)
