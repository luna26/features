import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import Item from './Item';
import CameraView from './CameraView';
import FingerPrintView from './FingerPrintView';
import QRCodeScanner from './QRCodeScanner';
import VirtualSignature from './VirtualSignature';
import {Actions} from 'react-native-router-flux';

class ItemList extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.mainMenu);
    }

    renderRow(ItemMenu) {
        return <Item item={ItemMenu} />;
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
            </View>
        );
    }
}

const mapStateToProps = state => {
    return {
        mainMenu: state.mainMenu,
        id: state.selectMenuId
    };
};

export default connect(mapStateToProps)(ItemList);