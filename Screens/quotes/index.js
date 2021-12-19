import React,{useEffect, useState} from 'react';
import {StyleSheet,View,Text,FlatList,Image} from 'react-native';
import { StatusBar } from 'expo-status-bar';
//import Breaking_bad_logo from 'im'


const QuotesScreen=(props) =>{
const[quotesData,setData]=useState([]);

const loadData=async () => {
    const url='https://www.breakingbadapi.com/api/quotes';
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
    return (
        <View style={styles.container}>
            <View style={{backgroundColor:'#D0D3D4',width:'100%',height:50,justifyContent:'center',alignItems:'center',paddingHorizontal:30}}>
                 <Image
                    style={{flex:1,width:100, height:100}}
                    source={require('../../assets/images/Breaking_Bad_logo.svg.png')}>
                 </Image>
             </View>
            <View>
                <Text style={{width:'100%',height:50,fontSize:20,backgroundColor:'#0B5345',paddingHorizontal:200}}>QUOTES</Text>
            </View>
             <View>
                 <Image>
                     
                 </Image>
             </View>
            <FlatList
            data={quotesData}
            keyExtractor={item=>item.quote_id}
            renderItem={qouteItem=>
            <View style={{width:'100%',height:100,paddingVertical:10,borderRadius:10,borderStyle:'#17202A',margin:10}}>
                <Text style={{color:'#0B5345',fontSize:20}}>{qouteItem.item.quote}</Text>
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



export default QuotesScreen;