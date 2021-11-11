import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { Text, View } from './components/Themed';

import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootNavPages } from './types';
import FrontPage from './components/FrontPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import { StatusBarHeight } from './AppStyles';
import HomePage from './components/mainContent/MainPage';

const Stack = createStackNavigator();

const pages: {[pageName: string]: (...args: any[]) => JSX.Element} = {
  [RootNavPages.FrontPage]: FrontPage,
  [RootNavPages.SignInPage]: SignupPage,
  [RootNavPages.LoginPage]: LoginPage,
  [RootNavPages.MainPage]: HomePage
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
            {Object.entries(pages).map(([pageName, page], i) => 
              <Stack.Screen
                name={pageName}
                component={page}
                key={i}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>

        <StatusBar />

      </SafeAreaProvider>
    </View>
  );
}
