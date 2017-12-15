import React, {Component} from 'react';
import {Text, View} from 'react-native';

const AccessFinger = () => {
    const { containerStyle } = styles;
    return(
        <View style={containerStyle}>
            <Text>
                Access!!
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

export default AccessFinger;