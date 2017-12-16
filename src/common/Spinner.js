import React from 'react';
import { View, ActivityIndicator } from 'react-native';


const Spinner =({ size })=>{
   return (
         <View style ={styles.spinContainer}>
            <ActivityIndicator size={ size || 'large'}/>
         </View>    
   );
}

const styles = {
    spinContainer:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
    }
}

export {Spinner}