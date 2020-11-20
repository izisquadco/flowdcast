import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TextTicker from 'react-native-text-ticker'
import { ThemeContext } from 'styled-components'

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

const Player: React.FC = () => {
  const theme = useContext(ThemeContext)

  const {
    isPlaying,
    isPaused,
    isEmpty,
    currentTrack,
    play,
    pause,
  } = usePlayer()

  if (isEmpty || !currentTrack) return null

  return (
    <Container>
      <Artwork
        source={{
          uri:
            'https://firebasestorage.googleapis.com/v0/b/flowpodcast.appspot.com/o/uploads%2F2d74e69c-6817-427f-83d9-c33e2fb18eb8?alt=media&token=84201aec-e56f-4d87-8fc6-d070da49bf48',
        }}
      />

      <Content>
        <TextTicker
          duration={3000}
          repeatSpacer={50}
          marqueeDelay={1000}
          bounce
          loop
        >
          <Title>{currentTrack.title}</Title>
        </TextTicker>
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

export default Player
