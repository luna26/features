import React from 'react';
import {View, Text} from 'react-native';

const Header = ({title}) =>{
    const {headerStyle, titleStyles} = styles;
    return(
        <View style={headerStyle}>
            <Text style={titleStyles}>
                {title}
            </Text>
        </View>
    );
}

const styles= {
    headerStyle:{
        height:50,
        backgroundColor: '#0066ff'
    },
    titleStyles:{
        fontSize:20,
        color:'#fff',
        paddingLeft: 15,
        paddingTop: 7
    }
}

export {Header};