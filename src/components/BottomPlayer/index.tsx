import React, { useContext, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'
import { useNavigation } from '@react-navigation/native'

import { usePlayer } from '../../contexts/PlayerContext'

import {
  Container,
  Artwork,
  Content,
  Title,
  Artist,
  ActionButtonContainer,
  ActionButton,
} from './styled'

const BottomPlayer: React.FC = () => {
  const theme = useContext(ThemeContext)
  const navigation = useNavigation()

  const {
    isPlaying,
    isPaused,
    isEmpty,
    currentTrack,
    play,
    pause,
  } = usePlayer()

  const handleNavigate = useCallback(() => {
    navigation.navigate('Player')
  }, [navigation])

  if (isEmpty || !currentTrack) return null

  return (
    <Container onPress={handleNavigate} activeOpacity={0.98}>
      <Artwork source={{ uri: currentTrack.artwork }} />

      <Content>
        <Title numberOfLines={1}>{currentTrack.title}</Title>
        <Artist>{currentTrack.artist}</Artist>
      </Content>

      <ActionButtonContainer>
        {isPlaying && (
          <ActionButton onPress={() => pause()}>
            <MaterialIcons name='pause' size={24} color={theme.colors.white} />
          </ActionButton>
        )}

        {isPaused && (
          <ActionButton onPress={() => play()}>
            <MaterialIcons
              name='play-arrow'
              size={24}
              color={theme.colors.white}
            />
          </ActionButton>
        )}
      </ActionButtonContainer>
    </Container>
  )
}

export default BottomPlayer
