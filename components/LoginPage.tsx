import React from 'react'
import {SetState, hash, isAlphaNumeric, isMaxLength, isNotEmpty, CallAPIToJson, RestfulType} from './Utilities';
import Icons from './Icons';
import UserObject from './UserObject';

import { RootNavPages } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { GlobalStyle, Colors, rem, remText } from '../AppStyles';
import { FrontPagesNav, InputGroup } from './FrontPagesUtilities';

const LoginStyle = StyleSheet.create({
    loginPage: {
        ...GlobalStyle.col, 
        ...GlobalStyle.centerCross, 
        ...GlobalStyle.pageStyle,
        width: "100%",
        backgroundColor: Colors.indigo[100]
    },

    logoContainer: {
        opacity: 0.75,
        width: '100%',
        marginBottom: rem(2),
        ...GlobalStyle.row, 
        ...GlobalStyle.centerAll, 
        ...GlobalStyle.spacer
    }
});

function LoginPage(){
    let [username, setUsername] = React.useState("");
    let [password, setPassword] = React.useState("");

    const navigation = useNavigation();

    const validateLogin = () => {

        let labelToValue: {[name: string]: string} = {
            "username": username,
            "password": password
        };
        let maxLength = 20;
        for (let [label, value] of Object.entries(labelToValue))
        {   
            if (!isNotEmpty(value)) throw Error(`Field '${label}' cannot be empty`);

            if (!isAlphaNumeric(value)) throw Error(`Field '${label}' is not alpha numeric`);

            if (!isMaxLength(value, maxLength)) throw Error(
                `Field '${label}' is too long, keep to within ${maxLength} characters`
            );
        }
    }

    const login = async (): Promise<void> => {

        try {
            validateLogin();
        } catch (e: any){
            return alert(e.message);
        }

        let passwordHashed: string = await hash(password);

        try {
            let loginEndpoint = `
                /login/${username}
                /password/${passwordHashed}
            `;
            await CallAPIToJson(loginEndpoint, RestfulType.GET);
        } catch (e: any){
            console.log(e.message);
            alert("Login failed.");
            return;
        }
        UserObject.set(username, passwordHashed);
        navigation.navigate(RootNavPages.MainPage);
    }

    return <View style={[LoginStyle.loginPage]}>
        <Text style={GlobalStyle.h1}>Login</Text>

        <InputGroup label='username' setState={setUsername}/>
        <InputGroup label='password' setState={setPassword} isPassword={true}/>

        <View style={[LoginStyle.logoContainer]}>
            {Icons.LogoNoText}
        </View>

        <FrontPagesNav 
                mainButton={{
                    label: "login", 
                    clickHandler: login
                }}
                secondaryButton={{
                    label: "back",
                    clickHandler: () => navigation.navigate(RootNavPages.FrontPage)
                }}
                reversed={true}
            />

    </View>;
}

export default LoginPage;