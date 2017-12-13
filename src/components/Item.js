import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { View, Text, TouchableOpacity } from 'react-native';

class Item extends Component {
    renderItem() {
        const { title, desc, id } = this.props.item;
        const { titleStyle, itemContainerStyle } = styles;
        return (
            <TouchableOpacity onPress={() => this.props.selectMenu(id)} style={itemContainerStyle} >
                <View>
                    <Text style={titleStyle}>
                        {title}
                    </Text>
                    <Text>
                        {desc}
                    </Text>
                </View>
            </TouchableOpacity>
        );
    }

    render() {
        const { itemContainerStyle } = styles;
        const { id } = this.props.item;
        return (
            <View>
                {this.renderItem()}
            </View>
        );
    }
}

const styles = {
    itemContainerStyle: {
        borderColor: '#666666',
        borderBottomWidth: 1,
        paddingBottom: 15,
        paddingTop: 15
    },
    titleStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    }
}

const mapStateToProps = state => {
    return { id: state.selectMenuId };
};

export default connect(mapStateToProps, actions)(Item);