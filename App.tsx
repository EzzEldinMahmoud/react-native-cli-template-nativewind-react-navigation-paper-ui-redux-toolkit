import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import MainNavpage from './src/pages/mainNavpage'

const App = () => {
  return (
    <NavigationContainer><MainNavpage/></NavigationContainer>
  )
}

export default App