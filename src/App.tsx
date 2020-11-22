import React, { useState, useEffect } from 'react'
import CodePush from 'react-native-code-push'
import TrackPlayer, {
  CAPABILITY_PLAY,
  CAPABILITY_PAUSE,
  CAPABILITY_STOP,
  CAPABILITY_JUMP_FORWARD,
  CAPABILITY_JUMP_BACKWARD,
} from 'react-native-track-player'
import SplashScreen from 'react-native-splash-screen'
import { ThemeProvider } from 'styled-components'
import { StatusBar, ActivityIndicator } from 'react-native'

import AppProvider from './contexts'
import Routes from './routes'
import theme from './theme'

const App: React.FC = () => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    async function setupPlayer() {
      await TrackPlayer.setupPlayer({
        waitForBuffer: true,
      })

      TrackPlayer.updateOptions({
        stopWithApp: true,
        jumpInterval: 30,
        capabilities: [
          CAPABILITY_PLAY,
          CAPABILITY_PAUSE,
          CAPABILITY_STOP,
          CAPABILITY_JUMP_FORWARD,
          CAPABILITY_JUMP_BACKWARD,
        ],
      })

      setIsReady(true)
    }

    setupPlayer()
  }, [])

  useEffect(() => {
    if (isReady) {
      SplashScreen.hide()
    }
  }, [isReady])

  return (
    <AppProvider>
      <ThemeProvider theme={theme}>
        <StatusBar
          barStyle='light-content'
          backgroundColor={theme.colors.background}
        />

        {isReady ? (
          <Routes />
        ) : (
          <ActivityIndicator
            size='large'
            color={theme.colors.placeholder}
            style={{ flex: 1 }}
          />
        )}
      </ThemeProvider>
    </AppProvider>
  )
}

export default CodePush(App)
