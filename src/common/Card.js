import React from 'react';
import { View } from 'react-native';


const Card = ({ children })=> {
    return (
       <View style={styles.viewStyles}>
           {children}
       </View>
    )
}

const  styles = {
    viewStyles:{
        borderWidth:1,
        borderRadius:2,
        borderColor:'#ddd',
        borderBottomWidth: 0,
        shadowColor:'#ddd',
        shadowOffset:{ width:0, height:2 },
        shadowOpacity:0.1,
        shadowRadius:2,
        elevation:1,
        marginLeft:5,
        marginRight:5,
        marginTop:10,
    }
}

export {Card};