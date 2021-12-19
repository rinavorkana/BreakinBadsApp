import React ,{useState,useEffect}from 'react';
import {StyleSheet,View,Text,FlatList,TouchableOpacity,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';


const CharactersScreen=(props) =>{
const[charactersData,setData]=useState([]);

const loadData=async () => {
    const url='https://www.breakingbadapi.com/api/characters';
    const response= await fetch(
        url,
        {
            method:'GET'
        }
    );
    const serverData= await response.json();
    setData(serverData);

    }  
useEffect(()=>{
loadData();
},[]); 
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

    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'#D0D3D4',width:'100%',height:50,justifyContent:'center',alignItems:'center',paddingHorizontal:30}}>
                 <Image
                    style={{flex:1,width:100, height:100}}
                    source={require('../../assets/images/Breaking_Bad_logo.svg.png')}>
                 </Image>
             </View>
             <Text style={{width:'100%',height:50,fontSize:20,backgroundColor:'#0B5345',paddingHorizontal:150}}>CHARACHTERS</Text>
            <FlatList style={{width:'20%',height:100}}
            data={charactersData}
            keyExtractor={item=>item.char_id}
            renderItem={charItem=>
            <View style={{width:'100%',height:'100%'}}>
                <View Style={{width:'52%',height:'100%',backgroundColor:'#fff'}}>
                <Text Style={{backgroundColor:'#fff',color:"#0B5345",size:50}}>{charItem.item.name}</Text>
                <Text Style={{backgroundColor:'#fff',Color:'#0B5345',size:24}}>{charItem.item.nickname}</Text>   
             </View>
             <TouchableOpacity onPress={() => {props.navigation.navigate('characterDetails', charItem.item)}}>
             <View Style={{width:'45%',height:'100%'}}>
                     <Image
                        style={{width:'100%',height:150,borderRadius:20}}
                        source={{uri:charItem.item.img}} />
                 </View>
             </TouchableOpacity>
                   
            </View>}
            />
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


export default CharactersScreen;