import React from 'react';
import {isMobile, SetState } from '../Utilities';
import Icons from '../Icons';

import { RootNavPages, MainPageNavPages as HomePageNavPages } from '../../types';
import { useNavigation, useRoute, NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Dimensions } from 'react-native';
import { Text, View } from '../../components/Themed';
import { GlobalStyle, Colors, rem, remText } from '../../AppStyles';
import { FrontPagesNav } from '../FrontPagesUtilities';
import { createStackNavigator } from '@react-navigation/stack';
import UserObject from '../UserObject';
import RatingsPage from './RatingsPage';
//import PartnerPage from './PartnerPage';
//import RatePage from './RatePage';

const HomePageStack = createStackNavigator();
interface IRateParams {
    name: string,
    isMale: boolean
}

function HomePageNav(
        {name, icon}: 
        {name: HomePageNavPages, icon: JSX.Element}
    ){

    const navigation = useNavigation();
    const route = useRoute();

    const selected = route.name == name;
    return (
        <View 
            className={'mainPageNav col centerAll clickable '+ (selected ? 'selected' : '')} 
            onClick={()=>navigation.navigate(name)}
        >
            {icon}
            <Text>{name}</Text>
        </View>
    );
}

const pages: {
    name: HomePageNavPages,
    icon: JSX.Element, 
    component: (...args: any[]) => JSX.Element
}[] = [
    {name: HomePageNavPages.RatingsPage, icon: Icons.RatingsIcon, component: RatingsPage},
    //{name: HomePageNavPages.PartnerPage, icon: Icons.PartnerIcon, component: PartnerPage},
    //{name: HomePageNavPages.RatePage, icon: Icons.RateIcon, component: RatePage},
]

function HomePage(){

    const navigation = useNavigation();

    React.useEffect((): void=>{
        if (!UserObject.isLoggedIn()) {
            alert("You must be authenticated to visit this page");
            navigation.navigate(RootNavPages.LoginPage);
        } else {
            navigation.navigate(HomePageNavPages.RatingsPage);
        }

    }, []);

    return <View style={HomeStyle.homePageContainer}>
        <View style={[HomeStyle.heading]}>
            Finding <Text style={HomeStyle.heading_h1_span}>Name</Text>o
            {Icons.CogIcon}
        </View>

        <View id='mainContent'>
            <HomePageStack.Navigator screenOptions={{ headerShown: false }}>
                {pages.map(({name, component}, i) => 
                    <HomePageStack.Screen
                        name={name}
                        component={component}
                        key={i}
                    />
                )}
            </HomePageStack.Navigator>
        </View>

        <View style={[GlobalStyle.row, GlobalStyle.spaceEvenly, GlobalStyle.centerAll]} className='row spaceEvenly centerAll'>
            {pages.map(({name, icon}, i) =>
                <HomePageNav 
                    name={name}
                    icon={icon}
                    key={i}
                />
            )}
        </View>
    </View>
}

export default HomePage;

const HomeStyle = StyleSheet.create({
    homePageContainer: {
        height: '100%',
        backgroundColor: 'white',
        ...GlobalStyle.col, 
        ...GlobalStyle.pageStyle
    },

    heading: {
        //marginTop: rem(1),
        marginLeft: rem(1),
        marginBottom: rem(1.5),                    
        ...GlobalStyle.row,
        ...GlobalStyle.centerCross
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