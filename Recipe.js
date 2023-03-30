import React, { Component } from 'react';
import { Text, View, StyleSheet, Image , FlatList , ListView , ActivityIndicator} from 'react-native';

const URL ='';

export default class RecipeScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading:true,
            meals:""
        }
    }
    componentDidMount(){
        return fetch(URL)
        .then((response)=>response.json())
        .then((responseJson)=>{
            this.setState({
                isLoading:false,
        meals:responseJson.meals
            })
        })
        .catch((error)=>{
            console.error(error);
        })
    }
    render(){
        if(this.state.isLoading){
            return(
                <View>
                    <ActivityIndicator 
                    color='grey'
                    size="large"
                    style={styles.activityIndicator}
                    />
                </View>
            )
        }
        return(
            <View style={styles.container}>
                <Text style={styles.text}>Recipe</Text>
                <FlatList 
                data={this.state.meals}
                renderItem={({item})=><Text>{item.strMeal}</Text>}
                keyExtractor={(item,index)=>index}
                />
            </View>
        )
    }
}

const styles=StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"grey",
},
activityIndicator:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:80,
},
text:{
    color:"Black",
    fontSize:0
}

})