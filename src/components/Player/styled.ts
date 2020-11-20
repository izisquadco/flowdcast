import styled from 'styled-components/native'
import { theme } from 'styled-tools'
import { RectButton } from 'react-native-gesture-handler'

export const Container = styled.View`
  position: absolute;
  bottom: 0;
  z-index: 1;
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${theme('spacing.default.px')};
  background-color: #000;
`

export const Artwork = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: ${theme('radius.default.px')};
`

export const Content = styled.View`
  height: 72px;
  flex: 1;
  padding: ${theme('spacing.default.px')};
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Artist = styled.Text`
  margin-bottom: ${theme('spacing.sm.px')};
  font-size: 16px;
  font-weight: 700;
  color: ${theme('colors.placeholder')};
`

export const ActionButtonContainer = styled.View`
  border-radius: 16px;
  overflow: hidden;
`

export const ActionButton = styled(RectButton)`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${theme('colors.foreground')};
`
