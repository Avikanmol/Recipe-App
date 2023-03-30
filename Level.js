import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, Image,FlatList } from 'react-native';
import{ Recipe}from "Recipe";

export default class LevelScreen extends Component{
    const {navigation} = props;
     onPressRecipe=(item)=>{
        navigation.navigate("Recipe",{item})
    }
    const AppButton=({onPress,title})=>(
        <TouchableOpacity onPress={onPress}style={styles.AppButtonContainer}>
    <Text style={styles.AppButtonText}>{title}</Text>
        </TouchableOpacity>
    )

    render()
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Levels</Text>
                <AppButton title="BEGINNER" size="sm" backgroundColor="yellow"/>
                <AppButton title="INTERMEDIATE" size="sm" backgroundColor="yellow"/>
                <AppButton title="ADVANCED" size="sm" backgroundColor="yellow"/>
            </View>
        )
    }





const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"grey",
},
text:{
    color:"Black",
    fontSize:0
}

})