import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import Item from './Item';
import CameraView from './CameraView';
import FingerPrintView from './FingerPrintView';
import QRCodeScanner from './QRCodeScanner';
import VirtualSignature from './VirtualSignature';

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

    renderComponent() {
        const { id } = this.props;
        switch (id) {
            case 0:
                return <FingerPrintView />
            case 1: 
                return <QRCodeScanner />
            case 3:
                return <VirtualSignature />
            case 4:
                return <CameraView />
                break;
            default:
                return (
                    <ListView
                        dataSource={this.dataSource}
                        renderRow={this.renderRow}
                    />
                );
        }
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {this.renderComponent()}
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