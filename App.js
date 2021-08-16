import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { default as theme } from './src/style/theme.json'
import { Provider } from 'react-redux'
import Store from './src/redux/Store'
import RootStack from './src/navigation/RootStack'
import { EvaIconsPack } from '@ui-kitten/eva-icons';

const App = () => {
  return(
  <Provider store={Store}>
    <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
        <RootStack />
      </ApplicationProvider>
  </Provider>
  )
}

export default App;
