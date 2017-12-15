import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Text, View } from 'react-native';
import { Header } from './components/common';
import Router from './Router';

class App extends Component {
    onClickItem() {
        console.log('funciona!');
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <Router />
            </Provider>
        );
    }
}

/*
                <View style={{flex:1}}>
                    <Header title={'Demo App'} />
                    <ItemList />
                </View>

*/

export default App;