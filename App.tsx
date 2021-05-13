import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Text, View } from './components/Themed';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, MainNav } from './types';
import FrontPage from './components/FrontPage';
//import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import { StatusBarHeight } from './AppStyles';
//import MainPage from './components/mainContent/MainPage';

const Stack = createStackNavigator();

const pages: {[pageName: string]: (...args: any[]) => JSX.Element} = {
  [MainNav.FrontPage]: FrontPage,
  //[MainNav.SignInPage]: SignupPage,
  [MainNav.LoginPage]: LoginPage,
  //[MainNav.MainPage]: MainPage
}

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const window = useWindowDimensions();

  const AppStyles = StyleSheet.create({
    app: {
      height: window.height + StatusBarHeight,
      overflow: 'hidden'
    }
  });

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <View style={AppStyles.app}>
      <SafeAreaProvider>

        {/*<Navigation colorScheme={colorScheme} />*/}
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {Object.keys(pages).map((pageName, i) => <Stack.Screen
              name={pageName}
              component={pages[pageName]}
              key={i}
            />)}
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar />

      </SafeAreaProvider>
    </View>
  );
}
