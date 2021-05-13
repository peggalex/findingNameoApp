import React from 'react'
import {SetState, hash, waitForAjaxCall} from './Utilities';
import Icons from './Icons';
import UserObject from './UserObject';

import { MainNav } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from '../components/Themed';
import { GlobalStyle, TailwindColors, rem, remText } from '../AppStyles';
import { FrontPagesNav } from './FrontPagesNav';

const LoginPageStyles = StyleSheet.create({
    loginPage: {
        width: "100%",
        backgroundColor: TailwindColors.indigo[100]
    },

    title: {
        fontSize: remText(5),
        margin: 16,
        fontWeight: "bold",
        color: TailwindColors.grey[800],
        textAlign: 'center'
    },

    logoContainer: {
        flexGrow: 1,
        height: rem(17),
        opacity: 0.75,
        marginTop: rem(1),
        marginBottom: rem(1)
    },

    buttons_button: {
        width: '40%',
        height: 52.5,
        borderRadius: 10,
        fontSize: 32,
        fontWeight: '300',
        textAlign: 'center',
        padding: 5
    },

    signup: {
        backgroundColor: 'white',
        color: TailwindColors.indigo[700]
    },

    inputLabel: {
        color: TailwindColors.indigo[700],
        textAlign: 'center',
        fontSize: remText(2),
        marginTop: 16,
        marginBottom: 16 * 0.3
    },

    input: {
        borderColor: TailwindColors.indigo[700],
        borderWidth: rem(0.15),
        fontSize: rem(1),
        textAlign: 'center',
        height: rem(2),
        width: rem(14),
        backgroundColor: 'white',
        borderRadius: rem(2)
    }
});

function LoginPage(){

    const navigation = useNavigation();

    const login = async (e: any): Promise<boolean> => {
        e.preventDefault();

        let form: HTMLFormElement = e.target;
        let username: string = form.username.value;
        let passwordHashed: string = await hash(form.password.value);
        let isLoggedIn: boolean = false;

        try {
            let loginEndpoint = `
                /login/${username}
                /password/${passwordHashed}
            `;
            await waitForAjaxCall('get', loginEndpoint);
            UserObject.set(username, passwordHashed);
            navigation.navigate(MainNav.MainPage);
        } catch {
            alert("login failed.");
        }

        return false;
    }

    return <View style={[LoginPageStyles.loginPage, GlobalStyle.col, GlobalStyle.centerCross, GlobalStyle.pageStyle]}>
        <Text style={LoginPageStyles.title}>Login</Text>

        <Text style={LoginPageStyles.inputLabel}>username</Text>
        <TextInput style={LoginPageStyles.input}></TextInput>

        <Text style={LoginPageStyles.inputLabel}>password</Text>
        <TextInput secureTextEntry={true} style={LoginPageStyles.input}></TextInput>

        <View style={[LoginPageStyles.logoContainer]}>
            {Icons.Logo}
        </View>

        <FrontPagesNav 
                mainButton={{
                    label: "login", 
                    clickHandler: login
                }}
                secondaryButton={{
                    label: "back",
                    clickHandler: () => navigation.navigate(MainNav.FrontPage)
                }}
            />

    </View>;
}

export default LoginPage;