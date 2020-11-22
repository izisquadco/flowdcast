import React, { useCallback, useContext } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Linking } from 'react-native'
import { ThemeContext } from 'styled-components'

import podcast from './podcast.json'

import {
  Container,
  Wrapper,
  Podcast,
  Avatar,
  Content,
  Artist,
  Feed,
  FeedLabel,
  FeedButtons,
  FeedButton,
  Footer,
  Label,
} from './styled'

interface Feed {
  id: string
  icon: string
  url: string
}

const Profile: React.FC = () => {
  const theme = useContext(ThemeContext)

  const handleLinking = useCallback(async url => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    }
  }, [])

  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({ item: { avatar, artist, feed } }) => (
      <Podcast>
        <Avatar source={{ uri: avatar }} />

        <Content>
          <Artist>{artist}</Artist>
          <Feed>
            <FeedLabel>Ao vivo</FeedLabel>
            <FeedButtons>
              {feed.map(({ id, icon, url }: Feed) => (
                <FeedButton key={id} onPress={() => handleLinking(url)}>
                  <MaterialCommunityIcons
                    name={icon}
                    size={32}
                    color={theme.colors[icon]}
                  />
                </FeedButton>
              ))}
            </FeedButtons>
          </Feed>
        </Content>
      </Podcast>
    ),
    [handleLinking, theme.colors],
  )

  return (
    <Container>
      <Wrapper
        data={podcast}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={{
          paddingLeft: theme.spacing.default.v,
        }}
        showsHorizontalScrollIndicator={false}
        horizontal
      />

      <Footer>
        <Label>Episódios</Label>
      </Footer>
    </Container>
  )
}

export default Profile
