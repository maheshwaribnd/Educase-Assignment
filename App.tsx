import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import store from './src/redux/Store/store';

const App = () => {

  // const [loader, setLoader]
  return (
    <Provider store={store}>
      <StackNavigation />
      <TextInput  />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
