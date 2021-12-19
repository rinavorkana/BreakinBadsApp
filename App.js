import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppBottomBar} from './navigation/index';


export default function App() {
  return (
    <NavigationContainer>
    <AppBottomBar/>
    </NavigationContainer>
  );
}

