import styled, { css } from 'styled-components/native'
import { theme, ifProp } from 'styled-tools'

interface PodcastProps {
  disabled: boolean
}

export const Container = styled.View``

export const Wrapper = styled.FlatList``

export const Podcast = styled.TouchableOpacity<PodcastProps>`
  margin-right: ${theme('spacing.default.px')};

  ${ifProp(
    'disabled',
    css`
      opacity: 0.2;
    `,
  )}
`

export const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: ${theme('spacing.sm.px')};
  border-radius: ${theme('spacing.sm.px')};
`

export const Artist = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Footer = styled.View`
  margin-top: ${theme('spacing.lg.px')};
  margin-bottom: ${theme('spacing.default.px')};
  padding-horizontal: ${theme('spacing.default.px')};
`

export const Label = styled.Text`
  font-weight: 700;
  color: ${theme('colors.placeholder')};
  text-transform: uppercase;
`
