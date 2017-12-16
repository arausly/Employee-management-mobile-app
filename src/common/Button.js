import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children })=>{
    const { buttonStyles, textStyle } = styles;
     return (
         <TouchableOpacity onPress = {onPress} style={buttonStyles}>
            <Text style={textStyle}>
                 { children }
            </Text>
         </TouchableOpacity>
     )
}

const styles ={
    buttonStyles:{
       flex:1,
       alignSelf:'stretch',
       backgroundColor:"#fff",
       borderWidth:1,
       borderColor:"#007aff",
       borderRadius:5,
       position:'relative',
    },
    textStyle:{
        alignSelf:'center',
        paddingTop:10,
        paddingBottom:10,
        fontSize:16,
        fontWeight:'600',
        color:"#007aff",
    }
}

export {Button};