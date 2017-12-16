import React from 'react';
import {
    AppRegistry,
    Text,
    View
} from 'react-native';


 const Header = (props) =>{
     const { viewStyles, textStyles } = styles;
    return (
        <View style={viewStyles}>
            <Text style={textStyles}>
                {props.headerTitle}
            </Text>
        </View>
    )
 }

const styles ={
    viewStyles:{
      backgroundColor:"#1abc9c",
      justifyContent:'center',
      alignItems:'center',
      height:60,
      paddingTop:15,
      shadowColor:'#000',
      shadowOffset:{width:0, height:20},
      shadowOpacity:0.8,
      position:'relative',
      elevation:2,
    },
    textStyles:{
      fontSize:25,
      color:'#fff'
   }
}
export  {Header};