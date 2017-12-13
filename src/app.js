import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import ItemList from './components/ItemList';

class App extends Component {

    state = {}

    onClickItem() {
        console.log('funciona!');
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <View style={{flex:1}}>
                    <Header title={'Demo App'} />
                    <ItemList />
                </View>
            </Provider>
        );
    }
}

export default App;