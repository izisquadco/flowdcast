import styled from 'styled-components/native'
import Slider from '@react-native-community/slider'
import { theme } from 'styled-tools'
import { Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const boundWidth = width - 32

export const Container = styled.View`
  flex: 1;
  background-color: ${theme('colors.background')};
`

export const Header = styled.View`
  align-items: center;
`

export const Artwork = styled.Image`
  width: ${boundWidth}px;
  aspect-ratio: 1;
  margin-bottom: ${theme('spacing.lg.px')};
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

export const Wrapper = styled.View`
  padding-top: ${theme('spacing.lg.px')};
`

export const ProgressContainer = styled.View``

export const Progress = styled(Slider)`
  width: 100%;
  /* height: 40px; */
`

export const Start = styled.Text``

export const End = styled.Text``

export const ActionButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const ActionButton = styled.TouchableOpacity`
  margin-right: ${theme('spacing.default.px')};
  margin-left: ${theme('spacing.default.px')};
`
