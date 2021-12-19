import React,{useState,useEffect} from 'react';
import {StyleSheet,View,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const EpisodesScreen=(props) =>{
const[episodesData,setData]=useState([])

const loadData=async () => {
    const url=' https://www.breakingbadapi.com/api/episodes';
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
             <Text style={{width:'100%',height:50,fontSize:20,backgroundColor:'#0B5345',paddingHorizontal:170}}>EPISODES</Text>
                <FlatList
                data={episodesData}
                keyExtractor={item=>item.episode_id}
                renderItem={episodeItem=>    
                <View style={{width:'100%',height:100,paddingVertical:10}}>
                    <TouchableOpacity onPress={() => {props.navigation.navigate('appearance', episodeItem.item)}}>
                        <Text style={{color:'#0B5345',fontSize:20}}>{episodeItem.item.title}</Text>
                    </TouchableOpacity>
                    <View style={{width:100,hight:100,backgroundColor:'fff',borderRadius:10}}>
                    <Text>Season {episodeItem.item.season}</Text>
                    <Text>Episode {episodeItem.item.episode}</Text>
                    <Text style={{fontSize:10}}>Date {episodeItem.item.air_date}</Text>
                    </View>
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
    
    
    
    export default EpisodesScreen;

