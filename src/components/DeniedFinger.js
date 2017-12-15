import React, {Component} from 'react';
import {Text, View} from 'react-native';

const DeniedFinger = () => {
    const { containerStyle } = styles;
    return(
        <View style={containerStyle}>
            <Text>
                Denied!!
            </Text>
        </View>
    );
}

const styles ={
    containerStyle:{
        justifyContent:'center',
        alignItems:'center'
    }
}

export default DeniedFinger;