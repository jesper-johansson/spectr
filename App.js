import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { AppRegistry } from 'react-native';
import reducers from './app/reducers';
import Home from './app/containers/Home';

const store = createStore(reducers, applyMiddleware(thunk));

class Spectr extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Spectr', () => Spectr);
