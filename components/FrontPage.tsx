import React from 'react';
import {isMobile, SetState } from './Utilities';
import Icons from './Icons';

import { MainNav } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../components/Themed';
import { GlobalStyle, TailwindColors, rem, remText } from '../AppStyles';
import { FrontPagesNav } from './FrontPagesNav';

function FrontPage(){

    const navigation = useNavigation();

    return <View style={[FrontPageStyle.frontPage, GlobalStyle.col, GlobalStyle.pageStyle]}>
        <View style={[FrontPageStyle.logoContainer, GlobalStyle.row, GlobalStyle.centerAll, GlobalStyle.spacer]}>
            {Icons.Logo}
            {/*Leaves*/}
        </View>
        <View style={[FrontPageStyle.bottomHalf]}>
            <View style={[
                    FrontPageStyle.heading, 
                    isMobile() ? GlobalStyle.col : GlobalStyle.row, 
                    GlobalStyle.center
            ]}>
                <Text style={FrontPageStyle.heading_h1}>
                    Finding <Text style={FrontPageStyle.heading_h1_span}>Name</Text>o
                    </Text>
            </View>
            <FrontPagesNav 
                mainButton={{
                    label: "login", 
                    clickHandler: () => navigation.navigate(MainNav.LoginPage)
                }}
                secondaryButton={{
                    label: "sign up",
                    clickHandler: () => navigation.navigate(MainNav.SignInPage)
                }}
            >
            </FrontPagesNav>
        </View>
    </View>;
}

export default FrontPage;

const FrontPageStyle = StyleSheet.create({
    frontPage: {
        height: '100%',
        backgroundColor: 'white'
    },

    logoContainer: {
        marginTop: rem(1),
    },

    heading: {
        //marginTop: rem(1),
        marginLeft: rem(1),
        marginBottom: rem(1.5),
    },

    heading_h1: {
        fontSize: remText(5),
        fontWeight: "bold",
        color: TailwindColors.grey[800],
    },

    heading_h1_last_child: {
        marginRight: 0
    },

    heading_h1_span: {
        color: TailwindColors.indigo[700]
    },

    bottomHalf: {
       backgroundColor: TailwindColors.indigo[100]
    }
});