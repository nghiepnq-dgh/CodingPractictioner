/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import TaskManagerComponent from './components/TaskManagerComponent';

let store = createStore(allReducers);
const App = () => (
    <Provider store={store}>
        <TaskManagerComponent/>
    </Provider>
);


export default App;


// import React, { Component } from 'react';
// import {AppRegistry} from 'react-native';
// // import App from './App';
// // import {name as appName} from './app.json';
// //Redux
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';

// import allReducers from './reducers';
// import TaskManagerComponent from './components/TaskManagerComponent';

// let store = createStore(allReducers);
// const App = () => (
//     <Provider store={store}>
//         <TaskManagerComponent/>
//     </Provider>
// );

// AppRegistry.registerComponent("demo", () => App);
