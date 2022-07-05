import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import HomePage from './src/component/HomePage';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <HomePage />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
