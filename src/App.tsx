import React, { useState, useEffect } from 'react'
import TrackPlayer, {
  CAPABILITY_PLAY,
  CAPABILITY_PAUSE,
  CAPABILITY_STOP,
  CAPABILITY_JUMP_FORWARD,
  CAPABILITY_JUMP_BACKWARD,
} from 'react-native-track-player'
import changeNavigationBarColor from 'react-native-navigation-bar-color'
import { ThemeProvider } from 'styled-components'
import { StatusBar, ActivityIndicator } from 'react-native'

import AppProvider from './contexts'
import Routes from './routes'
import theme from './theme'

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function setupPlayer() {
      await TrackPlayer.setupPlayer()

      TrackPlayer.updateOptions({
        capabilities: [
          CAPABILITY_PLAY,
          CAPABILITY_PAUSE,
          CAPABILITY_STOP,
          CAPABILITY_JUMP_FORWARD,
          CAPABILITY_JUMP_BACKWARD,
        ],
        jumpInterval: 30,
      })

      setIsReady(true)
    }

    setupPlayer()
  }, [])

  useEffect(() => {
    changeNavigationBarColor(theme.colors.background, false, true)
  }, [])

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.colors.background}
        />

        {isReady ? <Routes /> : <ActivityIndicator />}
      </ThemeProvider>
    </AppProvider>
  )
}

export default App
