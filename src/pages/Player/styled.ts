import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'
import { theme } from 'styled-tools'

export const Container = styled.View`
  flex: 1;
  padding-horizontal: ${theme('spacing.default.px')};
  padding-bottom: ${theme('spacing.default.px')};
  background-color: ${theme('colors.background')};
`

export const Header = styled.View`
  align-items: center;
`

export const Artwork = styled.Image`
  width: 100%;
  aspect-ratio: 1;
  margin-bottom: ${theme('spacing.md.px')};
`

export const Wrapper = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  justify-content: space-between;
`

export const Details = styled.View`
  align-items: center;
`

export const Title = styled.Text`
  margin-bottom: ${theme('spacing.sm.px')};
  font-size: 18px;
  font-weight: 700;
  color: ${theme('colors.white')};
`

export const Artist = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${theme('colors.placeholder')};
`

export const PlayerContainer = styled.View``

export const ProgressContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Progress = styled(Slider)`
  flex: 1;
  height: 40px;
`

export const Start = styled.Text`
  margin-right: ${theme('spacing.sm.px')};
  font-weight: 700;
  color: ${theme('colors.placeholder')};
`

export const End = styled.Text`
  margin-left: ${theme('spacing.sm.px')};
  font-weight: 700;
  color: ${theme('colors.placeholder')};
`

export const ActionButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ActionButton = styled.TouchableOpacity`
  margin-right: ${theme('spacing.default.px')};
  margin-left: ${theme('spacing.default.px')};
`
