import React, { useContext, useCallback } from 'react'
import { ThemeContext } from 'styled-components'

import Podcasts from './Podcasts'

import {
  Container,
  Wrapper,
  Header,
  Label,
  Episode,
  Content,
  Title,
  Description,
  Artist,
  PlayButtonContainer,
  PlayButton,
  PlayButtonText,
} from './styled'

const data = [
  {
    id: 1,
    artist: 'Flow',
    title: 'Werdum e Wanderlei Silva - #255',
    description:
      'Werdum e Wanderlei Silva são lendas vivas e colaram num Flow que foi surpresa, até pra gente.',
  },

  {
    id: 8,
    artist: 'Podpah',
    title: 'Duzz - #14',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla semper ligula quis ante tincidunt scelerisque. Sed a augue et neque vehicula rutrum non tempor neque. Integer eleifend aliquet dui.',
  },

  {
    id: 9,
    artist: 'Podpah',
    title: 'Vitor Metaforando - #15',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },

  {
    id: 2,
    artist: 'Flow',
    title: 'Pedro Menezes - #254',
    description:
      'Pedro Menezes é um economista baiano que veio nos explicar pq o Monark tinha sido cancelado dessa vez.',
  },

  {
    id: 3,
    artist: 'Flow',
    title: 'Jilmar Tatto - #253',
    description:
      'Jilmar Tatto é o candidato à prefeitura do PT e não tem nenhuma tatuagem, o que é decepcionante.',
  },

  {
    id: 5,
    artist: 'Flow',
    title: 'Joice Hasselmann - #252',
    description:
      'Joice Hasselmann é uma deputada federal e candidata à prefeitura de SP. [solteira inclusive]',
  },

  {
    id: 6,
    artist: 'Flow',
    title: 'Seu Creyson - #251',
    description:
      'Seu Creyson é o maior fala bosta do cenário brasileiro de dota 2 e faz live pra xingar os outros.',
  },

  {
    id: 4,
    artist: 'Flow',
    title: 'Mituo - #250',
    description:
      'Mituo é um maconhista safado que tá passando por uma fase de redescobertas.',
  },
]

const Episodes: React.FC = () => {
  const theme = useContext(ThemeContext)

  const keyExtractor = useCallback(({ id }) => String(id), [])

  const renderItem = useCallback(
    ({ item: { title, description, artist } }) => (
      <Episode>
        <Content>
          <Title>{title}</Title>
          <Description>{description}</Description>
          <Artist>{artist}</Artist>

          <PlayButtonContainer>
            <PlayButton>
              <PlayButtonText>TOCAR</PlayButtonText>
            </PlayButton>
          </PlayButtonContainer>
        </Content>
      </Episode>
    ),
    [],
  )

  const renderHeader = useCallback(() => <Podcasts />, [])

  return (
    <Container>
      <Wrapper
        data={data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        // contentContainerStyle={{
        //   paddingHorizontal: theme.spacing.default.v,
        // }}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  )
}

export default Episodes
