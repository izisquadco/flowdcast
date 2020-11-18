import React from 'react'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'react-native'

import Routes from './routes'
import theme from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor={theme.colors.background}
      />

      <Routes />
    </ThemeProvider>
  )
}

export default App
