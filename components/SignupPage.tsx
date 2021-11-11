import React from 'react';
import {SetState, Ref, hash, isAlphaNumeric, isMaxLength, isNotEmpty, CallAPIToJson, RestfulType} from './Utilities';

import { RootNavPages } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { GlobalStyle, Colors, rem, remText } from '../AppStyles';
import { FrontPagesNav, InputGroup } from './FrontPagesUtilities';

function SignupPage(){
    const navigation = useNavigation();
    
    let [username, setUsername] = React.useState("");
    let [nickname, setNickname] = React.useState("");
    let [password, setPassword] = React.useState("");
    let [password2, setPassword2] = React.useState("");

    const validateSignup = () => {

        let labelToValue: {[name: string]: string} = {
            "username": username,
            "password": password,
            "nickname": nickname,
            "retyped password": password2
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

        if (password !== password2) throw Error("Passwords don't match");
    }

    const signup = async (): Promise<void> => {

        try {
            validateSignup();
        } catch (e: any){
            return alert(e.message);
        }

        let passwordHashed = await hash(password);
        try {
            await CallAPIToJson(`
                /register/${username}
                /nickname/${nickname}
                /password/${passwordHashed}
            `, RestfulType.PUT);
            alert("Register successful!");
            navigation.navigate(RootNavPages.LoginPage);
        } catch {
            alert("Register failed.");
        }
    }

    return <View style={SignupStyle.signupPage}>
        <Text style={GlobalStyle.h1}>Signup</Text>

        <InputGroup label='username' setState={setUsername}/>
        <InputGroup label='nickname' setState={setNickname}/>

        <InputGroup label='password' setState={setPassword} isPassword={true} labelColor={Colors.grey[800]} fillColor={Colors.indigo[100]}/>
        <InputGroup label='retype password' setState={setPassword2} isPassword={true} labelColor={Colors.grey[800]} fillColor={Colors.indigo[100]}/>

        <View style={GlobalStyle.spacer}></View>

        <FrontPagesNav 
            secondaryButton={{
                label: "back", 
                clickHandler: () => navigation.navigate(RootNavPages.FrontPage)
            }}
            mainButton={{
                label: "sign up",
                clickHandler: () => signup()
            }}
            reversed={true}
        />
    </View>;
}


const SignupStyle = StyleSheet.create({
    signupPage: {
        ...GlobalStyle.col, 
        ...GlobalStyle.centerCross, 
        ...GlobalStyle.pageStyle,
        backgroundColor: Colors.grey[200],
        width: "100%"
    }
});


export default SignupPage;