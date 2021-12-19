import React from 'react';
import {StyleSheet,View,Text,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Switch } from 'react-native-gesture-handler';
const CharachterDetailsScreen=(props)=>{
    const appearance=(appear)=>{
        let app="";
        appear.forEach(element => {

            app+=`${element}\n`
        });
    }
    return(
    <View style={styles.container}>
        <View style={{backgroundColor:'#0B5345',width:'100%',height:50}}>
        <Text style={{color:'#fff',alignItems:'center',jstifycontent:'center',paddingHorizontal:175,paddingVertical:10}}>{props.route.params.name}</Text>
        </View>
        <View style={{backgroundColor:'#D0D3D4',width:'100%',height:250}}>
                 <Image
                    style={{ height:250,resizeMode:'contain'}}
                    source={{uri:props.route.params.img}}>
                 </Image>
             </View>
        <View style={{width:'100%',height:50,backgroundColor:Status(props.route.params.status)}}>
            <Text style={{alignItems:'center',jstifycontent:'center',paddingHorizontal:175,paddingVertical:10}}>{props.route.params.status}</Text>
        </View>
            <Text style={{size:20,margin:10}}>NickName: {props.route.params.nickname}</Text>
            <Text style={{size:20}}>Portrayed:{props.route.params.portrayed}</Text>
            <Text style={{fontSize:20,margin:10}}>{props.route.params.appearance}</Text>
            </View>
    )
    
}
const Status = status => {
    switch(status){
        case 'Alive':
            return'#3a8f6e';
        case 'Unknown':
            return '#eff700';
        case 'Deceased':
            return '#ff5733';
        case 'Presumed dead':
            return '#ffff00';
    }
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

  
export default  CharachterDetailsScreen;