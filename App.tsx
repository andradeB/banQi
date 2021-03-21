import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const App: () => React.ReactNode = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <Text>Hello World</Text>
    </View>
  );
};

export default App;