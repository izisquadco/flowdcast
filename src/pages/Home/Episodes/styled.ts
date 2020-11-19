import styled from 'styled-components/native'
import { theme } from 'styled-tools'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View``

export const Wrapper = styled.FlatList``

export const Header = styled.View``

export const Label = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Episode = styled(RectButton)`
  padding: ${theme('spacing.default.px')};
`

export const Content = styled.View``

export const Title = styled.Text`
  margin-bottom: ${theme('spacing.xs.px')};
  font-size: 16px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Description = styled.Text`
  margin-bottom: ${theme('spacing.sm.px')};
  color: ${theme('colors.placeholder')};
`

export const Artist = styled.Text`
  margin-bottom: ${theme('spacing.sm.px')};
  font-size: 16px;
  font-weight: 700;
  color: ${theme('colors.placeholder')};
`

export const PlayButtonContainer = styled.View`
  align-self: flex-start;
`

export const PlayButton = styled(RectButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  padding-left: ${theme('spacing.default.px')};
  padding-right: ${theme('spacing.default.px')};
  background-color: ${theme('colors.foreground')};
  border-radius: 13px;
`

export const PlayButtonText = styled.Text`
  font-size: 10px;
  color: ${theme('colors.white')};
  font-weight: 700;
  text-transform: uppercase;
`
