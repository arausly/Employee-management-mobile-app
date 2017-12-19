import React from 'react';
import { View } from 'react-native';


const CardItem = ({ children, style }) =>{
    return (
        <View style={[styles.cardStyle, style]}>
            {children}
        </View>
    );
}


const styles = {
    cardStyle:{
        position:'relative',
        borderBottomWidth:1,
        flexDirection:'row',
        padding:5,
        borderColor:'#ddd',
        backgroundColor:'#fff',
    }
}

export {CardItem};