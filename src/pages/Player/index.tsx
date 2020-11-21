import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { usePlayer } from '../../contexts/PlayerContext'

import {
  Container,
  Header,
  Artwork,
  Title,
  Artist,
  Wrapper,
  ProgressContainer,
  Progress,
  Start,
  End,
  ActionButtons,
  ActionButton,
} from './styled'

const Player: React.FC = () => {
  const theme = useContext(ThemeContext)

  const {
    isPlaying,
    isPaused,
    currentTrack,
    progress: { position, duration, positionString, durationString },
    play,
    pause,
    seekTo,
    jumpTo,
  } = usePlayer()

  if (!currentTrack) {
    return null
  }

  return (
    <Container>
      <Header>
        <Artwork source={{ uri: currentTrack.artwork }} />
        <Title>{currentTrack.title}</Title>
        <Artist>{currentTrack.artist}</Artist>
      </Header>

      <Wrapper>
        <ProgressContainer>
          <Start>{positionString}</Start>
          <Progress
            value={position}
            minimumValue={0}
            maximumValue={duration}
            minimumTrackTintColor={theme.colors.white}
            maximumTrackTintColor={theme.colors.placeholder}
            thumbTintColor={theme.colors.white}
            onValueChange={value => jumpTo(value)}
          />
          <End>{durationString}</End>
        </ProgressContainer>

        <ActionButtons>
          <ActionButton onPress={() => seekTo(-30)}>
            <MaterialIcons
              name='replay-30'
              size={32}
              color={theme.colors.white}
            />
          </ActionButton>

          {isPaused && (
            <ActionButton onPress={() => play()}>
              <MaterialIcons
                name='play-arrow'
                size={64}
                color={theme.colors.white}
              />
            </ActionButton>
          )}

          {isPlaying && (
            <ActionButton onPress={() => pause()}>
              <MaterialIcons
                name='pause'
                size={64}
                color={theme.colors.white}
              />
            </ActionButton>
          )}

          <ActionButton onPress={() => seekTo(30)}>
            <MaterialIcons
              name='forward-30'
              size={32}
              color={theme.colors.white}
            />
          </ActionButton>
        </ActionButtons>
      </Wrapper>
    </Container>
  )
}

export default Player
