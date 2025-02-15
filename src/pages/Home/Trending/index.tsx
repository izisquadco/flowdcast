import React, { useContext, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { ThemeContext } from 'styled-components'
import { AdMobBanner } from 'react-native-admob'

import { usePlayer } from '../../../contexts/PlayerContext'

import BottomPlayer from '../../../components/BottomPlayer'

import Podcasts from './Podcasts'

import trending from './trending.json'

import {
  Container,
  Wrapper,
  TrendingList,
  Episode,
  Content,
  Title,
  Description,
  Artist,
  PlayButtonContainer,
  PlayButton,
  PlayButtonText,
} from './styled'

const Trending: React.FC = () => {
  const theme = useContext(ThemeContext)

  const { play } = usePlayer()

  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({
      item: { id, mp3: url, title, artist, artwork, avatar, description },
    }) => (
      <Episode
        onPress={() =>
          play({
            id,
            url,
            title,
            artwork: artwork ?? avatar,
            artist,
          })
        }
        rippleColor={theme.colors.ripple}
      >
        <Content>
          <Title>{title}</Title>
          <Description numberOfLines={3}>{description}</Description>
          <Artist>{artist}</Artist>

          <PlayButtonContainer>
            <PlayButton
              onPress={() =>
                play({
                  id,
                  url,
                  title,
                  artwork: artwork ?? avatar,
                  artist,
                })
              }
            >
              <MaterialIcons
                name='play-circle-fill'
                size={18}
                color={theme.colors.white}
              />
              <PlayButtonText>TOCAR</PlayButtonText>
            </PlayButton>
          </PlayButtonContainer>
        </Content>
      </Episode>
    ),
    [play, theme.colors.ripple, theme.colors.white],
  )

  const renderHeader = useCallback(() => <Podcasts />, [])

  return (
    <Container>
      <Wrapper>
        <TrendingList
          data={trending}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          ListHeaderComponent={renderHeader}
          showsVerticalScrollIndicator={false}
        />
      </Wrapper>

      <BottomPlayer />

      <AdMobBanner
        adSize='fullBanner'
        adUnitID='ca-app-pub-5021327379088901/6262037310'
        testDevices={[AdMobBanner.simulatorId]}
        onAdFailedToLoad={(error: Error) => console.error(error)}
      />
    </Container>
  )
}

export default Trending
