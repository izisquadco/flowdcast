import styled from 'styled-components/native'
import { theme } from 'styled-tools'

export const Container = styled.View``

export const Wrapper = styled.FlatList``

export const Podcast = styled.TouchableOpacity`
  margin-right: ${theme('spacing.default.px')};
`

export const Avatar = styled.Image`
  width: 80px;
  height: 80px;
  margin-bottom: ${theme('spacing.sm.px')};
  border-radius: ${theme('spacing.sm.px')};
`

export const Artist = styled.Text`
  font-weight: 700;
  color: #fff;
`
