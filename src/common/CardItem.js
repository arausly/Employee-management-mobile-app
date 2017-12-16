import React from 'react';
import { View } from 'react-native';


const CardItem = ({ children }) =>{
    return (
        <View style={styles.cardStyle}>
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