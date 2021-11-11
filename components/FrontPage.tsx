import React from 'react';
import {isMobile, SetState } from './Utilities';
import Icons from './Icons';

import { RootNavPages } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { GlobalStyle, Colors, rem, remText } from '../AppStyles';
import { FrontPagesNav } from './FrontPagesUtilities';

function FrontPage(){

    const navigation = useNavigation();

    return <View style={[FrontStyle.frontPage]}>
        <View style={[FrontStyle.logoContainer]}>
            {Icons.Logo}
        </View>
        <View style={[FrontStyle.bottomHalf]}>
            <View style={[
                    FrontStyle.heading, 
                    isMobile() ? GlobalStyle.col : GlobalStyle.row
            ]}>
                <Text style={FrontStyle.heading_h1}>
                    Finding <Text style={FrontStyle.heading_h1_span}>Name</Text>o
                </Text>
            </View>
            <FrontPagesNav 
                mainButton={{
                    label: "login", 
                    clickHandler: () => navigation.navigate(RootNavPages.LoginPage)
                }}
                secondaryButton={{
                    label: "sign up",
                    clickHandler: () => navigation.navigate(RootNavPages.SignInPage)
                }}
            />
        </View>
    </View>;
}

export default FrontPage;

const FrontStyle = StyleSheet.create({
    frontPage: {
        height: '100%',
        backgroundColor: 'white',
        ...GlobalStyle.col, 
        ...GlobalStyle.pageStyle
    },

    logoContainer: {
        marginTop: rem(1),
        ...GlobalStyle.row, 
        ...GlobalStyle.centerAll, 
        ...GlobalStyle.spacer
    },

    heading: {
        //marginTop: rem(1),
        marginLeft: rem(1),
        marginBottom: rem(1.5),
        ...GlobalStyle.center
    },

    heading_h1: {
        fontSize: remText(5),
        fontWeight: "bold",
        color: Colors.grey[800],
    },

    heading_h1_last_child: {
        marginRight: 0
    },

    heading_h1_span: {
        color: Colors.indigo[700]
    },

    bottomHalf: {
       backgroundColor: Colors.indigo[100]
    }
});