import React from 'react';

import { MainNav } from '../types';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { Text, View } from './Themed';
import { GlobalStyle, TailwindColors, rem, remText } from '../AppStyles';

const FrontPagesNavStyles = StyleSheet.create({
    buttons_container: {
        backgroundColor: 'transparent',
        width: "100%",
        marginBottom: rem(2)
    },

    buttons_button: {
        width: '42.5%',
        height: remText(3),
        borderRadius: remText(0.5),
        fontSize: remText(2),
        fontWeight: '300',
        textAlign: 'center'
    },

    mainButton: {
        backgroundColor: TailwindColors.indigo[700],
        color: 'white',
        marginRight: 15
    },

    secondaryButton: {
        backgroundColor: 'white',
        color: TailwindColors.indigo[700]
    }
});

export interface IFrontPagesNavButton {
    label: string,
    clickHandler: () => void
}

export const FrontPagesNav = (
    { mainButton, secondaryButton }:
    { 
        mainButton: IFrontPagesNavButton, 
        secondaryButton: IFrontPagesNavButton, 
    }
) => (
        <View style={[GlobalStyle.row, GlobalStyle.center, FrontPagesNavStyles.buttons_container]}>
            <Text 
                style={[FrontPagesNavStyles.mainButton, FrontPagesNavStyles.buttons_button, GlobalStyle.centerAll]} 
                onPress={mainButton.clickHandler}
            >
                {mainButton.label}
            </Text>
            <Text 
                style={[FrontPagesNavStyles.secondaryButton, FrontPagesNavStyles.buttons_button, GlobalStyle.centerAll]} 
                onPress={secondaryButton.clickHandler}
            >
                {secondaryButton.label}
            </Text>
        </View>
    )
