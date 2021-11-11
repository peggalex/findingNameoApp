import React from 'react';

import { SetState } from "./Utilities";
import { StyleSheet, TextInput } from 'react-native';
import { Text, View } from './Themed';
import { GlobalStyle, Colors, rem, remText } from '../AppStyles';

const FrontPagesStyles = StyleSheet.create({

    buttons_container: {
        backgroundColor: 'transparent',
        width: "100%",
        marginBottom: rem(2),
    },

    buttons_button: {
        width: '42.5%',
        height: remText(3),
        borderRadius: remText(0.5),
        fontSize: remText(2),
        fontWeight: '300',
        textAlign: 'center',
        ...GlobalStyle.centerAll
    },

    mainButton: {
        backgroundColor: Colors.indigo[700],
        color: 'white',
    },

    secondaryButton: {
        backgroundColor: 'white',
        color: Colors.indigo[700]
    },

    inputLabel: {
        textAlign: 'center',
        fontSize: remText(2),
        marginTop: 16,
        marginBottom: 16 * 0.3
    },

    input: {
        borderColor: Colors.indigo[700],
        borderWidth: rem(0.15),
        fontSize: rem(1),
        textAlign: 'center',
        height: rem(2),
        width: rem(14),
        backgroundColor: 'white',
        borderRadius: rem(2)
    }
});

export interface IFrontPagesNavButton {
    label: string,
    clickHandler: () => void
}

export const InputGroup = ({
        label, 
        setState, 
        isPassword = false, 
        labelColor = Colors.indigo[700], 
        fillColor = 'white'
    }: 
    {
        label: string, 
        setState: SetState<string>, 
        isPassword?: boolean, 
        labelColor?: string, 
        fillColor?: string
    }
) => <>
    <Text style={[FrontPagesStyles.inputLabel, {color: labelColor}]}>{label}</Text>
    <TextInput 
        style={[FrontPagesStyles.input, {backgroundColor: fillColor}]} 
        onChangeText={setState}
        secureTextEntry={isPassword}
    ></TextInput>
</>

export const FrontPagesNav = (
    { mainButton, secondaryButton, reversed = false }:
    { 
        mainButton: IFrontPagesNavButton, 
        secondaryButton: IFrontPagesNavButton, 
        reversed?: boolean
    }
) => <View style={[(reversed ? GlobalStyle.rowReversed : GlobalStyle.row), GlobalStyle.spaceEvenly, FrontPagesStyles.buttons_container]}>
    <Text 
        style={[FrontPagesStyles.mainButton, FrontPagesStyles.buttons_button]} 
        onPress={mainButton.clickHandler}
    >
        {mainButton.label}
    </Text>
    <Text 
        style={[FrontPagesStyles.secondaryButton, FrontPagesStyles.buttons_button]} 
        onPress={secondaryButton.clickHandler}
    >
        {secondaryButton.label}
    </Text>
</View>
