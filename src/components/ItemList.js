import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'react-native';
import Item from './Item';
import CameraView from './CameraView';

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