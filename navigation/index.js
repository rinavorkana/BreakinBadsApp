import React from 'react';
import {createStackNavigator } from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';


import CharachtersScreen, {screenOptions as CharachtersScreenOptions} from  '../Screens/charachters';
import CharachterDetailsScreen, {screenOptions as CharachterDetailsScreenOptions} from '../Screens/charachters/characterDetails';

import EpisodesScreen, {screenOptions as EpisodesScreenOptions} from '../Screens/episodes';
import AppearanceScreen, {screenOptions as AppearanceScreenOptions } from '../Screens/episodes/appearance';

import QuotesScreen, {screenOptions as QuotesScreenOptions} from '../Screens/quotes';


const CharachtersStackNavigator = createStackNavigator();
export const CharachtersStack = ()=>{
    return(
        <CharachtersStackNavigator.Navigator>
            <CharachtersStackNavigator.Screen name='charachters' component={CharachtersScreen} options={CharachtersScreenOptions}/>
            <CharachtersStackNavigator.Screen name='characterDetails' component={CharachterDetailsScreen} options={CharachterDetailsScreenOptions}/>            
         </CharachtersStackNavigator.Navigator>)
}


const EpisodesStackNavigator = createStackNavigator();
export const EpisodesStack = ()=>{
    return(
        <EpisodesStackNavigator.Navigator>
            <EpisodesStackNavigator.Screen name='episodes' component={EpisodesScreen} options={EpisodesScreenOptions}/>
            <EpisodesStackNavigator.Screen name='appearance' component={AppearanceScreen} options={AppearanceScreenOptions}/>            
         </EpisodesStackNavigator.Navigator>)
}

const QuotesStackNavigator = createStackNavigator();
export const QuotesStack = ()=>{
    return(
        <QuotesStackNavigator.Navigator>
            <QuotesStackNavigator.Screen name='quotes' component={ QuotesScreen} options={QuotesScreenOptions}/>         
         </QuotesStackNavigator.Navigator>)
}




const AppBottomBarNavigator = createMaterialBottomTabNavigator();

export const AppBottomBar = ()=>{
    return(
        <AppBottomBarNavigator.Navigator activeColor='#ffffff' inactiveColor='#222222' barStyle={{ backgroundColor:'#0B5345' }}>



            <AppBottomBarNavigator.Screen 
            name='Charachters' 
            component = {CharachtersStack}
            options =
            {
                
                {
                    tabBarLabel :'Charachters',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'human-male-female' : 'human-male-female';
                        const iconColor = focused ? '#fff' : '#17202A';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
             />

            <AppBottomBarNavigator.Screen 
            name='Episodes' 
            component = {EpisodesStack}
            options=
            {
                {
                    tabBarLabel :'Episodes',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'television' : 'television';
                        const iconColor = focused ? '#fff' : '#17202A';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <MaterialCommunityIcons name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            />
            <AppBottomBarNavigator.Screen 
            name='Quoets' 
            component = {QuotesStack }
            options=
            {
                {
                    tabBarLabel :'Quoets',
                    tabBarIcon:({focused,color,size}) => {
                        const iconShape = focused ? 'comment-discussion ': 'comment-discussion';
                        const iconColor = focused ? '#fff' : '#17202A';
                        const iconSize = focused ? 28 : 26;
                        return(
                            <Octicons  name={iconShape} color={iconColor} size={iconSize}/>
                        )
                    }
                }
            }
            />
            </AppBottomBarNavigator.Navigator>
          

            
    )
}
