import React, { useContext, useEffect } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'

import { usePlayer } from '../../contexts/PlayerContext'

import {
  Container,
  Header,
  Artwork,
  Wrapper,
  Content,
  Details,
  Title,
  Artist,
  PlayerContainer,
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
    isBuffering,
    currentTrack,
    progress: { position, duration, positionString, durationString },
    showPlayer,
    hidePlayer,
    play,
    pause,
    seekTo,
    jumpTo,
  } = usePlayer()

  useEffect(() => {
    showPlayer()

    return () => hidePlayer()
  }, [showPlayer, hidePlayer])

  if (!currentTrack) {
    return null
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <Artwork source={{ uri: currentTrack.artwork }} />
        </Header>

        <Content>
          <Details>
            <Title numberOfLines={1}>{currentTrack.title}</Title>
            <Artist>{currentTrack.artist}</Artist>
          </Details>

          <PlayerContainer>
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

              {(isPaused || isBuffering) && (
                <ActionButton onPress={() => play()}>
                  <MaterialIcons
                    name='play-arrow'
                    size={64}
                    color={theme.colors.white}
                  />
                </ActionButton>
              )}

              {(isPlaying || isBuffering) && (
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
          </PlayerContainer>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default Player
