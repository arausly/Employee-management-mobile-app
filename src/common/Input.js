import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, textFill, secured,autoFocus }) =>{
    const { inputStyle, textStyle, containerStyle } = styles;
    return (
       <View style={containerStyle}>
           <Text style={textStyle}>{label}</Text>
           <TextInput 
            autoCorrect = {false}
            value={value}
            onChangeText={onChangeText}
            style={inputStyle}
            placeholder = {textFill}
            secureTextEntry = {secured}
            autoFocus = {autoFocus || false}
            />
       </View>
    )
}

const styles = {
   containerStyle:{
     height:40,
     flex:1,
     flexDirection:'row',
     alignItems:'center',
   },
   inputStyle:{
       color:"#000000",
       paddingLeft:5,
       paddingRight:5,
       fontSize:18,
       lineHeight:23,
       flex:2,
   },
   textStyle:{
      fontSize:18,
      paddingLeft:20,
      flex:1,
   }
};

export {Input};
