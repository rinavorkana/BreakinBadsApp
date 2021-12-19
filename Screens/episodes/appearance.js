import React from 'react';
import {StyleSheet,View,Text,FlatList} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const AppearanceScreen=(props)=>{
  const Characters = (chars) => {
    let char = '';
    [...chars].forEach(item => {
        char += `${item}\n`
    });
    console.log(char);
    return char;
    
}

    return(
        <View>
          <View style={{width:'100%',height:100,backgroundColor:'#0B5345',flexDirection:'row',paddingHorizontal:150}}>
            <Text style={{fontSize:20,color:'#fff'}}>Season</Text>
            <Text style={{fontSize:20,color:'#fff'}}>{props.route.params.season}</Text>
            <Text style={{fontSize:20,color:'#fff'}}>Episode</Text>
            <Text style={{fontSize:20,color:'#fff'}}>{props.route.params.episode}</Text>
          </View>
          <View style={{backgroundColor:'#0B5345' ,width:'100%',heigth:100,paddingHorizontal:30}}>  
          <Text style={{color:'#fff',fontSize:70}}>
            {props.route.params.title}
          </Text>
          </View>
          <View style={{backgroundColor:'#0B5345',width:'100%',height:'200',paddingHorizontal:170}}>
          <Text style={{color:'#fff',fontSize:20}}>Characters</Text>
          </View>
          <View style={{width:'100%', height:100,backgroundColor:'#D0D3D4 '}}>
                <Text style={{paddingVertical:20,paddingHorizontal:160,fontSize:18}}>{Characters(props.route.params.characters)}</Text>
            </View>  
        </View>
    )

    }
export const screenOptions=navData=>{
    return{
        headerTitle:''
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });



export default AppearanceScreen;
