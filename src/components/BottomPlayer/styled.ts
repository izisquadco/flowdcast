import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding-horizontal: ${theme('spacing.default.px')};
  background-color: ${theme('colors.background')};
  border-top-width: 1px;
  border-top-color: ${theme('colors.foreground')};
`

export const Artwork = styled.Image`
  width: 50px;
  height: 50px;
  aspect-ratio: 1;
`

export const Content = styled.View`
  flex: 1;
  justify-content: center;
  height: 72px;
  padding-horizontal: ${theme('spacing.default.px')};
`

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Artist = styled.Text`
  font-weight: 700;
  color: ${theme('colors.placeholder')};
`

export const ActionButtonContainer = styled.View`
  border-radius: 16px;
  overflow: hidden;
`

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: ${theme('colors.foreground')};
`
