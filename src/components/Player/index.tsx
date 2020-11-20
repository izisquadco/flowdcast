import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import TextTicker from 'react-native-text-ticker'
import { ThemeContext } from 'styled-components'

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

  return (
    <Container>
      <Artwork
        source={{
          uri:
            'https://yt3.ggpht.com/a/AATXAJx4y3EbLBYR405vabr6Vu-uEmJT6c3bCvfmDhexFA=s512-c-k-c0x00ffffff-no-rj',
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
          <Title>VITOR METAFORANDO - Flow Podcast #154</Title>
        </TextTicker>
        <Artist>Flow</Artist>
      </Content>

      <ActionButtonContainer>
        <ActionButton>
          <MaterialIcons
            name='play-arrow'
            size={24}
            color={theme.colors.white}
          />
        </ActionButton>
      </ActionButtonContainer>
    </Container>
  )
}

export default Player
