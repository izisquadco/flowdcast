import styled from 'styled-components/native'
import { theme } from 'styled-tools'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View``

export const Wrapper = styled.FlatList``

export const Podcast = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 120px;
  height: 120px;
  margin-right: ${theme('spacing.default.px')};
  border-radius: ${theme('spacing.sm.px')};
`

export const Content = styled.View`
  height: 120px;
  justify-content: space-between;
`

export const Artist = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Feed = styled.View``

export const FeedLabel = styled.Text`
  margin-bottom: ${theme('spacing.xs.px')};
  font-size: 12px;
  font-weight: 700;
  color: ${theme('colors.placeholder')};
  text-transform: uppercase;
`

export const FeedButtons = styled.View`
  flex-direction: row;
`

export const FeedButton = styled.TouchableOpacity`
  margin-right: ${theme('spacing.default.px')};
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
